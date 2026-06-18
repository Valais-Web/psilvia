import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Inicio from "./pages/Inicio";
import Terapia from "./pages/Terapia";
import ParaPsicologos from "./pages/ParaPsicologos";
import SobreMi from "./pages/SobreMi";
import NotFound from "./pages/NotFound";
import Privacidad from "./pages/Privacidad";

// SEO Pages
import PsicoterapiaOnlineSuiza from "./pages/seo/PsicoterapiaOnlineSuiza";
import PsicologaEnEspanolSuiza from "./pages/seo/PsicologaEnEspanolSuiza";
import PsicologaPsicoterapeutaSuiza from "./pages/seo/PsicologaPsicoterapeutaSuiza";
import AnsiedadSuiza from "./pages/seo/AnsiedadSuiza";
import DepresionSuiza from "./pages/seo/DepresionSuiza";
import BurnoutSuiza from "./pages/seo/BurnoutSuiza";
import AdaptacionCulturalSuiza from "./pages/seo/AdaptacionCulturalSuiza";
import PsicologaEnGinebra from "./pages/seo/PsicologaEnGinebra";
import PsicologaEnLausana from "./pages/seo/PsicologaEnLausana";
import PsicologaEnZurich from "./pages/seo/PsicologaEnZurich";
import PsicologaEnBerna from "./pages/seo/PsicologaEnBerna";
import PsicologaEnBasilea from "./pages/seo/PsicologaEnBasilea";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/terapia" element={<Terapia />} />
            <Route path="/para-psicologos" element={<ParaPsicologos />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            
            {/* SEO Landing Pages - Not linked from main navigation */}
            <Route path="/psicoterapia-online-suiza" element={<PsicoterapiaOnlineSuiza />} />
            <Route path="/psicologa-en-espanol-suiza" element={<PsicologaEnEspanolSuiza />} />
            <Route path="/psicologa-psicoterapeuta-suiza" element={<PsicologaPsicoterapeutaSuiza />} />
            <Route path="/ansiedad-suiza" element={<AnsiedadSuiza />} />
            <Route path="/depresion-suiza" element={<DepresionSuiza />} />
            <Route path="/burnout-suiza" element={<BurnoutSuiza />} />
            <Route path="/adaptacion-cultural-suiza" element={<AdaptacionCulturalSuiza />} />
            <Route path="/psicologa-en-ginebra" element={<PsicologaEnGinebra />} />
            <Route path="/psicologa-en-lausana" element={<PsicologaEnLausana />} />
            <Route path="/psicologa-en-zurich" element={<PsicologaEnZurich />} />
            <Route path="/psicologa-en-berna" element={<PsicologaEnBerna />} />
            <Route path="/psicologa-en-basilea" element={<PsicologaEnBasilea />} />
            
            <Route path="/privacidad" element={<Privacidad />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
