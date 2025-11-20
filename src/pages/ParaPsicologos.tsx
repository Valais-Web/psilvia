import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, Lightbulb, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mentalWellness from "@/assets/mental-wellness.jpg";

const ParaPsicologos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Para psicoterapeutas que trabajan online
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eleva tu práctica con plantillas listas para usar en sesión, hojas de trabajo y ejercicios para las tareas de tus consultantes. Todo desde los enfoques TCC, ACT y DBT, con un lenguaje claro y orientado a la práctica clínica diaria.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estos materiales están pensados para psicólogas y psicólogos que trabajan en formato online y quieren ahorrar tiempo de preparación, mantener un enfoque estructurado y ofrecer recursos visuales y escritos de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full">
                Ver el material
              </Button>
              <a href="mailto:silviagomez.psic@gmail.com">
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Escribirme una consulta
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué encontrarás aquí */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            ¿Qué encontrarás aquí?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Plantillas para sesión</h3>
                <p className="text-muted-foreground">
                  Estructuras para primeras entrevistas, evaluación funcional, planificación de sesiones, revisión de objetivos y seguimiento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Hojas de trabajo para consultantes</h3>
                <p className="text-muted-foreground">
                  Ejercicios guiados para casa, registros, formularios y tareas diseñadas para que tus consultantes practiquen entre sesiones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Material basado en TCC, ACT y DBT</h3>
                <p className="text-muted-foreground">
                  Recursos que integran modelos cognitivo-conductuales y contextuales, con indicaciones claras sobre cuándo y cómo utilizarlos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pensado para tu realidad clínica */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Pensado para tu realidad clínica
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                El tiempo entre sesiones es limitado. La idea de estos materiales es que no tengas que empezar de cero cada vez, sino adaptar plantillas sólidas a la singularidad de cada consultante.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">
                      ✓ Formato digital listo para imprimir o compartir en pantalla
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">
                      ✓ Lenguaje en español claro y sin tecnicismos innecesarios
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">
                      ✓ Posibilidad de personalizar y complementar con tus propias notas
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={mentalWellness}
                alt="Ilustración de bienestar mental y crecimiento profesional en psicoterapia" 
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es este material */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            ¿Para quién es este material?
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Está dirigido a psicólogas y psicólogos que trabajan con población adulta o adolescente, especialmente desde enfoques TCC, ACT y DBT.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Profesionales que atienden principalmente online
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Terapeutas que quieren sistematizar mejor sus procesos
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Personas recién egresadas que buscan recursos concretos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="pt-12 pb-0 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
          <p className="text-xl text-primary-foreground leading-relaxed">
            ¿Te interesa conocer los materiales disponibles o colaborar en la co-creación de recursos?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full">
              Ver el material disponible
            </Button>
          </div>
          <p className="text-primary-foreground/90 text-sm">
            Escríbeme a{" "}
            <a href="mailto:silviagomez.psic@gmail.com" className="underline hover:text-primary-foreground">
              silviagomez.psic@gmail.com
            </a>
            {" "}para más información.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParaPsicologos;
