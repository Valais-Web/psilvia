import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnZurich = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Zúrich?",
      answer: "Sí, ofrezco psicoterapia online accesible desde Zúrich y todo su área metropolitana. La modalidad online elimina la necesidad de desplazamientos en una ciudad donde el tiempo es un recurso escaso."
    },
    {
      question: "¿Es difícil encontrar psicólogos en español en Zúrich?",
      answer: "Sí, la mayoría de profesionales de salud mental en Zúrich trabajan en alemán. Las opciones en español son muy limitadas, con listas de espera largas y tarifas elevadas."
    },
    {
      question: "¿Entiendes la presión del sector financiero suizo?",
      answer: "Sí, conozco las particularidades del entorno laboral zuiqués: altas expectativas de rendimiento, largas jornadas, competencia intensa, y la presión adicional de trabajar en un idioma que no es el materno."
    },
    {
      question: "¿Es común el síndrome del impostor en Zúrich?",
      answer: "Muy común, especialmente entre profesionales hispanohablantes de alto nivel. La sensación de no pertenecer, de haber llegado por suerte, de que te van a descubrir, es frecuente en entornos tan competitivos."
    },
    {
      question: "¿Por qué la terapia online es buena opción para Zúrich?",
      answer: "Ofrece flexibilidad para agendas saturadas, acceso a terapia en español, continuidad si viajas por trabajo, privacidad total, y tarifas más accesibles que la terapia presencial local."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Zúrich | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Zúrich. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Zúrich"
      heroSubtitle="Atención psicológica en español para profesionales hispanohablantes en el motor económico de Suiza. Entiendo la presión del entorno laboral zuiqués."
      badgeText="Zúrich"
      faqs={faqs}
      disclaimer="Nota legal: Este servicio es de psicoterapia privada en modalidad online. No constituye una prestación reconocida por el sistema sanitario suizo ni está cubierto por seguros médicos en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La realidad de vivir en Zúrich
      </h2>
      
      <p>
        Zúrich representa para muchos el sueño europeo: salarios elevados, seguridad, orden. Sin embargo, la experiencia de vivir aquí como expatriado hispanohablante puede ser muy diferente. El idioma, la cultura suiza-alemana reservada, y el entorno laboral altamente competitivo presentan desafíos reales.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Temas frecuentes en Zúrich
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Estrés y burnout en sector financiero</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Síndrome del impostor</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Soledad y dificultad para conectar</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Depresión estacional por el clima</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        El entorno laboral zuiqués
      </h2>
      
      <p>
        Zúrich atrae a profesionales altamente cualificados. La competencia es feroz, las expectativas de rendimiento muy altas. Para muchos hispanohablantes, esto implica un esfuerzo adicional: rendir al máximo en un idioma que no es el materno, navegando códigos culturales sutiles pero importantes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cuida tu salud mental
      </h2>
      
      <p>
        En una ciudad que valora tanto la eficiencia y el rendimiento, cuidar tu salud mental no es un lujo: es una inversión fundamental en tu bienestar y en tu capacidad de sostener todo lo demás. Estoy aquí para acompañarte en ese proceso.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnZurich;
