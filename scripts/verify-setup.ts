// Script de verificación de configuración
// Ejecutar con: npx tsx scripts/verify-setup.ts

import { config } from "dotenv";
config({ path: ".env.local" });

console.log("\n🔍 VERIFICACIÓN DE CONFIGURACIÓN - Sistema de Cotizaciones\n");
console.log("═".repeat(60));

// 1. Variables de entorno
console.log("\n📦 1. VARIABLES DE ENTORNO");
console.log("─".repeat(60));

const checks = [
  {
    name: "NEXT_PUBLIC_GOOGLE_SHEET_ID",
    value: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
    required: true,
    expected: "1tA3mwxbzGKG28ZydqsZT0GcmEft0i1kxfXulSHByLyU",
  },
  {
    name: "GOOGLE_SERVICE_ACCOUNT_JSON",
    value: process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
    required: true,
    display: "JSON configurado",
  },
  {
    name: "NEXT_PUBLIC_GTM_ID",
    value: process.env.NEXT_PUBLIC_GTM_ID,
    required: true,
    expected: "GTM-WGV6HT5K",
  },
  {
    name: "NEXT_PUBLIC_META_PIXEL_ID",
    value:
      process.env.NEXT_PUBLIC_META_PIXEL_ID ||
      process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    required: true,
    expected: "4287359754922240",
  },
  {
    name: "META_PIXEL_ACCESS_TOKEN",
    value: process.env.META_PIXEL_ACCESS_TOKEN,
    required: false,
    display: "Token configurado (opcional para Conversions API)",
  },
  {
    name: "NEXT_PUBLIC_BASE_URL",
    value: process.env.NEXT_PUBLIC_BASE_URL,
    required: true,
    expected: "http://localhost:3000",
  },
];

let allPassed = true;

checks.forEach((check) => {
  const icon = check.value ? "✅" : check.required ? "❌" : "⚠️ ";
  const status = check.value ? "OK" : check.required ? "FALTA" : "Opcional";

  console.log(`${icon} ${check.name}: ${status}`);

  if (check.value && check.expected && check.value !== check.expected) {
    console.log(`   ⚠️  Esperado: ${check.expected}`);
    console.log(`   ⚠️  Actual: ${check.value}`);
  }

  if (check.display && check.value) {
    const preview =
      check.value.length > 50
        ? `${check.value.substring(0, 50)}...`
        : check.value;
    console.log(`   ℹ️  ${check.display}`);
  }

  if (!check.value && check.required) {
    allPassed = false;
  }
});

// 2. Archivos críticos
console.log("\n📁 2. ARCHIVOS CRÍTICOS");
console.log("─".repeat(60));

const fs = require("fs");
const path = require("path");

const files = [
  "components/QuoteForm.tsx",
  "components/AdminQuotes.tsx",
  "lib/sheets.ts",
  "lib/tracking.ts",
  "app/api/quote-data/route.ts",
  "app/api/upload-quote/route.ts",
  "app/api/pdf/[id]/route.ts",
  "app/[locale]/admin/cotizaciones/page.tsx",
  "app/[locale]/cotizacion/[id]/page.tsx",
  ".env.local",
  "public/quotes/README.md",
];

files.forEach((file) => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`${exists ? "✅" : "❌"} ${file}`);
  if (!exists) allPassed = false;
});

// 3. Dependencias
console.log("\n📚 3. DEPENDENCIAS NPM");
console.log("─".repeat(60));

const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8")
);

const requiredDeps = ["googleapis", "next", "react", "framer-motion", "dotenv"];

requiredDeps.forEach((dep) => {
  const version =
    packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep];
  console.log(
    `${version ? "✅" : "❌"} ${dep}${version ? ` (${version})` : ""}`
  );
  if (!version) allPassed = false;
});

// 4. URLs de prueba
console.log("\n🌐 4. URLs PARA PRUEBAS");
console.log("─".repeat(60));

const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
if (sheetId) {
  console.log(`📊 Google Sheet:`);
  console.log(`   https://docs.google.com/spreadsheets/d/${sheetId}`);
}

console.log(`🎯 Panel de Administración:`);
console.log(`   http://localhost:3000/es/admin/cotizaciones`);

console.log(`🧪 Página de prueba (cliente):`);
console.log(`   http://localhost:3000/es/cotizacion/test-${Date.now()}`);

console.log(`📈 Google Tag Manager:`);
console.log(`   https://tagmanager.google.com/`);

console.log(`🔵 Meta Events Manager:`);
console.log(`   https://business.facebook.com/events_manager2/test_events`);

// 5. Test de Google Sheets
console.log("\n🧪 5. TEST DE CONEXIÓN A GOOGLE SHEETS");
console.log("─".repeat(60));

(async () => {
  try {
    const { google } = require("googleapis");

    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
      !process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
    ) {
      console.log("⚠️  No se puede probar - faltan credenciales");
      return;
    }

    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    console.log("🔄 Probando conexión...");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: "Sheet1!A1:M1",
    });

    console.log("✅ Conexión exitosa!");
    console.log(`✅ Service Account: ${credentials.client_email}`);

    if (response.data.values && response.data.values.length > 0) {
      console.log(
        `✅ Encabezados encontrados: ${response.data.values[0].length} columnas`
      );
      console.log(`   ${response.data.values[0].slice(0, 3).join(", ")}...`);
    } else {
      console.log(
        "⚠️  No se encontraron encabezados - ejecuta: npx tsx scripts/setup-google-sheet-headers.ts"
      );
    }
  } catch (error: any) {
    console.log("❌ Error de conexión:", error.message);
    allPassed = false;
  }

  // Resumen final
  console.log("\n" + "═".repeat(60));
  console.log(
    allPassed
      ? "\n✅ TODOS LOS CHECKS PASARON - Sistema listo para usar!\n"
      : "\n⚠️  ALGUNOS CHECKS FALLARON - Revisa los errores arriba\n"
  );
  console.log("═".repeat(60));

  console.log("\n📝 PRÓXIMOS PASOS:");
  if (!allPassed) {
    console.log("1. Corrige los errores mostrados arriba");
    console.log("2. Ejecuta este script nuevamente");
  } else {
    console.log("1. Reinicia el servidor: Ctrl+C → npm run dev");
    console.log("2. Panel Admin: http://localhost:3000/es/admin/cotizaciones");
    console.log("3. Arrastra un PDF de prueba");
    console.log("4. Copia el link y ábrelo en navegador privado");
    console.log("5. Verifica datos en Google Sheet");
    console.log("\n📚 Documentación:");
    console.log("   • TEST_RAPIDO.md - Pruebas rápidas (5 min)");
    console.log("   • RESUMEN_EJECUTIVO.md - Resumen completo");
    console.log("   • ADMIN_COTIZACIONES_GUIA.md - Guía de uso");
  }
  console.log("\n");
})();
