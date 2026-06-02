import { Helmet } from "react-helmet-async";
import { BookingDialog } from "./BookingDialog";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import Header from "./Header";
import Footer from "./Footer";
import { Video, Globe, Brain, Clock, CheckCircle2, MessageCircle, Shield } from "lucide-react";
import silviaPhoto from "@/assets/Silvia1.webp";

interface FAQ {
  question: string;
  answer: string;
}

interface SEOPageLayoutProps {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  badgeText?: string;
  canonicalPath: string;
  children: React.ReactNode;
  faqs: FAQ[];
  disclaimer?: string;
}

const SITE_URL = "https://psilvia.com";

export const SEOPageLayout = ({ 
  title, 
  description, 
  heroTitle,
  heroSubtitle,
  badgeText = "Psicoterapia online",
  canonicalPath,
  children,
  faqs,
  disclaimer = "Nota legal: Los servicios ofrecidos corresponden a psicoterapia privada en modalidad online. No constituyen una prestación reconocida por el sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La habilitación profesional corresponde a la formación obtenida en México y España."
}: SEOPageLayoutProps) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Silvia Gómez - Psicoterapia Online",
    "description": description,
    "url": canonicalUrl,
    "provider": {
      "@type": "Person",
      "name": "Silvia Gómez",
      "jobTitle": "Psicoterapeuta",
      "url": SITE_URL
    },
    "serviceType": "Psicoterapia online",
    "areaServed": {
      "@type": "Country",
      "name": "Suiza"
    },
    "availableLanguage": "Español"
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <Badge variant="secondary" className="text-sm px-4 py-1.5">
                  {badgeText}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {heroTitle}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <BookingDialog>
                    <Button size="lg" className="rounded-full">
                      Agendar sesión
                    </Button>
                  </BookingDialog>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={silviaPhoto}
                  alt="Silvia Gómez, psicoterapeuta"
                  className="w-full max-w-md mx-auto h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-primary">80 CHF</span>
                      <span className="text-muted-foreground">/ sesión de 55 min</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        10% descuento
                      </Badge>
                      <span className="text-sm text-muted-foreground">en packs de 5+ sesiones (72 CHF/sesión)</span>
                    </div>
                  </div>
                  <BookingDialog>
                    <Button size="lg" className="rounded-full whitespace-nowrap">
                      <Clock className="mr-2 h-5 w-5" />
                      Reservar ahora
                    </Button>
                  </BookingDialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">100% Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Sesiones por videollamada desde cualquier lugar de Suiza
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">En español</h3>
                  <p className="text-sm text-muted-foreground">
                    Exprésate en tu lengua materna para conectar mejor
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Basada en evidencia</h3>
                  <p className="text-sm text-muted-foreground">
                    Terapia Cognitivo-Conductual con respaldo científico
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
              {children}
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Preguntas frecuentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`} 
                  className="bg-background rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Lista para dar el primer paso?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Agenda tu primera sesión y comienza tu camino hacia el bienestar emocional.
            </p>
            <BookingDialog>
              <Button size="lg" variant="secondary" className="rounded-full">
                Agendar sesión ahora
              </Button>
            </BookingDialog>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Confidencial</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Toda Suiza</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Horario flexible</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Sin lista de espera</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Legal Disclaimer */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              {disclaimer}
            </p>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
};
