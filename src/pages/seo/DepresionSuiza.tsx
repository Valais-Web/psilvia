import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const DepresionSuiza = () => {
  const faqs = [
    {
      question: "¿Cómo sé si tengo depresión o solo estoy triste?",
      answer: "La tristeza es una emoción pasajera ante situaciones difíciles. La depresión es un estado persistente (al menos dos semanas) que incluye pérdida de interés, cambios en sueño y apetito, fatiga constante, y dificultad para funcionar normalmente. Si estos síntomas persisten, es importante buscar ayuda."
    },
    {
      question: "¿El duelo migratorio puede causar depresión?",
      answer: "Sí, el duelo migratorio implica pérdidas reales (familia, amigos, estatus, cultura) que pueden desencadenar episodios depresivos. Es importante reconocer y procesar estas pérdidas para poder avanzar."
    },
    {
      question: "¿Cuánto tiempo tarda en mejorar la depresión con terapia?",
      answer: "La terapia cognitivo-conductual suele mostrar mejoras en 12-20 sesiones, aunque cada caso es diferente. Trabajamos con un plan estructurado y objetivos claros para ir midiendo tu progreso."
    },
    {
      question: "¿Puedo hacer terapia online si me cuesta salir de casa?",
      answer: "Precisamente la terapia online es ideal si la depresión te dificulta salir. Puedes conectarte desde tu espacio seguro, lo que reduce una barrera importante para iniciar el tratamiento."
    },
    {
      question: "¿Necesito medicación para la depresión?",
      answer: "No siempre. Muchas depresiones leves a moderadas responden bien a la psicoterapia sola. Si durante la evaluación considero que podrías beneficiarte de medicación, te orientaré para que consultes con un psiquiatra."
    }
  ];

  return (
    <SEOPageLayout
      title="Depresión en Suiza | Atención psicológica online"
      description="Acompañamiento psicológico online para personas con depresión en Suiza. Psicoterapia privada en español."
      heroTitle="Supera la depresión en Suiza"
      heroSubtitle="Acompañamiento psicológico profesional para salir del estado depresivo, recuperar la energía y reconectar con lo que te importa."
      badgeText="Depresión y estado de ánimo"
      faqs={faqs}
      disclaimer="Aviso legal: Los servicios ofrecidos son de psicoterapia privada en modalidad online. No están cubiertos por el seguro de salud suizo ni forman parte del sistema sanitario del país. La habilitación profesional corresponde a la formación obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La depresión y la experiencia migratoria
      </h2>
      
      <p>
        La depresión es una realidad silenciosa que afecta a muchas personas en Suiza, especialmente entre quienes se encuentran lejos de su país de origen. El aislamiento, las dificultades de adaptación y la distancia de la familia pueden convertirse en un peso emocional que, con el tiempo, se transforma en algo más profundo.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Señales de alerta
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Tristeza persistente o vacío emocional</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Pérdida de interés en actividades que disfrutabas</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Fatiga constante y falta de energía</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Dificultad para concentrarte o tomar decisiones</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Tratamiento estructurado y gradual
      </h2>
      
      <p>
        Mi enfoque se basa en la Terapia Cognitivo-Conductual, con alta eficacia para la depresión:
      </p>
      
      <ul>
        <li><strong>Activación conductual:</strong> Recuperar gradualmente actividades que generan logro o placer</li>
        <li><strong>Trabajo cognitivo:</strong> Identificar y cuestionar pensamientos negativos automáticos</li>
        <li><strong>Regulación emocional:</strong> Desarrollar estrategias para manejar emociones difíciles</li>
        <li><strong>Reconexión con valores:</strong> Orientar la vida hacia lo que es importante para ti</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pedir ayuda es valiente
      </h2>
      
      <p>
        Reconocer que estás pasando por un momento difícil y buscar apoyo profesional es el primer paso hacia la recuperación. La depresión no es debilidad ni falta de voluntad: es una condición que responde bien al tratamiento adecuado.
      </p>
    </SEOPageLayout>
  );
};

export default DepresionSuiza;
