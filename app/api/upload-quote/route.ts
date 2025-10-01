// API para subir PDFs
import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

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

    // Crear directorio si no existe
    const quotesDir = join(process.cwd(), "public", "quotes");
    if (!existsSync(quotesDir)) {
      await mkdir(quotesDir, { recursive: true });
    }

    // Convertir archivo a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Guardar archivo
    const filePath = join(quotesDir, `${quoteId}.pdf`);
    await writeFile(filePath, buffer);

    // Generar URL del cliente
    const clientUrl = `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/es/cotizacion/${quoteId}`;

    console.log(`✅ PDF subido exitosamente: ${quoteId}.pdf`);

    return NextResponse.json({
      success: true,
      message: "PDF subido exitosamente",
      quoteId,
      fileName: `${quoteId}.pdf`,
      fileSize: file.size,
      clientUrl,
    });
  } catch (error) {
    console.error("Error subiendo PDF:", error);
    return NextResponse.json(
      { error: "Error al subir el archivo" },
      { status: 500 }
    );
  }
}

// API para listar PDFs existentes
export async function GET() {
  try {
    const { readdir, stat } = require("fs/promises");
    const quotesDir = join(process.cwd(), "public", "quotes");

    if (!existsSync(quotesDir)) {
      return NextResponse.json({ quotes: [] });
    }

    const files = await readdir(quotesDir);
    const pdfFiles = files.filter((file: string) => file.endsWith(".pdf"));

    const quotes = await Promise.all(
      pdfFiles.map(async (file: string) => {
        const filePath = join(quotesDir, file);
        const stats = await stat(filePath);
        const quoteId = file.replace(".pdf", "");

        return {
          quoteId,
          fileName: file,
          size: stats.size,
          uploadDate: stats.mtime,
          clientUrl: `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/es/cotizacion/${quoteId}`,
        };
      })
    );

    // Ordenar por fecha de subida (más reciente primero)
    quotes.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());

    return NextResponse.json({ quotes });
  } catch (error) {
    console.error("Error listando PDFs:", error);
    return NextResponse.json(
      { error: "Error al listar archivos" },
      { status: 500 }
    );
  }
}

// API para eliminar PDF
export async function DELETE(request: NextRequest) {
  try {
    const { quoteId } = await request.json();

    if (!quoteId) {
      return NextResponse.json(
        { error: "No se proporcionó ID de cotización" },
        { status: 400 }
      );
    }

    const { unlink } = require("fs/promises");
    const filePath = join(process.cwd(), "public", "quotes", `${quoteId}.pdf`);

    if (!existsSync(filePath)) {
      return NextResponse.json(
        { error: "El archivo no existe" },
        { status: 404 }
      );
    }

    await unlink(filePath);

    console.log(`🗑️ PDF eliminado: ${quoteId}.pdf`);

    return NextResponse.json({
      success: true,
      message: "PDF eliminado exitosamente",
    });
  } catch (error) {
    console.error("Error eliminando PDF:", error);
    return NextResponse.json(
      { error: "Error al eliminar el archivo" },
      { status: 500 }
    );
  }
}
