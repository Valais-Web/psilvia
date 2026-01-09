import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnGinebra = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios si vivo en Ginebra?",
      answer: "Sí, ofrezco psicoterapia online accesible desde cualquier punto de Ginebra y alrededores. La modalidad online te permite conectarte desde tu hogar u oficina sin desplazamientos."
    },
    {
      question: "¿Entiendes la realidad de trabajar en organismos internacionales?",
      answer: "Sí, conozco las particularidades del entorno internacional en Ginebra: la presión del rendimiento, las rotaciones frecuentes, la transitoriedad de las amistades, y los desafíos de las familias expatriadas."
    },
    {
      question: "¿Hay mucha comunidad hispanohablante en Ginebra?",
      answer: "Sí, Ginebra alberga una comunidad hispanohablante significativa en organizaciones internacionales, bancos y multinacionales. Sin embargo, encontrar atención psicológica en español localmente puede ser difícil y costoso."
    },
    {
      question: "¿Qué horarios manejas para Ginebra?",
      answer: "Trabajo en horario europeo con flexibilidad para adaptarme a agendas exigentes. Puedo ofrecer sesiones en pausas del almuerzo, primeras horas de la mañana o al final de la jornada laboral."
    },
    {
      question: "¿Qué pasa si viajo frecuentemente por trabajo?",
      answer: "La terapia online permite mantener la continuidad del proceso sin importar dónde te encuentres. Muchos de mis pacientes viajan regularmente y mantenemos las sesiones sin interrupciones."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Ginebra | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Ginebra. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Ginebra"
      heroSubtitle="Atención psicológica en español para la comunidad internacional de Ginebra. Comprendo los desafíos de vivir en la capital diplomática del mundo."
      badgeText="Ginebra"
      faqs={faqs}
      disclaimer="Nota legal: Los servicios ofrecidos son de psicoterapia privada en modalidad online. No constituyen una prestación del sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        El contexto particular de Ginebra
      </h2>
      
      <p>
        Ginebra es una ciudad única: sede de organizaciones internacionales, hogar de diplomáticos y profesionales de todo el mundo. Esta riqueza cosmopolita también conlleva desafíos particulares: la transitoriedad de las amistades, la presión del entorno laboral internacional, y el alto costo de vida.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Temas frecuentes en Ginebra
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Estrés y burnout en organismos internacionales</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Soledad y amistades transitorias</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Ansiedad por contratos y permisos</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Conflictos en parejas interculturales</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Ventajas de la terapia online en Ginebra
      </h2>
      
      <ul>
        <li><strong>Flexibilidad horaria:</strong> Sesiones adaptadas a agendas exigentes</li>
        <li><strong>Sin desplazamientos:</strong> Evitas perder tiempo en el tráfico o transporte</li>
        <li><strong>Continuidad en viajes:</strong> Mantienes tu proceso aunque viajes por trabajo</li>
        <li><strong>Atención en español:</strong> Sin depender de la limitada oferta local</li>
        <li><strong>Tarifas accesibles:</strong> Más económico que la terapia presencial en Ginebra</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Comprendo tu contexto
      </h2>
      
      <p>
        No tendrás que explicarme qué significa vivir en un entorno internacional, enfrentar la burocracia suiza, o navegar las diferencias culturales. Este conocimiento contextual me permite ofrecerte un acompañamiento más preciso y relevante.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnGinebra;
