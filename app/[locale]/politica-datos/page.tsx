import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Política de Tratamiento de Datos Personales | Botopia.tech",
  description: "Conozca cómo Botopia.tech protege y trata sus datos personales conforme a la ley colombiana y mejores prácticas internacionales.",
};

export default async function PoliticaDatosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-base text-gray-800 dark:text-gray-200 mt-24">
      <h1 className="text-3xl font-bold text-purple-700 mb-2">Política de tratamiento de datos personales</h1>
      <p className="mb-2 text-md text-purple-500">Según el articulo 13 del Decreto 1377 de 2013</p>
      <p className="mb-2 text-sm text-gray-500">Última actualización: 5 de enero de 2025</p>
      <p className="mb-6 text-sm text-gray-500">Vigencia: Esta política entra en vigor el 5 de enero de 2025 y permanece vigente de forma indefinida hasta su modificación o revocación</p>
      <hr className="my-6" />

      <h2 className="text-xl font-bold text-purple-600 mt-8 mb-2">1. Identificación del responsable del tratamiento</h2>
      <ul className="mb-6 list-disc ml-6">
        <li><strong>Razón social:</strong> Botopia Technology SAS</li>
        <li><strong>Sitio web:</strong> www.botopia.tech</li>
        <li><strong>Naturaleza jurídica:</strong> Sociedad por Acciones Simplificada - Desarrollo de proyectos de infraestructura tecnológica</li>
        <li><strong>Domicilio principal:</strong> Colombia</li>
        <li><strong>Dirección:</strong> Calle 58A # 30-13 Apto 203, Colombia</li>
        <li><strong>Teléfono:</strong> +57 322 8726267</li>
        <li><strong>Correo electrónico:</strong> contacto@botopia.tech</li>
        <li><strong>Persona responsable de la atención de peticiones:</strong> Responsable de atender las PQRS: Isaac Páez Triana </li>
      </ul>

      <h2 className="text-xl font-bold text-purple-600 mt-8 mb-2">2. Tratamiento y finalidades de los datos personales</h2>
      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">2.1 Tipos de datos personales que recopilamos</h3>
      <ul className="mb-4 list-disc ml-6">
        <li><strong>Datos de identificación:</strong>
          <ul className="list-disc ml-6">
            <li>Número de Identificación Tributaria (NIT) para personas jurídicas</li>
            <li>Tipo y número de documento de identidad (cédula de ciudadanía, cédula de extranjería, pasaporte)</li>
            <li>Fotocopias de documentos de identidad</li>
            <li>Nombre completo y razón social</li>
            <li>Información de contacto (correo electrónico, teléfono, dirección)</li>
          </ul>
        </li>
        <li><strong>Datos técnicos:</strong>
          <ul className="list-disc ml-6">
            <li>Cookies y tecnologías similares (únicamente con su consentimiento)</li>
            <li>Datos de navegación y uso de nuestros servicios</li>
            <li>Información del dispositivo y navegador</li>
            <li>Dirección IP y datos de geolocalización general</li>
          </ul>
        </li>
      </ul>
      <div className="mb-6"><strong>Aclaración importante:</strong> Botopia NO recopila, almacena ni procesa datos sensibles como información financiera, de salud, datos biométricos, orientación sexual, afiliación política o creencias religiosas.</div>

      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">2.2 Finalidades del tratamiento</h3>
      <ul className="mb-4 list-disc ml-6">
        <li><strong>Para clientes y usuarios de servicios:</strong>
          <ol className="list-decimal ml-6">
            <li>Prestación de servicios de desarrollo de software: Gestionar contratos, entregar servicios contratados y brindar soporte técnico</li>
            <li>Comunicación comercial: Enviar información sobre servicios, actualizaciones y contenido relevante</li>
            <li>Gestión administrativa: Facturación, contabilidad y cumplimiento de obligaciones contractuales</li>
            <li>Cumplimiento legal: Satisfacer requerimientos de autoridades competentes en Colombia</li>
            <li>Mejora de servicios: Analizar el uso de nuestros productos para optimizar la experiencia del usuario</li>
            <li>Seguridad: Prevenir fraudes, accesos no autorizados y proteger la integridad de nuestros sistemas</li>
          </ol>
        </li>
        <li><strong>Para cookies y tecnologías de seguimiento:</strong>
          <ul className="list-disc ml-6">
            <li>Cookies necesarias: Funcionalidad básica del sitio web y autenticación</li>
            <li>Cookies analíticas: Métricas de uso y rendimiento (con su consentimiento)</li>
            <li>Cookies de preferencias: Recordar configuraciones del usuario (con su consentimiento)</li>
          </ul>
        </li>
      </ul>
      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">2.3 Base legal para el tratamiento</h3>
      <p className="mb-6"><strong>En Colombia:</strong> Consentimiento informado del titular (artículo 9, Ley 1581 de 2012) y ejecución de contratos</p>

      <h2 className="text-xl font-bold text-purple-600 mt-8 mb-2">3. Derechos de los titulares de datos personales</h2>
      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">3.1 Derechos fundamentales</h3>
      <ul className="mb-6 list-disc ml-6">
        <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted, su origen y finalidad del tratamiento</li>
        <li><strong>Derecho de rectificación:</strong> Solicitar la corrección de datos inexactos, incompletos o desactualizados</li>
        <li><strong>Derecho de cancelación/supresión:</strong> Solicitar la eliminación de sus datos cuando no sean necesarios</li>
        <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos por motivos legítimos</li>
        <li><strong>Derecho de revocación:</strong> Retirar el consentimiento otorgado previamente en cualquier momento</li>
        <li><strong>Derecho de consulta:</strong> Obtener información sobre el uso de sus datos personales</li>
      </ul>

      <h2 className="text-xl font-bold text-purple-600 mt-8 mb-2">4. Procedimiento para ejercer sus derechos</h2>
      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">4.1 Canales de atención</h3>
      <div className="mb-4 space-y-3">
        <p>
          Para radicar solicitudes relacionadas con sus datos personales utilice nuestro formulario de
          PQRS (Peticiones, Quejas, Reclamos y Sugerencias).
        </p>
        <Link
          href={`/${locale}/pqrs`}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-3 rounded-md"
        >
          Abrir formulario de PQRS
        </Link>
      </div>
      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">4.2 Procedimiento detallado</h3>
      <ol className="mb-4 list-decimal ml-6">
        <li><strong>Paso 1 - Presentación de solicitud:</strong>
          <ul className="list-disc ml-6">
            <li>Identifíquese claramente con documento de identidad</li>
            <li>Especifique el derecho que desea ejercer</li>
            <li>Proporcione información detallada sobre su solicitud</li>
            <li>Incluya documentos que soporten su petición si es necesario</li>
          </ul>
        </li>
        <li><strong>Paso 2 - Verificación de identidad:</strong>
          <ul className="list-disc ml-6">
            <li>Verificaremos su identidad para proteger sus datos personales</li>
            <li>Puede requerirse documentación adicional</li>
          </ul>
        </li>
        <li><strong>Paso 3 - Procesamiento:</strong> Colombia: Respuesta máxima en 10 días hábiles (prorrogables por 5 días adicionales)</li>
        <li><strong>Paso 4 - Respuesta:</strong>
          <ul className="list-disc ml-6">
            <li>Le informaremos sobre la viabilidad de su solicitud</li>
            <li>Si procede, ejecutaremos la acción solicitada</li>
            <li>Si no procede, explicaremos las razones legales</li>
          </ul>
        </li>
      </ol>
      <h3 className="text-lg font-semibold text-purple-500 mt-4 mb-2">4.3 Solicitudes sin costo</h3>
      <div className="mb-6">El ejercicio de estos derechos es <strong>gratuito</strong>. No cobramos por atender sus solicitudes de acceso, rectificación, cancelación u oposición.</div>

      <h2 className="text-xl font-bold text-purple-600 mt-8 mb-2">5. Mecanismo de atención PQR</h2>
      <div className="mb-6 space-y-3">
        <p>
          Para ejercer sus derechos o realizar consultas sobre el tratamiento de sus datos personales,
          por favor completa nuestro formulario de PQRS (Petición, Queja, Reclamo o Sugerencia).
        </p>
        <Link
          href={`/${locale}/pqrs`}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-3 rounded-md"
        >
          Ir al formulario de PQRS
        </Link>
      </div>

      <h2 className="text-xl font-bold text-purple-600 mt-8 mb-2">Declaración de cumplimiento</h2>
      <div className="mb-6">Esta política de tratamiento de datos personales ha sido diseñada para cumplir con:
        <ul className="list-disc ml-6">
          <li>Ley 1581 de 2012 y Decreto 1377 de 2013 de Colombia</li>
          <li>Mejores prácticas internacionales de protección de datos</li>
        </ul>
        Botopia se compromete a mantener los más altos estándares de protección de datos personales y a actualizar esta política conforme evolucionen las regulaciones aplicables.
      </div>
      <p className="mb-2 text-sm text-gray-500">Fecha de vigencia: 5 de enero de 2025</p>
      <p className="mb-2 text-sm text-gray-500">Próxima revisión programada: 5 de enero de 2026</p>
    </section>
  );
}
