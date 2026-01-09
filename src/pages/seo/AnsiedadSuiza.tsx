import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const AnsiedadSuiza = () => {
  const faqs = [
    {
      question: "¿Cómo sé si tengo ansiedad o es solo estrés normal?",
      answer: "El estrés es una respuesta puntual a situaciones demandantes. La ansiedad se vuelve un problema cuando persiste en el tiempo, es desproporcionada a la situación, e interfiere con tu vida cotidiana. Si la preocupación constante te impide disfrutar o funcionar normalmente, puede ser momento de buscar ayuda."
    },
    {
      question: "¿Cuánto tiempo dura el tratamiento para la ansiedad?",
      answer: "El tratamiento cognitivo-conductual para la ansiedad suele mostrar mejoras significativas en 8-16 sesiones, aunque esto varía según cada persona. Trabajamos con objetivos claros y medibles para que puedas notar tu progreso."
    },
    {
      question: "¿La terapia online funciona para tratar la ansiedad?",
      answer: "Sí, la terapia cognitivo-conductual online ha demostrado la misma eficacia que la presencial para el tratamiento de trastornos de ansiedad. La comodidad de conectarte desde casa puede incluso reducir la ansiedad inicial de acudir a consulta."
    },
    {
      question: "¿Qué técnicas utilizas para tratar la ansiedad?",
      answer: "Utilizo técnicas de la Terapia Cognitivo-Conductual: reestructuración cognitiva para cambiar pensamientos ansiosos, exposición gradual para reducir evitaciones, técnicas de relajación y mindfulness, y prevención de recaídas."
    },
    {
      question: "¿Necesito medicación además de terapia?",
      answer: "No necesariamente. Muchas personas mejoran solo con psicoterapia. Si durante la evaluación considero que podrías beneficiarte de una consulta psiquiátrica, te lo indicaré para que lo valores con un profesional médico."
    }
  ];

  return (
    <SEOPageLayout
      title="Ansiedad en Suiza | Psicoterapia online para ansiedad"
      description="Psicoterapia online para personas que viven con ansiedad en Suiza. Enfoque basado en la evidencia y atención en español."
      heroTitle="Supera la ansiedad en Suiza"
      heroSubtitle="Tratamiento psicológico online basado en la evidencia para manejar la ansiedad, las preocupaciones constantes y el estrés de vivir en Suiza."
      badgeText="Ansiedad y estrés"
      faqs={faqs}
      disclaimer="Nota legal: Este servicio corresponde a psicoterapia privada online. No forma parte del sistema sanitario suizo ni está cubierto por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La ansiedad en el contexto suizo
      </h2>
      
      <p>
        El ritmo de vida exigente, la presión por rendir en el trabajo, la adaptación a una cultura diferente y la distancia de los seres queridos pueden convertirse en fuentes constantes de tensión. Suiza, a pesar de su alta calidad de vida, presenta desafíos particulares que pueden intensificar la ansiedad.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        ¿Reconoces estos síntomas?
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Preocupación constante y pensamientos catastróficos</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Tensión muscular y problemas de sueño</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Dificultad para relajarte y desconectar</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Evitación de situaciones que te generan malestar</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Tratamiento basado en la evidencia
      </h2>
      
      <p>
        Trabajo principalmente desde la Terapia Cognitivo-Conductual (TCC), el enfoque con mayor respaldo científico para el tratamiento de la ansiedad. El tratamiento incluye:
      </p>
      
      <ul>
        <li><strong>Psicoeducación:</strong> Entender cómo funciona la ansiedad y por qué se mantiene</li>
        <li><strong>Reestructuración cognitiva:</strong> Identificar y modificar pensamientos ansiosos</li>
        <li><strong>Exposición gradual:</strong> Enfrentar progresivamente las situaciones temidas</li>
        <li><strong>Técnicas de regulación:</strong> Relajación, respiración y mindfulness</li>
        <li><strong>Prevención de recaídas:</strong> Consolidar lo aprendido para el largo plazo</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Da el primer paso
      </h2>
      
      <p>
        Si la ansiedad está afectando tu calidad de vida, buscar ayuda profesional es un paso valiente. La ansiedad es tratable, y con el apoyo adecuado puedes recuperar la sensación de control sobre tu vida.
      </p>
    </SEOPageLayout>
  );
};

export default AnsiedadSuiza;
