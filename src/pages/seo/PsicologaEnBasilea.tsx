import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnBasilea = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Basilea?",
      answer: "Sí, ofrezco psicoterapia online accesible desde Basilea ciudad, el lado alemán (Lörrach, Weil am Rhein) o el lado francés (Saint-Louis, Mulhouse). La modalidad online es perfecta para la región trinacional."
    },
    {
      question: "¿Trabajas con profesionales de la industria farmacéutica?",
      answer: "Sí, tengo experiencia con científicos e investigadores que enfrentan la presión del sector farmacéutico: plazos de desarrollo, publicaciones, organizaciones matriciales complejas, y síndrome del impostor."
    },
    {
      question: "¿Por qué es especial la situación de Basilea?",
      answer: "Basilea es una ciudad fronteriza donde la población está dispersa entre tres países. Esto ofrece flexibilidad pero también fragmenta la comunidad y complica la formación de vínculos."
    },
    {
      question: "¿El síndrome del impostor es común en la industria farmacéutica?",
      answer: "Muy común, especialmente entre científicos con doctorados que, a pesar de sus logros, sienten que no son suficientemente buenos o que van a ser descubiertos."
    },
    {
      question: "¿Atiendes si vivo en Francia o Alemania pero trabajo en Basilea?",
      answer: "Sí, la terapia online elimina las complicaciones de las fronteras. Puedes conectarte desde cualquier punto de la región trinacional."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Basilea | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Basilea. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Basilea"
      heroSubtitle="Atención psicológica en español para la comunidad científica y farmacéutica de la región trinacional de Basilea."
      badgeText="Basilea"
      faqs={faqs}
      disclaimer="Aviso legal: Los servicios ofrecidos son de psicoterapia privada en modalidad online. No forman parte del sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Capital farmacéutica mundial
      </h2>
      
      <p>
        Basilea es conocida mundialmente como la capital de la industria farmacéutica. Novartis, Roche y numerosas biotecnológicas tienen su sede aquí. Esto atrae a científicos, investigadores y profesionales altamente cualificados de todo el mundo, creando un entorno intensamente competitivo.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Desafíos en la región trinacional
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Burnout en el sector farmacéutico</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Síndrome del impostor científico</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Comunidad dispersa entre tres países</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Ansiedad de rendimiento constante</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Una ciudad fronteriza única
      </h2>
      
      <p>
        Basilea está ubicada donde se encuentran Suiza, Alemania y Francia. Muchas personas que trabajan aquí viven en otro país y cruzan la frontera diariamente. Esta dispersión puede dificultar la formación de comunidad y hacer que la pequeña comunidad hispanohablante esté aún más fragmentada.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Terapia sin fronteras
      </h2>
      
      <p>
        La modalidad online es especialmente práctica para la región de Basilea. Puedes conectarte desde Basilea ciudad, desde los pueblos del lado alemán, o desde el Alsacia francés. Sin cruces de frontera para llegar a la sesión, con flexibilidad para adaptarnos a tu agenda.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnBasilea;
