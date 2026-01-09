import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnBerna = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Berna?",
      answer: "Sí, ofrezco psicoterapia online accesible desde Berna y sus alrededores. La modalidad online es especialmente valiosa en una ciudad donde los recursos en español son muy limitados."
    },
    {
      question: "¿Trabajas con personal diplomático?",
      answer: "Sí, tengo experiencia con diplomáticos y funcionarios internacionales que enfrentan desafíos particulares: rotaciones frecuentes, presión de representación, y familias acompañantes."
    },
    {
      question: "¿Por qué es especialmente difícil para hispanohablantes en Berna?",
      answer: "La comunidad hispanohablante en Berna es pequeña comparada con Ginebra o Zúrich. Hay menos recursos en español, menos oportunidades de conectar, y mayor presión para integrarse al entorno local."
    },
    {
      question: "¿Atiendes a cónyuges acompañantes?",
      answer: "Sí, los cónyuges que dejaron sus carreras para acompañar a la pareja enfrentan desafíos particulares: pérdida de identidad profesional, aislamiento, y el mercado laboral limitado para no alemán-parlantes."
    },
    {
      question: "¿Berna es buena ciudad para familias?",
      answer: "Sí, su tamaño manejable, seguridad y ritmo pausado la hacen atractiva para familias. Sin embargo, la crianza sin apoyo de familia extendida y el aislamiento pueden ser desafiantes."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Berna | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Berna. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Berna"
      heroSubtitle="Atención psicológica en español para la comunidad diplomática e internacional de la capital federal suiza."
      badgeText="Berna"
      faqs={faqs}
      disclaimer="Información legal: Los servicios corresponden a psicoterapia privada en modalidad online. No forman parte del sistema de salud suizo ni están cubiertos por seguros médicos en Suiza. La formación profesional fue completada en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La capital federal
      </h2>
      
      <p>
        Berna tiene un carácter distintivo: es el centro político del país, sede del gobierno federal y de numerosas embajadas, pero mantiene un ambiente casi de pueblo grande. Para hispanohablantes, esto significa oportunidades en el entorno diplomático, pero también una comunidad más pequeña y menos recursos en español.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Desafíos particulares en Berna
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Menos recursos en español disponibles</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Comunidad hispanohablante pequeña</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Estrés del entorno diplomático</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Rotaciones frecuentes que dificultan vínculos</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Entorno diplomático y administrativo
      </h2>
      
      <p>
        Muchos hispanohablantes en Berna trabajan en embajadas o la administración federal. Este entorno tiene características particulares: rotaciones cada pocos años, presión de representación, dinámicas jerárquicas, y familias acompañantes con sus propios desafíos de adaptación.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        La terapia online como puente
      </h2>
      
      <p>
        En una ciudad donde los recursos en español son escasos, la terapia online se convierte en un puente invaluable. Te permite acceder a atención psicológica en tu idioma materno, con una profesional que comprende tu contexto cultural, sin las limitaciones de la oferta local.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnBerna;
