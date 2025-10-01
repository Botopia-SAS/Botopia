import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Path where sales team uploads PDFs: public/quotes/
    const filePath = join(process.cwd(), "public", "quotes", `${id}.pdf`);

    const fileBuffer = await readFile(filePath);

    // Convert Buffer to Uint8Array for Next.js 15 compatibility
    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="cotizacion-${id}.pdf"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (error) {
    console.error("PDF fetch error:", error);
    return NextResponse.json({ error: "PDF not found" }, { status: 404 });
  }
}
