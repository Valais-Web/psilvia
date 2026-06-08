import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de privacidad · psilvia.com</title>
        <meta name="description" content="Información sobre el tratamiento de datos personales en psilvia.com, el sitio web de Silvia Gómez Psicoterapia." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://psilvia.com/privacidad" />
      </Helmet>
      <Header />
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Política de privacidad
              </h1>
              <p className="text-sm text-muted-foreground mt-0 mb-10">
                Última actualización: junio de 2026
              </p>

              <h2>1. Responsable del tratamiento</h2>
              <p>
                El responsable del tratamiento de los datos personales recogidos a través de este sitio web es <strong>Silvia Gómez</strong>, psicóloga y psicoterapeuta, bajo la marca <strong>psilvia.com</strong>.
              </p>
              <p>
                Contacto: <a href="mailto:silviagomez.psic@gmail.com">silviagomez.psic@gmail.com</a>
              </p>

              <h2>2. Datos que recopilamos</h2>
              <p>Este sitio web puede recopilar los siguientes tipos de datos:</p>
              <ul>
                <li>
                  <strong>Datos de reserva:</strong> al agendar una sesión a través del sistema de citas integrado (Calendly), proporcionas datos como tu nombre, dirección de correo electrónico y disponibilidad horaria. Estos datos son gestionados directamente por Calendly conforme a su propia política de privacidad.
                </li>
                <li>
                  <strong>Datos de uso y analítica:</strong> utilizamos Google Tag Manager y Google Analytics para recopilar información anónima sobre el comportamiento de los visitantes (páginas visitadas, tiempo de permanencia, origen del tráfico). Esta información no te identifica personalmente.
                </li>
                <li>
                  <strong>Datos de contacto directo:</strong> si nos escribes por correo electrónico, tratamos los datos que nos facilitas exclusivamente para responder a tu consulta.
                </li>
              </ul>
              <p>
                Este sitio web <strong>no almacena ni trata datos de salud o información clínica</strong> de ningún tipo. La psicoterapia se realiza de forma externa a este sitio, con las medidas de confidencialidad y seguridad propias de la práctica clínica.
              </p>

              <h2>3. Finalidad del tratamiento</h2>
              <ul>
                <li>Gestionar solicitudes de reserva de sesiones.</li>
                <li>Responder a consultas enviadas por correo electrónico.</li>
                <li>Mejorar el funcionamiento y los contenidos del sitio web mediante analítica anónima.</li>
              </ul>

              <h2>4. Base legal</h2>
              <p>
                El tratamiento de tus datos se basa en tu consentimiento (al rellenar el formulario de reserva o al contactar por correo electrónico) y en el interés legítimo de mejorar el sitio web mediante estadísticas de uso anonimizadas.
              </p>

              <h2>5. Transferencias internacionales</h2>
              <p>
                Algunos de los servicios que utilizamos (Calendly, Google Analytics) implican la transferencia de datos a servidores ubicados fuera del Espacio Económico Europeo, principalmente en Estados Unidos. Estos proveedores operan bajo marcos de adecuación reconocidos o cláusulas contractuales estándar de la Unión Europea.
              </p>

              <h2>6. Conservación de los datos</h2>
              <p>
                Los datos de contacto se conservan el tiempo necesario para responder a la consulta. Los datos de reserva son gestionados por Calendly conforme a sus propios plazos. Los datos analíticos se conservan de forma agregada y anonimizada.
              </p>

              <h2>7. Tus derechos</h2>
              <p>
                Si resides en la Unión Europea o en Suiza, tienes derecho a acceder a tus datos personales, rectificarlos, suprimirlos, oponerte a su tratamiento o solicitar su portabilidad. Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:silviagomez.psic@gmail.com">silviagomez.psic@gmail.com</a>.
              </p>

              <h2>8. Cookies</h2>
              <p>
                Este sitio utiliza cookies de analítica a través de Google Analytics para entender cómo se usa el sitio de forma agregada. No utilizamos cookies de publicidad ni de seguimiento entre sitios. Puedes configurar tu navegador para rechazar las cookies o eliminar las existentes en cualquier momento.
              </p>

              <h2>9. Seguridad</h2>
              <p>
                Este sitio está servido exclusivamente a través de HTTPS. Aplicamos medidas técnicas razonables para proteger los datos frente a accesos no autorizados. Sin embargo, ninguna transmisión de datos por internet es completamente segura.
              </p>

              <h2>10. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política ocasionalmente. La fecha de la última revisión figura en la parte superior de esta página. Te recomendamos consultarla periódicamente.
              </p>

              <h2>11. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con esta política de privacidad o con el tratamiento de tus datos, puedes contactar con nosotros en <a href="mailto:silviagomez.psic@gmail.com">silviagomez.psic@gmail.com</a>.
              </p>

            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
