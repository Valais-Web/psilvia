import { Helmet } from "react-helmet-async";
import { BookingDialog } from "./BookingDialog";
import { Button } from "./ui/button";

interface SEOPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  disclaimer?: string;
}

export const SEOPageLayout = ({ 
  title, 
  description, 
  children,
  disclaimer = "Nota legal: Los servicios ofrecidos corresponden a psicoterapia privada en modalidad online. No constituyen una prestación reconocida por el sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La habilitación profesional corresponde a la formación obtenida en México y España."
}: SEOPageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <article className="prose prose-lg max-w-none">
            {children}
            
            {/* CTA Section */}
            <section className="mt-12 pt-8 border-t border-border text-center not-prose">
              <h2 className="text-xl font-medium text-foreground mb-4">
                ¿Te gustaría dar el primer paso?
              </h2>
              <BookingDialog>
                <Button variant="default" size="lg">
                  Solicitar sesión online
                </Button>
              </BookingDialog>
            </section>
            
            {/* Legal Disclaimer */}
            <footer className="mt-12 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {disclaimer}
              </p>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
};
