import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="psilvia - Silvia Gomez Sicoterapia" className="h-12 sm:h-14 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/terapia" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Terapia
            </Link>
            <Link to="/para-psicologos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Para psicólogos
            </Link>
            <Link to="/sobre-mi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre mí
            </Link>
            <Link to="/terapia#reserva">
              <Button className="rounded-full">Agendar sesión</Button>
            </Link>
          </nav>

          <div className="md:hidden">
            <Link to="/terapia#reserva">
              <Button size="sm" className="rounded-full">Agendar</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
