# Carpeta de Cotizaciones

Esta carpeta almacena los PDFs de las cotizaciones subidas por el equipo.

## Estructura:

```
quotes/
├── quote-1234567890.pdf
├── quote-1234567891.pdf
└── ...
```

## Notas:

- Los archivos se nombran automáticamente como `quote-[timestamp].pdf`
- Máximo 10MB por archivo
- Solo archivos PDF permitidos
- Los archivos se sirven desde `/api/pdf/[id]`

**No elimines esta carpeta**
