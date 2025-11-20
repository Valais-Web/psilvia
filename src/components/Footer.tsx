import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contacto</h3>
            <p className="text-muted-foreground mb-2">
              <a href="mailto:silviagomez.psic@gmail.com" className="hover:text-primary transition-colors">
                silviagomez.psic@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Atiendo online a personas hispanohablantes. Licenciada en Psicología en México, con formación de posgrado en España.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Navegación</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/terapia" className="text-muted-foreground hover:text-primary transition-colors">
                Terapia
              </Link>
              <Link to="/para-psicologos" className="text-muted-foreground hover:text-primary transition-colors">
                Para psicólogos
              </Link>
              <Link to="/sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre mí
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} psilvia.com - Silvia Gomez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
