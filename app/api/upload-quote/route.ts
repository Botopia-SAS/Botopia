// API para subir PDFs usando Cloudinary
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const quoteId = formData.get("quoteId") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No se proporcionó ningún archivo" },
        { status: 400 }
      );
    }

    if (!quoteId) {
      return NextResponse.json(
        { error: "No se proporcionó ID de cotización" },
        { status: 400 }
      );
    }

    // Validar que sea un PDF
    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Solo se permiten archivos PDF" },
        { status: 400 }
      );
    }

    // Validar tamaño (máximo 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "El archivo es muy grande. Máximo 10MB" },
        { status: 400 }
      );
    }

    // Convertir archivo a buffer y luego a base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const dataURI = `data:${file.type};base64,${base64}`;

    // Subir a Cloudinary
    const uploadResult = await cloudinary.uploader.upload(dataURI, {
      resource_type: "raw", // Para PDFs usamos "raw"
      public_id: quoteId,
      folder: "quotes", // Carpeta en Cloudinary
      overwrite: true,
    });

    // Generar URL del cliente
    const clientUrl = `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/es/cotizacion/${quoteId}`;

    console.log(`✅ PDF subido exitosamente a Cloudinary: ${quoteId}.pdf`);
    console.log(`📎 Cloudinary URL: ${uploadResult.secure_url}`);

    return NextResponse.json({
      success: true,
      message: "PDF subido exitosamente",
      quoteId,
      fileName: `${quoteId}.pdf`,
      fileSize: file.size,
      clientUrl,
      cloudinaryUrl: uploadResult.secure_url, // URL directa del PDF en Cloudinary
    });
  } catch (error) {
    console.error("Error subiendo PDF a Cloudinary:", error);
    return NextResponse.json(
      { error: "Error al subir el archivo" },
      { status: 500 }
    );
  }
}

// API para listar PDFs existentes desde Cloudinary
export async function GET() {
  try {
    // Listar recursos en la carpeta "quotes" de Cloudinary
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "raw", // PDFs están como "raw"
      prefix: "quotes/", // Carpeta en Cloudinary
      max_results: 500,
    });

    const quotes = result.resources.map((resource: any) => {
      const quoteId = resource.public_id.replace("quotes/", "");

      return {
        quoteId,
        fileName: `${quoteId}.pdf`,
        size: resource.bytes,
        uploadDate: new Date(resource.created_at),
        clientUrl: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/es/cotizacion/${quoteId}`,
        cloudinaryUrl: resource.secure_url,
      };
    });

    // Ordenar por fecha de subida (más reciente primero)
    quotes.sort(
      (a: any, b: any) => b.uploadDate.getTime() - a.uploadDate.getTime()
    );

    return NextResponse.json({ quotes });
  } catch (error) {
    console.error("Error listando PDFs desde Cloudinary:", error);
    return NextResponse.json(
      { error: "Error al listar archivos" },
      { status: 500 }
    );
  }
}

// API para eliminar PDF de Cloudinary
export async function DELETE(request: NextRequest) {
  try {
    const { quoteId } = await request.json();

    if (!quoteId) {
      return NextResponse.json(
        { error: "No se proporcionó ID de cotización" },
        { status: 400 }
      );
    }

    // Eliminar de Cloudinary
    await cloudinary.uploader.destroy(`quotes/${quoteId}`, {
      resource_type: "raw",
    });

    console.log(`🗑️ PDF eliminado de Cloudinary: ${quoteId}.pdf`);

    return NextResponse.json({
      success: true,
      message: "PDF eliminado exitosamente",
    });
  } catch (error) {
    console.error("Error eliminando PDF de Cloudinary:", error);
    return NextResponse.json(
      { error: "Error al eliminar el archivo" },
      { status: 500 }
    );
  }
}
