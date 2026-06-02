import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";
import silviaPhoto from "@/assets/Silvia5.webp";
import selfCare from "@/assets/self-care.jpg";

const Terapia = () => {
  const scrollToReserva = () => {
    const element = document.getElementById("reserva");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Terapia online en español · Sesiones desde 80 CHF"
        description="Psicoterapia online en español con enfoques TCC, ACT y DBT. Sesiones de 55 min, confidenciales y flexibles. Reserva tu primera cita."
        path="/terapia"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Psicoterapia online en español — Silvia Gómez",
          description: "Servicio de psicoterapia online en español con enfoques cognitivo-conductuales y contextuales (TCC, ACT, DBT).",
          serviceType: "Psicoterapia online",
          url: "https://psilvia.com/terapia",
          availableLanguage: "Español",
          provider: { "@type": "Person", name: "Silvia Gómez", url: "https://psilvia.com/" },
          offers: { "@type": "Offer", price: "80", priceCurrency: "CHF", description: "Sesión individual de 55 minutos" },
        }}
      />
      <Header />
      <main>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Psicoterapia online
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A veces no necesitas empezar de cero, solo entender mejor lo que te está pasando. Te acompaño a ponerle nombre a lo que sientes, entender por qué se mantiene y entrenar nuevas formas de actuar para vivir con más calma y sentido.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajo desde la psicología científica y el análisis funcional para ayudarte a comprender por qué te sientes, piensas o actúas de cierta manera, y qué puedes hacer para generar un cambio real y sostenible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Las sesiones se realizan de forma online, en un espacio confidencial, flexible y seguro, para que puedas cuidar tu bienestar emocional desde donde estés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={scrollToReserva} className="rounded-full">
                  Agendar sesión
                </Button>
                <a href="mailto:silviagomez.psic@gmail.com" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="rounded-full w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Escribirme una duda
                  </Button>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={silviaPhoto}
                alt="Silvia Gómez, psicoterapeuta"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es esta terapia */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            ¿Para quién es esta terapia?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajo principalmente con personas adultas y jóvenes adultas que quieren entender mejor su mundo interno y dejar de pelearse con él constantemente.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Ansiedad, preocupación constante y pensamientos repetitivos</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Estrés laboral, agotamiento y dificultad para desconectar</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Dificultades para poner límites y decir que no</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Baja autoestima y autocrítica intensa</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Cambios vitales, duelos o rupturas que cuestan integrar</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Sensación de estar viviendo en piloto automático</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué terapia en línea */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            ¿Por qué terapia en línea?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Eficacia basada en la evidencia</h3>
                <p className="text-muted-foreground">
                  La terapia online es tan eficaz como la presencial cuando se realiza con métodos basados en la evidencia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Flexibilidad real en tu rutina</h3>
                <p className="text-muted-foreground">
                  Te permite mantener la continuidad del proceso, adaptarlo a tu rutina y acceder a una atención profesional sin desplazamientos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Un enfoque activo y práctico</h3>
                <p className="text-muted-foreground">
                  Desde un enfoque cognitivo-conductual y contextual, trabajaremos en identificar los patrones que mantienen tu malestar y entrenar habilidades prácticas para afrontarlos de manera más eficaz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo será nuestro trabajo */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Cómo será nuestro trabajo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">Comprender lo que te pasa</h3>
              <p className="text-muted-foreground">
                Empezamos con una evaluación detallada de tu historia, contexto actual y lo que quieres cambiar. Hacemos un análisis funcional para entender cómo se relacionan tus emociones, pensamientos y conductas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">Diseñar un plan contigo</h3>
              <p className="text-muted-foreground">
                Definimos objetivos claros y alcanzables, priorizamos lo más urgente y acordamos un plan de intervención ajustado a tu ritmo y recursos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground">Entrenar habilidades</h3>
              <p className="text-muted-foreground">
                En sesión y entre sesiones, practicamos estrategias adaptadas a ti. Puedes recibir tareas para casa, ejercicios escritos, registros o pautas concretas para el día a día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Te ayudo a */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={selfCare}
                alt="Ilustración de autocuidado y bienestar emocional en terapia"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Te ayudo a…
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Te ayudo a desarrollar las habilidades necesarias para vivir una vida plena y construir relaciones saludables. Junt@s creamos un plan de intervención adaptado a tu individualidad y a tu contexto.
              </p>
              <Button size="lg" onClick={scrollToReserva} className="rounded-full">
                Empezar mi proceso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reserva tu sesión */}
      <section id="reserva" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Reserva tu sesión
            </h2>
            <p className="text-lg text-muted-foreground">
              Puedes agendar tu sesión directamente en el calendario según tu huso horario. Si no encuentras un horario que te funcione, escríbeme y lo revisamos.
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://calendly.com/silviagomez-psic/tcc"
              width="100%"
              height="1200"
              frameBorder="0"
              className="w-full min-h-[1200px]"
              title="Sistema de reserva de sesiones"
            />
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Las sesiones duran aproximadamente 55 minutos y suelen ser semanales o quincenales, según tus necesidades y evolución.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-16 pb-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Preguntas frecuentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cuánto dura cada sesión?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Las sesiones tienen una duración aproximada de 55 minutos y se realizan por videollamada a través de una plataforma segura.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cada cuánto se recomienda asistir?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Generalmente, la frecuencia inicial suele ser semanal. En algunos casos puede ser quincenal, y con el tiempo ajustamos el ritmo según tus necesidades, objetivos y evolución.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo sé si necesito terapia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Si sientes que tus emociones, pensamientos o conductas te generan malestar, te bloquean o interfieren con tu vida diaria, la terapia puede ayudarte a comprender lo que ocurre y a desarrollar nuevas estrategias para manejarlo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿La terapia online es igual de efectiva que la presencial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí. Numerosos estudios respaldan su eficacia, especialmente cuando se trabaja desde enfoques basados en la evidencia, como la terapia cognitivo-conductual o las terapias contextuales. Lo importante es la calidad de la relación terapéutica y el método de trabajo, más que el formato.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                ¿Cómo puedo agendar una sesión?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes hacerlo directamente desde el calendario de reserva de esta página, eligiendo el horario que mejor se adapte a ti. Si tienes dudas o no encuentras un horario disponible, puedes escribirme a silviagomez.psic@gmail.com.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-center text-muted-foreground mt-8">
            ¿Tienes alguna duda específica? Escríbeme a:{" "}
            <a href="mailto:silviagomez.psic@gmail.com" className="text-primary hover:underline">
              silviagomez.psic@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terapia;
