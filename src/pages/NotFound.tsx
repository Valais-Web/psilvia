import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Página no encontrada · psilvia.com"
        description="La página que buscas no existe o ha sido movida."
        path={location.pathname}
      />
      <Header />
      <main>
        <section className="py-24 md:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center space-y-6">
            <p className="text-8xl font-bold text-primary/20 leading-none">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Esta página no existe
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Es posible que la dirección haya cambiado o que el enlace que seguiste ya no esté activo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/">
                <Button size="lg" className="rounded-full w-full sm:w-auto">
                  Volver al inicio
                </Button>
              </Link>
              <Link to="/terapia">
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
                  Ver terapia online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
