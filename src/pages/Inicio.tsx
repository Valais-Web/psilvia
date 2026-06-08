import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Heart, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";
import silviaPhoto2 from "@/assets/Silvia3.webp";
import therapyWorkspace from "@/assets/therapy-workspace.webp";
import { BookingDialog } from "@/components/BookingDialog";

const Inicio = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Silvia Gómez · Psicoterapia online en español"
        description="Psicoterapia online en español basada en la evidencia (TCC, ACT, DBT). Sesiones confidenciales y flexibles para hispanohablantes en Suiza y otros países."
        path="/"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "WebSite", name: "Silvia Gómez · Psicoterapia online", url: "https://psilvia.com/", inLanguage: "es" },
          { "@context": "https://schema.org", "@type": "Person", name: "Silvia Gómez", jobTitle: "Psicóloga y psicoterapeuta", url: "https://psilvia.com/", image: "https://psilvia.com/silvia-photo.webp", sameAs: ["https://www.instagram.com/psilvia.terapia/", "https://www.tiktok.com/@psilvia.gomez"] },
        ]}
      />
      <Header />
      <main>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-badge text-badge-foreground rounded-full px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base font-medium pointer-events-none">
                Psicoterapia online basada en la evidencia
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Psicoterapia online y recursos para psicólogos, desde la ciencia y con cercanía humana.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Te ayudo a entender qué está pasando, por qué te sientes así y qué puedes hacer para cambiarlo. Trabajo desde enfoques cognitivo conductuales y contextuales, con sesiones online confidenciales y flexibles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/terapia">
                  <Button size="lg" className="w-full sm:w-auto rounded-full">
                    Quiero terapia
                  </Button>
                </Link>
                <Link to="/para-psicologos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                    Soy psicoterapeuta
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Atención online para hispanohablantes que viven en cualquier parte del mundo.
              </p>
            </div>
            <div>
              <img
                src="/Silvia1.webp"
                alt="Espacio seguro y acogedor para psicoterapia online con ambiente cálido y tranquilo"
                width="600"
                height="603"
                loading="eager"
                fetchPriority="high"
                className="rounded-3xl w-full max-w-md mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8 flex flex-col h-full">
                <h2 className="text-3xl font-bold text-foreground mb-4">Quiero terapia</h2>
                <p className="text-muted-foreground mb-6">
                  Sientes ansiedad, agotamiento, dificultad para poner límites o para disfrutar de tu día a día. Buscas un espacio seguro para entender lo que te pasa y empezar a cambiarlo.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Sesiones online de 55 minutos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Enfoques TCC, ACT y terapias contextuales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Proceso estructurado, flexible y sin juicios</span>
                  </li>
                </ul>
                <Link to="/terapia" className="mt-auto" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="w-full rounded-full">Ver cómo trabajo</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8 flex flex-col h-full">
                <h2 className="text-3xl font-bold text-foreground mb-4">Soy psicoterapeuta</h2>
                <p className="text-muted-foreground mb-6">
                  Trabajas con enfoques cognitivo-conductuales y quieres materiales claros, aplicables y listos para usar en tus sesiones y tareas para casa.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Plantillas para entrevistas y sesiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Ejercicios paso a paso para consultantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Material basado en TCC, ACT y DBT</span>
                  </li>
                </ul>
                <Link to="/para-psicologos" className="mt-auto" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="w-full rounded-full">Ver material para psicólogos</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Psicoterapia clara, estructurada y adaptada a tu vida
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Un espacio donde la ciencia del comportamiento se encuentra con la calidez humana. Trabajamos juntos para que encuentres claridad, flexibilidad y dirección hacia una vida con sentido.
              </p>
            </div>
            <div>
              <img
                src={therapyWorkspace}
                alt="Espacio de trabajo cálido y acogedor para terapia online con laptop, té y plantas"
                width="800"
                height="450"
                loading="lazy"
                className="rounded-3xl w-full shadow-lg"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Psicología científica</h3>
              <p className="text-muted-foreground">
                Trabajo desde modelos con respaldo empírico, integrando TCC, ACT, DBT y análisis funcional para entender qué mantiene tu malestar.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Plan compartido</h3>
              <p className="text-muted-foreground">
                Definimos juntas objetivos concretos y un plan de intervención con tareas entre sesiones y seguimiento continuo.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Enfoque humano</h3>
              <p className="text-muted-foreground">
                Un espacio cercano, sin juicios, donde validamos tu experiencia mientras entrenamos habilidades nuevas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <p className="text-lg text-primary-foreground mb-6">
            ¿Te resuena lo que lees? Podemos empezar con una primera sesión para explorar qué necesitas.
          </p>
          <BookingDialog>
            <Button size="lg" variant="secondary" className="rounded-full">
              Agendar sesión
            </Button>
          </BookingDialog>
        </div>
      </section>

      {/* Sobre Silvia */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={silviaPhoto2}
                alt="Retrato de Silvia Gómez, psicóloga, sonriendo, en un entorno luminoso y tranquilo"
                width="600"
                height="601"
                loading="lazy"
                className="rounded-3xl w-full max-w-md mx-auto shadow-lg"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <Badge className="bg-badge text-badge-foreground rounded-full px-6 py-2 text-base font-medium pointer-events-none">
                Sobre Silvia
              </Badge>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy Silvia Gómez, licenciada en Psicología. Cuento con dos maestrías en España y formación especializada en terapias de tercera generación. Combino la ciencia del comportamiento con una forma de acompañar cálida, clara y directa.
              </p>
              <Link to="/sobre-mi" className="inline-block mt-6">
                <Button variant="outline" className="rounded-full">
                  Conocer más sobre mí
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Inicio;
