import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </Link>
              <Link to="/terapia" className="text-muted-foreground hover:text-foreground transition-colors">
                Terapia
              </Link>
              <Link to="/para-psicologos" className="text-muted-foreground hover:text-foreground transition-colors">
                Para psicólogos
              </Link>
              <Link to="/sobre-mi" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre mí
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Sígueme en redes</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@psilvia.gomez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/psilvia.terapia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/+34694226318" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
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
