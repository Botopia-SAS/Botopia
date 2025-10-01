# 🚨 ERROR AL SUBIR PDFs EN PRODUCCIÓN

## ❌ PROBLEMA IDENTIFICADO

**Error:** `500 (Internal Server Error)` al subir PDF

**Causa raíz:** Vercel Serverless **NO PUEDE ESCRIBIR** en el filesystem (`public/quotes/`)

---

## 🔧 SOLUCIÓN: Usar Vercel Blob Storage

Vercel tiene almacenamiento propio para archivos. Necesitamos cambiar el código para usar **Vercel Blob**.

---

## 📋 PASOS PARA ARREGLAR

### 1️⃣ Instalar Vercel Blob SDK

En tu terminal local:

```bash
npm install @vercel/blob
```

### 2️⃣ Obtener Vercel Blob Token

1. Ve a: https://vercel.com/dashboard
2. Tu proyecto → **Storage** → **Create Database**
3. Selecciona **Blob**
4. Copia el token que te da

### 3️⃣ Agregar Variable de Entorno

En Vercel:
- **Settings** → **Environment Variables**
- Agrega: `BLOB_READ_WRITE_TOKEN` = [tu token]

### 4️⃣ Actualizar el código de upload-quote

Cambiaré el código para usar Vercel Blob en lugar del filesystem.

---

## 🎯 ALTERNATIVA MÁS RÁPIDA: Usar Cloudinary

Ya tienes Cloudinary configurado. Podemos usar eso para los PDFs también.

**Ventajas:**
- Ya está configurado
- No necesitas crear nada nuevo
- Funciona inmediatamente

**¿Prefieres?**
1. **Vercel Blob** (oficial de Vercel, más integrado)
2. **Cloudinary** (ya configurado, más rápido)

---

## ⚠️ IMPORTANTE

**El filesystem de Vercel es read-only.** Por eso el error 500.

Los archivos subidos se **pierden** después de cada deployment porque Vercel usa contenedores efímeros.

**Necesitamos almacenamiento persistente externo.**

---

Dime cuál prefieres y actualizo el código ahora mismo. 🚀
