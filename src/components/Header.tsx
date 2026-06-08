import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.webp";
import { BookingDialog } from "@/components/BookingDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="psilvia - Silvia Gomez Sicoterapia" width="120" height="40" className="h-10 sm:h-14 w-auto" />
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
            <BookingDialog>
              <Button className="rounded-full">Agendar sesión</Button>
            </BookingDialog>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <BookingDialog>
              <Button size="sm" className="rounded-full">Agendar</Button>
            </BookingDialog>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link 
                    to="/terapia" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Terapia
                  </Link>
                  <Link 
                    to="/para-psicologos" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Para psicólogos
                  </Link>
                  <Link 
                    to="/sobre-mi" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre mí
                  </Link>
                  <div className="mt-4">
                    <BookingDialog>
                      <Button className="w-full rounded-full">Agendar sesión</Button>
                    </BookingDialog>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
