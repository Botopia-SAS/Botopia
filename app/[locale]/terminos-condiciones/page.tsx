"use client";

import { useEffect } from "react";
import Footer from "@/components/footer";

export default function TerminosCondiciones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 mt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Términos y Condiciones
            </h1>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-8">
              <section>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-6">
                  Última actualización: 10 de enero de 2025
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-8">
                  <p className="text-gray-700 dark:text-gray-200">
                    Bienvenido a <strong>Botopia Technology S.A.S.</strong> Al acceder y utilizar nuestros servicios, 
                    usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. 
                    Le recomendamos leer cuidadosamente este documento antes de utilizar nuestros servicios.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Información de la Empresa
                </h2>
                <div className="pl-4 space-y-2">
                  <p><strong>Razón Social:</strong> Botopia Technology S.A.S.</p>
                  <p><strong>NIT:</strong> 901890398-1</p>
                  <p><strong>Domicilio:</strong> Bogotá, Colombia</p>
                  <p><strong>Email de Contacto:</strong> contacto@botopia.tech</p>
                  <p><strong>Sitio Web:</strong> https://botopia.tech</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Aceptación de Términos
                </h2>
                <p>
                  Al contratar cualquiera de nuestros servicios, incluyendo pero no limitándose a desarrollo web, 
                  aplicaciones móviles, integración de inteligencia artificial, automatización de procesos, 
                  chatbots para WhatsApp y diseño UX/UI, usted acepta estos términos en su totalidad.
                </p>
                <p className="mt-3">
                  Si representa a una empresa o entidad legal, declara tener la autoridad necesaria para 
                  aceptar estos términos en nombre de dicha organización.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Descripción de Servicios
                </h2>
                <p className="mb-4">Botopia Technology S.A.S. ofrece los siguientes servicios profesionales:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Desarrollo Web:</strong> Creación de sitios web corporativos, e-commerce, landing pages y Progressive Web Apps (PWA)</li>
                  <li><strong>Aplicaciones Móviles:</strong> Desarrollo de apps nativas para iOS y Android, aplicaciones web progresivas</li>
                  <li><strong>Inteligencia Artificial:</strong> Implementación de chatbots, análisis predictivo, machine learning y computer vision</li>
                  <li><strong>Automatización:</strong> Flujos de trabajo automatizados, integración de sistemas ERP/CRM</li>
                  <li><strong>Chatbots WhatsApp:</strong> Desarrollo e implementación de bots inteligentes para WhatsApp Business</li>
                  <li><strong>Diseño UX/UI:</strong> Investigación de usuarios, diseño de interfaces y prototipado</li>
                  <li><strong>Consultoría Tecnológica:</strong> Asesoramiento en transformación digital y estrategia tecnológica</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Proceso de Contratación
                </h2>
                <div className="space-y-3">
                  <p><strong>4.1 Propuesta y Cotización:</strong> Toda prestación de servicios iniciará con una propuesta técnica y económica detallada que deberá ser aprobada por el cliente.</p>
                  <p><strong>4.2 Contrato de Servicios:</strong> Una vez aprobada la propuesta, se formalizará mediante contrato o orden de servicio.</p>
                  <p><strong>4.3 Requisitos del Proyecto:</strong> El cliente deberá proporcionar toda la información, accesos y recursos necesarios para la ejecución del proyecto.</p>
                  <p><strong>4.4 Plazos de Entrega:</strong> Los tiempos de desarrollo serán especificados en cada propuesta y están sujetos al cumplimiento de los requisitos por parte del cliente.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Condiciones de Pago
                </h2>
                <div className="space-y-3">
                  <p><strong>5.1 Estructura de Pagos:</strong></p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>50% de anticipo al aprobar la propuesta</li>
                    <li>25% al aprobar el diseño o prototipo (cuando aplique)</li>
                    <li>25% a la entrega final del proyecto</li>
                  </ul>
                  <p className="mt-3"><strong>5.2 Métodos de Pago:</strong> Transferencia bancaria, PayPal, o medios electrónicos acordados.</p>
                  <p><strong>5.3 Facturación:</strong> Se emitirá factura electrónica según la normatividad colombiana vigente.</p>
                  <p><strong>5.4 Mora en Pagos:</strong> El retraso en los pagos generará intereses moratorios a la tasa máxima legal permitida y podrá resultar en la suspensión de los servicios.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Propiedad Intelectual
                </h2>
                <div className="space-y-3">
                  <p><strong>6.1 Derechos del Cliente:</strong> Una vez completado el pago total, el cliente adquiere los derechos de propiedad sobre los entregables finales especificados en el contrato.</p>
                  <p><strong>6.2 Licencias de Terceros:</strong> El uso de bibliotecas, frameworks o componentes de terceros estará sujeto a sus respectivas licencias.</p>
                  <p><strong>6.3 Portfolio:</strong> Botopia se reserva el derecho de mostrar el trabajo realizado en su portfolio y materiales promocionales, salvo acuerdo de confidencialidad.</p>
                  <p><strong>6.4 Código Fuente:</strong> La entrega del código fuente estará sujeta a lo acordado en el contrato específico del proyecto.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Garantías y Soporte
                </h2>
                <div className="space-y-3">
                  <p><strong>7.1 Garantía de Funcionamiento:</strong> Ofrecemos 90 días de garantía sobre errores de programación a partir de la entrega final.</p>
                  <p><strong>7.2 Soporte Técnico:</strong> El soporte post-entrega se cotizará por separado según las necesidades del cliente.</p>
                  <p><strong>7.3 Mantenimiento:</strong> Los servicios de mantenimiento preventivo y evolutivo se ofrecen mediante contratos adicionales.</p>
                  <p><strong>7.4 Actualizaciones:</strong> Las actualizaciones de seguridad críticas durante el período de garantía están incluidas.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. Responsabilidades del Cliente
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Proporcionar información veraz, completa y oportuna</li>
                  <li>Entregar contenidos (textos, imágenes, logos) libres de derechos de autor o con las licencias correspondientes</li>
                  <li>Realizar las aprobaciones y validaciones en los tiempos establecidos</li>
                  <li>Designar un responsable del proyecto con poder de decisión</li>
                  <li>Cumplir con los pagos según lo acordado</li>
                  <li>No utilizar los servicios para actividades ilegales o no éticas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. Limitación de Responsabilidad
                </h2>
                <div className="space-y-3">
                  <p><strong>9.1</strong> Botopia Technology S.A.S. no será responsable por daños indirectos, incidentales, especiales o consecuentes.</p>
                  <p><strong>9.2</strong> Nuestra responsabilidad total no excederá el monto pagado por el cliente por el servicio específico.</p>
                  <p><strong>9.3</strong> No garantizamos resultados específicos de negocio derivados del uso de nuestros servicios.</p>
                  <p><strong>9.4</strong> No somos responsables por pérdidas causadas por factores fuera de nuestro control razonable.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  10. Confidencialidad
                </h2>
                <div className="space-y-3">
                  <p><strong>10.1</strong> Ambas partes acuerdan mantener confidencial toda información sensible intercambiada durante la prestación del servicio.</p>
                  <p><strong>10.2</strong> La obligación de confidencialidad permanecerá vigente por 2 años después de finalizada la relación comercial.</p>
                  <p><strong>10.3</strong> Se podrán firmar acuerdos de confidencialidad (NDA) adicionales según la naturaleza del proyecto.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  11. Protección de Datos Personales
                </h2>
                <p>
                  El tratamiento de datos personales se realiza conforme a la Ley 1581 de 2012 de Colombia y 
                  normativas internacionales aplicables. Para más información, consulte nuestra{" "}
                  <a href="/es/politica-datos" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline">
                    Política de Privacidad y Protección de Datos
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  12. Cancelación y Terminación
                </h2>
                <div className="space-y-3">
                  <p><strong>12.1 Por el Cliente:</strong> El cliente podrá cancelar el proyecto notificando por escrito con 15 días de anticipación. Los pagos realizados por trabajo completado no son reembolsables.</p>
                  <p><strong>12.2 Por Botopia:</strong> Nos reservamos el derecho de terminar el servicio por incumplimiento del cliente, especialmente en casos de mora en pagos o uso indebido.</p>
                  <p><strong>12.3 Entrega de Trabajo Completado:</strong> En caso de terminación, se entregará el trabajo completado hasta la fecha, proporcional al pago recibido.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  13. Modificaciones del Proyecto
                </h2>
                <div className="space-y-3">
                  <p><strong>13.1</strong> Los cambios al alcance original del proyecto deberán ser solicitados por escrito.</p>
                  <p><strong>13.2</strong> Las modificaciones pueden implicar ajustes en el cronograma y costos adicionales.</p>
                  <p><strong>13.3</strong> Se permite hasta 2 rondas de revisiones menores sin costo adicional.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  14. Fuerza Mayor
                </h2>
                <p>
                  Ninguna de las partes será responsable por retrasos o incumplimientos causados por circunstancias 
                  fuera de su control razonable, incluyendo pero no limitándose a: desastres naturales, pandemias, 
                  guerras, huelgas, fallas generalizadas de internet o servicios de terceros críticos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  15. Resolución de Conflictos
                </h2>
                <div className="space-y-3">
                  <p><strong>15.1 Negociación Directa:</strong> Las partes intentarán resolver cualquier disputa mediante negociación directa durante 30 días.</p>
                  <p><strong>15.2 Mediación:</strong> Si la negociación falla, se recurrirá a mediación ante el Centro de Arbitraje y Conciliación de la Cámara de Comercio de Bogotá.</p>
                  <p><strong>15.3 Jurisdicción:</strong> Estos términos se rigen por las leyes de la República de Colombia.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  16. Servicios de Terceros
                </h2>
                <p>
                  Nuestros servicios pueden integrar o depender de servicios de terceros (APIs, hosting, 
                  servicios cloud). No somos responsables por cambios, interrupciones o discontinuación 
                  de dichos servicios externos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  17. Uso Aceptable
                </h2>
                <p className="mb-4">El cliente se compromete a NO utilizar nuestros servicios para:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Actividades ilegales o fraudulentas</li>
                  <li>Distribución de malware o código malicioso</li>
                  <li>Violación de derechos de propiedad intelectual</li>
                  <li>Spam o actividades de marketing no solicitado</li>
                  <li>Ataques a sistemas informáticos</li>
                  <li>Contenido que promueva odio, violencia o discriminación</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  18. Indemnización
                </h2>
                <p>
                  El cliente acepta indemnizar y mantener indemne a Botopia Technology S.A.S., sus directivos, 
                  empleados y colaboradores, de cualquier reclamo, daño, pérdida o gasto (incluyendo honorarios 
                  legales) derivados del uso indebido de nuestros servicios o violación de estos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  19. Divisibilidad
                </h2>
                <p>
                  Si alguna disposición de estos términos es declarada inválida o inaplicable, las demás 
                  disposiciones continuarán en pleno vigor y efecto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  20. Acuerdo Completo
                </h2>
                <p>
                  Estos términos, junto con la propuesta comercial y/o contrato específico del proyecto, 
                  constituyen el acuerdo completo entre las partes y reemplazan cualquier acuerdo o 
                  entendimiento previo, verbal o escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  21. Notificaciones
                </h2>
                <p>
                  Todas las notificaciones formales deberán realizarse por escrito al correo electrónico 
                  contacto@botopia.tech o a la dirección física registrada de la empresa. Las notificaciones 
                  se considerarán recibidas 24 horas después de su envío por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  22. Actualizaciones de los Términos
                </h2>
                <p>
                  Botopia Technology S.A.S. se reserva el derecho de actualizar estos términos en cualquier 
                  momento. Los cambios serán notificados a través de nuestro sitio web y/o por correo 
                  electrónico. El uso continuado de nuestros servicios después de dichos cambios constituye 
                  su aceptación de los nuevos términos.
                </p>
              </section>

              <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Información de Contacto
                </h2>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <p className="mb-3">Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de:</p>
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> contacto@botopia.tech</li>
                    <li><strong>WhatsApp:</strong> Disponible en nuestro sitio web</li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/botopiasas/" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline">Botopia SAS</a></li>
                    <li><strong>Dirección:</strong> Bogotá, Colombia</li>
                    <li><strong>Horario de Atención:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM (GMT-5)</li>
                  </ul>
                </div>
              </section>

              <section className="mt-8">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Al utilizar los servicios de Botopia Technology S.A.S., usted confirma que ha leído, 
                    entendido y aceptado estos Términos y Condiciones en su totalidad.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Documento válido a partir del 10 de enero de 2025
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    © 2025 Botopia Technology S.A.S. - Todos los derechos reservados
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}