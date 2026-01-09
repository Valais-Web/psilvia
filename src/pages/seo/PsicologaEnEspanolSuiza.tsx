import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnEspanolSuiza = () => {
  const faqs = [
    {
      question: "¿Por qué es importante hacer terapia en español?",
      answer: "Las emociones más profundas, los recuerdos de la infancia, los matices de lo que sientes: todo fluye más naturalmente en tu lengua materna. No tener que traducir mientras exploras tu mundo interno permite una conexión más auténtica con el proceso terapéutico."
    },
    {
      question: "¿Atiendes a personas de cualquier país hispanohablante?",
      answer: "Sí, trabajo con personas de México, España, Colombia, Argentina, Chile, Perú, Venezuela y cualquier otro país de habla hispana. Cada cultura tiene sus particularidades y las tengo en cuenta en el proceso terapéutico."
    },
    {
      question: "¿Es difícil encontrar psicólogos en español en Suiza?",
      answer: "Sí, los profesionales de salud mental que hablan español son escasos en Suiza, las listas de espera son largas, y las tarifas presenciales son muy elevadas. La terapia online resuelve estos problemas."
    },
    {
      question: "¿Entiendes las dinámicas familiares latinas?",
      answer: "Sí, comprendo las particularidades de las familias latinoamericanas y españolas: las expectativas, la importancia de la comunidad y la familia extendida, y los desafíos de ser migrante en Europa."
    },
    {
      question: "¿Puedo hacer terapia si domino bien el francés o alemán?",
      answer: "Por supuesto. Aunque domines otros idiomas para el trabajo y la vida cotidiana, muchas personas prefieren hablar de sus emociones en español. El idioma del corazón suele ser el materno."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en español en Suiza | Psicoterapia online para hispanohablantes"
      description="Atención psicológica online en español para personas que viven en Suiza. Psicoterapia privada, cercana y basada en la evidencia."
      heroTitle="Psicóloga en español en Suiza"
      heroSubtitle="Terapia en tu lengua materna para conectar más profundamente con tus emociones y avanzar en tu proceso de cambio."
      badgeText="En español"
      faqs={faqs}
      disclaimer="Aviso legal: Esta consulta ofrece servicios de psicoterapia privada online. Las sesiones no están cubiertas por seguros de salud suizos ni forman parte del sistema sanitario de Suiza. La formación profesional fue obtenida en instituciones de México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La importancia del idioma en terapia
      </h2>
      
      <p>
        El idioma no es solo un vehículo de comunicación; es el recipiente de nuestra historia emocional. Las experiencias que vivimos en español quedaron codificadas en ese idioma. Cuando intentamos hablar de ellas en otro idioma, algo se pierde en la traducción.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Temas frecuentes con hispanohablantes en Suiza
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Adaptación cultural y duelo migratorio</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Distancia familiar y culpa por no estar</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Identidad bicultural y pertenencia</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Crianza de hijos bilingües</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        La comunidad latinoamericana y española en Suiza
      </h2>
      
      <p>
        Suiza alberga una comunidad hispanohablante diversa: personas de México, Colombia, España, Argentina, Chile, Perú, Ecuador, Venezuela y muchos otros países. Cada uno trae su propia cultura, pero comparten la experiencia común de ser migrantes en un país con una cultura muy diferente a la latina.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Sensibilidad cultural
      </h2>
      
      <p>
        Mi compromiso es ofrecer un espacio donde puedas sentirte comprendida sin tener que explicar el contexto cultural de cada cosa. Entiendo las dinámicas familiares latinoamericanas, las expectativas que a veces pesan sobre nosotros, y los desafíos específicos de ser migrante en Europa.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnEspanolSuiza;
