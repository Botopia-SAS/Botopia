import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Obtener la URL del PDF desde Cloudinary
    const publicId = `quotes/${id}`;
    
    try {
      // Verificar que el recurso existe en Cloudinary
      const resource = await cloudinary.api.resource(publicId, {
        resource_type: "raw",
      });

      // Redirigir directamente a la URL de Cloudinary
      return NextResponse.redirect(resource.secure_url);
    } catch (cloudinaryError) {
      console.error("PDF not found in Cloudinary:", cloudinaryError);
      return NextResponse.json(
        { error: "PDF not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("PDF fetch error:", error);
    return NextResponse.json({ error: "PDF not found" }, { status: 404 });
  }
}
