// Script rápido de prueba del sistema de admin
// Ejecutar con: npx tsx scripts/test-admin-system.ts

import { config } from "dotenv";
config({ path: ".env.local" });

console.log("\n🧪 PRUEBA DEL SISTEMA DE ADMINISTRACIÓN DE COTIZACIONES\n");
console.log("═".repeat(60));

const fs = require("fs");
const path = require("path");

// 1. Verificar estructura de archivos
console.log("\n📁 1. VERIFICANDO ESTRUCTURA DE ARCHIVOS");
console.log("─".repeat(60));

const requiredFiles = [
  "app/[locale]/admin/cotizaciones/page.tsx",
  "app/api/upload-quote/route.ts",
  "components/AdminQuotes.tsx",
  "public/quotes",
];

let allGood = true;

requiredFiles.forEach((file) => {
  const fullPath = path.join(process.cwd(), file);
  const exists = fs.existsSync(fullPath);

  const isDirectory = file === "public/quotes";
  const type = isDirectory ? "Directorio" : "Archivo";

  console.log(`${exists ? "✅" : "❌"} ${type}: ${file}`);

  if (!exists) allGood = false;
});

// 2. Verificar permisos de escritura en quotes/
console.log("\n📝 2. VERIFICANDO PERMISOS DE ESCRITURA");
console.log("─".repeat(60));

const quotesDir = path.join(process.cwd(), "public", "quotes");
try {
  // Intentar crear archivo de prueba
  const testFile = path.join(quotesDir, "test-write.tmp");
  fs.writeFileSync(testFile, "test");
  fs.unlinkSync(testFile);
  console.log("✅ Permisos de escritura en public/quotes/ OK");
} catch (error) {
  console.log("❌ No se puede escribir en public/quotes/");
  console.log("   Error:", (error as Error).message);
  allGood = false;
}

// 3. Verificar variable BASE_URL
console.log("\n🌐 3. VERIFICANDO VARIABLES DE ENTORNO");
console.log("─".repeat(60));

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
if (baseUrl) {
  console.log(`✅ NEXT_PUBLIC_BASE_URL: ${baseUrl}`);
} else {
  console.log("⚠️  NEXT_PUBLIC_BASE_URL no configurada");
  console.log("   Los links generados usarán localhost:3000 por defecto");
}

// 4. Contar PDFs existentes
console.log("\n📊 4. ESTADO ACTUAL DEL SISTEMA");
console.log("─".repeat(60));

try {
  const files = fs.readdirSync(quotesDir);
  const pdfFiles = files.filter((f: string) => f.endsWith(".pdf"));

  console.log(`📄 PDFs en el sistema: ${pdfFiles.length}`);

  if (pdfFiles.length > 0) {
    console.log("   Últimos 5:");
    pdfFiles.slice(0, 5).forEach((file: string) => {
      const stats = fs.statSync(path.join(quotesDir, file));
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`   • ${file} (${sizeMB} MB)`);
    });
  }
} catch (error) {
  console.log("⚠️  No se pudo leer el directorio de quotes");
}

// 5. URLs del sistema
console.log("\n🔗 5. URLS DEL SISTEMA");
console.log("─".repeat(60));

const base = baseUrl || "http://localhost:3000";

console.log(`📋 Panel de Administración:`);
console.log(`   ${base}/es/admin/cotizaciones`);

console.log(`\n🧪 Ejemplo de URL de cliente:`);
console.log(`   ${base}/es/cotizacion/quote-1234567890`);

// Resumen final
console.log("\n" + "═".repeat(60));

if (allGood) {
  console.log("\n✅ SISTEMA LISTO PARA USAR!\n");
  console.log("📝 PRÓXIMOS PASOS:");
  console.log("1. Inicia el servidor: npm run dev");
  console.log(`2. Abre: ${base}/es/admin/cotizaciones`);
  console.log("3. Arrastra un PDF de prueba");
  console.log("4. Copia el link generado y pruébalo en incógnito");
} else {
  console.log("\n⚠️  HAY PROBLEMAS QUE RESOLVER\n");
  console.log("📝 REVISA LOS ERRORES ARRIBA");
}

console.log("\n" + "═".repeat(60));

console.log("\n📚 DOCUMENTACIÓN COMPLETA:");
console.log("   Ver archivo: ADMIN_COTIZACIONES_GUIA.md\n");
