# ⚠️ ACCIÓN REQUERIDA: Agregar Variables en Vercel

## 🔐 Variables Faltantes en Vercel

Para que funcione la carga de PDFs, necesitas agregar estas 2 variables en Vercel:

---

## 📋 PASO 1: Ir a Vercel

1. **Abre:** https://vercel.com/dashboard
2. **Selecciona:** Tu proyecto "Botopia"
3. **Ve a:** Settings → Environment Variables

---

## 📋 PASO 2: Agregar Variables

### Variable 1: CLOUDINARY_API_KEY
```
Name: CLOUDINARY_API_KEY
Value: 789867751362878
Environment: Production ✅
```

### Variable 2: CLOUDINARY_API_SECRET
```
Name: CLOUDINARY_API_SECRET
Value: gyQDNMssYedJYW-EkvU_6DIvWOU
Environment: Production ✅
```

---

## 📋 PASO 3: Redeploy

1. **Ve a:** Deployments
2. **Click** en los 3 puntos del último deployment
3. **Selecciona:** "Redeploy"
4. **Espera** 2-3 minutos

---

## ✅ DESPUÉS DEL REDEPLOY

Prueba subir un PDF en:
```
https://www.botopia.tech/es/admin/cotizaciones
```

**Debería funcionar perfectamente.** ✅

---

## 🔍 Verificar que funciona:

1. **Arrastra un PDF** al admin panel
2. **Verás** "PDF subido exitosamente"
3. **Copia el link** generado
4. **Ábrelo** en navegador privado
5. **Verifica** que se muestre el PDF

---

## 📊 Cómo funciona ahora:

### Antes (Filesystem - ❌ No funciona en Vercel):
```
Usuario → Upload → Vercel Filesystem → Error 500
```

### Ahora (Cloudinary - ✅ Funciona):
```
Usuario → Upload → Cloudinary → URL generada → Cliente ve PDF
```

---

## 🌐 URLs de Cloudinary

Los PDFs ahora se almacenan en:
```
https://res.cloudinary.com/dqay3uml6/raw/upload/v1234567890/quotes/quote-XXXXX.pdf
```

**Ventajas:**
- ✅ Persistente (no se pierden los PDFs)
- ✅ CDN global (carga rápida en todo el mundo)
- ✅ Compatible con Vercel Serverless
- ✅ Escalable (hasta 10GB gratis)
- ✅ Backup automático

---

**¡Agrega las variables y redeploya!** 🚀
