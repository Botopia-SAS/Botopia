# 🚨 PROBLEMA: Links generados con localhost:3000

## ❌ CAUSA DEL PROBLEMA

La variable `NEXT_PUBLIC_BASE_URL` en Vercel **NO está actualizada**.

Veo en tu screenshot que tienes:
```
NEXT_PUBLIC_PDF_BASE_URL=https://www.botopia.tech/pdfs
```

Pero esta variable **NO se usa** en el código actual.

---

## ✅ SOLUCIÓN INMEDIATA

### 1️⃣ En Vercel - Actualizar Variable:

1. **Ve a:** Settings → Environment Variables
2. **Busca:** `NEXT_PUBLIC_BASE_URL`
3. **Debe estar en:** `https://www.botopia.tech` (SIN `/pdfs`)
4. **Si no existe, agrégala:**
   ```
   Name: NEXT_PUBLIC_BASE_URL
   Value: https://www.botopia.tech
   Environment: Production ✅
   ```

### 2️⃣ Eliminar Variable Innecesaria:

**Puedes eliminar:**
```
NEXT_PUBLIC_PDF_BASE_URL
```
Ya no se usa en el código.

---

## 🔧 VERIFICAR VARIABLE ACTUAL

En Vercel, busca `NEXT_PUBLIC_BASE_URL` y verifica que tenga:
```
https://www.botopia.tech
```

**NO debe tener:**
- ❌ `http://localhost:3000`
- ❌ `/pdfs` al final
- ❌ Barra `/` al final

---

## 🔄 DESPUÉS DE ACTUALIZAR

1. **Save** la variable
2. **Redeploy** (Deployments → 3 puntos → Redeploy)
3. **Espera 2-3 minutos**
4. **Prueba de nuevo** subiendo un PDF

Los links generados deberían ser:
```
✅ https://www.botopia.tech/es/cotizacion/quote-1759356529798
❌ http://localhost:3000/es/cotizacion/quote-1759356529798
```

---

## 📋 VARIABLES CORRECTAS EN VERCEL

Deberías tener estas variables:

```
✅ NEXT_PUBLIC_BASE_URL = https://www.botopia.tech
✅ NEXT_PUBLIC_GOOGLE_SHEET_ID = 1tA3mwxbzGKG28ZydqsZT0GcmEft0i1kxfXulSHByLyU
✅ GOOGLE_SERVICE_ACCOUNT_JSON = {"type":"service_account",...}
✅ NEXT_PUBLIC_GTM_ID = GTM-WGV6HT5K
✅ NEXT_PUBLIC_META_PIXEL_ID = 4287359754922240
✅ NEXT_PUBLIC_FACEBOOK_PIXEL_ID = 4287359754922240
✅ CLOUDINARY_API_KEY = 789867751362878
✅ CLOUDINARY_API_SECRET = gyQDNMssYedJYW-EkvU_6DIvWOU
✅ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = dqay3uml6
✅ NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = LensPR
✅ NEXT_PUBLIC_CLARITY_ID = spvl4i21z4
```

**Puedes eliminar:**
```
❌ NEXT_PUBLIC_PDF_BASE_URL (no se usa)
```

---

## 🎯 DONDE SE USA NEXT_PUBLIC_BASE_URL

En el código `/app/api/upload-quote/route.ts` línea ~60:

```typescript
const clientUrl = `${
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
}/es/cotizacion/${quoteId}`;
```

Si `NEXT_PUBLIC_BASE_URL` no está configurada o está vacía, usa `localhost:3000` por defecto.

---

**¿Puedes verificar que `NEXT_PUBLIC_BASE_URL` esté configurada correctamente en Vercel?** 🎯
