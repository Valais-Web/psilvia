import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnLausana = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Lausana?",
      answer: "Sí, ofrezco psicoterapia online accesible desde Lausana, Vevey, Montreux, Morges y todo el arco lemánico. La modalidad online te permite conectarte sin desplazamientos."
    },
    {
      question: "¿Trabajas con estudiantes de doctorado?",
      answer: "Sí, tengo experiencia con estudiantes de doctorado y posdoctorado que enfrentan la presión del ambiente académico suizo. Entiendo los desafíos de la vida académica internacional."
    },
    {
      question: "¿Por qué es difícil hacer amigos en Lausana?",
      answer: "La población estudiantil internacional es transitoria, las amistades se forman al inicio y si no te integras pronto puede ser difícil. Además, la rotación constante genera inestabilidad relacional."
    },
    {
      question: "¿Atiendes familias hispanohablantes?",
      answer: "Sí, trabajo con padres que enfrentan desafíos de crianza en el extranjero: cómo mantener el español, transmitir la cultura de origen, y manejar la identidad bicultural de los hijos."
    },
    {
      question: "¿Las tarifas son accesibles para estudiantes?",
      answer: "Las tarifas de terapia online son significativamente más accesibles que la terapia presencial en Suiza, lo que la hace más viable para estudiantes con presupuestos limitados."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Lausana | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Lausana. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Lausana"
      heroSubtitle="Atención psicológica en español para la comunidad académica e internacional de Lausana. Comprendo los desafíos del ambiente universitario y deportivo."
      badgeText="Lausana"
      faqs={faqs}
      disclaimer="Aviso legal: Este servicio corresponde a psicoterapia privada online. No forma parte del sistema sanitario suizo ni está cubierto por seguros de salud en Suiza. La habilitación profesional corresponde a la formación obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Entre lo académico y lo internacional
      </h2>
      
      <p>
        Lausana tiene una personalidad distintiva: sede de la EPFL, la Universidad de Lausana y la capital olímpica. Esto atrae a estudiantes, investigadores y profesionales del deporte de todo el mundo. El ambiente es intelectualmente estimulante pero también altamente competitivo.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Desafíos comunes en Lausana
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Presión académica y miedo al fracaso</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Burnout en estudiantes de doctorado</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Soledad y amistades transitorias</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Síndrome del impostor académico</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Estudiantes y jóvenes profesionales
      </h2>
      
      <p>
        El ambiente académico suizo es exigente. Las horas de trabajo son largas, la competencia por publicaciones intensa, y el equilibrio vida-trabajo difícil. Muchos estudiantes de doctorado experimentan ansiedad, burnout o episodios depresivos durante sus años de formación.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Familias en Lausana
      </h2>
      
      <p>
        Para las familias hispanohablantes, Lausana presenta desafíos específicos: los niños se adaptan rápido al francés, lo que puede generar una brecha con los padres. Las preguntas sobre cómo mantener el español y transmitir la cultura de origen son frecuentes.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnLausana;
