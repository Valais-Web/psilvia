import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import silviaPhoto from "@/assets/silvia-photo.png";

const SobreMi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Sobre mí
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <img
                src={silviaPhoto}
                alt="Retrato profesional de Silvia Gómez, psicoterapeuta"
                className="rounded-3xl w-full shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <Badge className="bg-badge text-badge-foreground rounded-full px-6 py-2 text-base font-medium pointer-events-none">
                Silvia Gómez
              </Badge>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  ¡Hola! Soy Silvia Gómez, licenciada en Psicología. Cuento con dos maestrías realizadas en España: una en Psicología de la Educación y otra en Psicoterapia Cognitivo-Conductual. Además, tengo formación complementaria en Terapia de Aceptación y Compromiso (ACT), Análisis Funcional de la conducta y Terapia Dialéctico-Conductual (DBT).
                </p>
                
                <p className="text-lg">
                  Mi enfoque combina la ciencia del comportamiento con una mirada humana y cercana. No busco aplicar recetas, sino comprender contigo qué mantiene tu malestar, qué estás haciendo para manejarlo y qué herramientas o habilidades pueden ayudarte a cambiarlo.
                </p>
                
                <p className="text-lg">
                  En sesión suelo trabajar de forma clara y colaborativa. Te explico el porqué de lo que hacemos, comparto modelos y metáforas cuando son útiles y propongo ejercicios concretos para que lo que hablamos se traduzca en cambios en tu día a día.
                </p>
                
                <p className="text-lg">
                  Mi objetivo es que encuentres claridad, flexibilidad y dirección hacia una vida que tenga sentido para ti, con ganas de vivirla cada día, incluso cuando las cosas no son perfectas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Un poco más personal */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Un poco más personal
          </h2>
          
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                🌱 Disfruto aprender de forma constante, leer sobre comportamiento humano y seguir actualizando mi formación.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                💭 Me interesa especialmente cómo construimos relaciones y cómo nos hablamos a nosotros mismos.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                🤝 Creo en la importancia de tener espacios seguros donde poder decir en voz alta aquello que normalmente escondemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl p-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Si sientes que podría acompañarte en este momento, puedes agendar una primera sesión o escribirme para resolver cualquier duda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/terapia#reserva">
                <Button size="lg" className="w-full sm:w-auto rounded-full">
                  Agenda tu primera sesión
                </Button>
              </a>
              <a href="mailto:silviagomez.psic@gmail.com">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Escribirme un correo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreMi;
