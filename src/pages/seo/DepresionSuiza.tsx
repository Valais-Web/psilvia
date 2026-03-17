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
      answer: "Sí, el duelo migratorio implica pérdidas reales (familia, amigos, estatus, cultura) que pueden desencadenar episodios depresivos. Es importante reconocer y procesar estas pérdidas para poder avanzar. A diferencia de otros duelos, las pérdidas de la migración son invisibles para quienes te rodean: no hubo un funeral, no hay una fecha en el calendario, nadie te envía flores o te da el pésame. Pero las pérdidas son muy reales: dejaste atrás a tu familia, tus amigos de toda la vida, tu estatus y lugar en la comunidad, tu lengua, tus referencias culturales, los olores y sabores de tu tierra."
    },
    {
      question: "¿Cuánto tiempo tarda en mejorar la depresión con terapia?",
      answer: "La terapia cognitivo-conductual suele mostrar mejoras en 12-20 sesiones, aunque cada caso es diferente. Trabajamos con un plan estructurado y objetivos claros para ir midiendo tu progreso."
    },
    {
      question: "¿Puedo hacer terapia online si me cuesta salir de casa?",
      answer: "Precisamente la terapia online es ideal si la depresión te dificulta salir. Puedes conectarte desde tu espacio seguro, lo que reduce una barrera importante para iniciar el tratamiento. No tienes que vestirte, maquillarte, o tomar el tren para llegar a una consulta. Puedes conectarte desde tu cama si es necesario. Lo importante es que te presentes, como sea que puedas."
    },
    {
      question: "¿Necesito medicación para la depresión?",
      answer: "No siempre. Muchas depresiones leves a moderadas responden bien a la psicoterapia sola. Si durante la evaluación considero que podrías beneficiarte de medicación, te orientaré para que consultes con un psiquiatra."
    },
    {
      question: "¿Qué es el duelo migratorio y cómo afecta emocionalmente?",
      answer: "El duelo migratorio es además un duelo 'parcial' y 'recurrente': las personas y lugares que dejaste siguen existiendo, lo que genera una ambivalencia constante. Cada vez que alguien se enferma, celebra un cumpleaños, o atraviesa una crisis en tu país, el duelo se reactiva. Esta montaña rusa emocional puede ser agotadora y, con el tiempo, contribuir al desarrollo de un episodio depresivo."
    },
    {
      question: "¿Cómo es el tratamiento estructurado para la depresión?",
      answer: "Mi enfoque para tratar la depresión se basa en la Terapia Cognitivo-Conductual (TCC), que cuenta con amplia evidencia científica de su eficacia para esta condición. La TCC para la depresión se centra en dos áreas principales: los patrones de pensamiento negativos que mantienen el estado depresivo, y los patrones de comportamiento que perpetúan el ciclo de la depresión. El tratamiento es gradual y respetuoso de tu ritmo."
    },
    {
      question: "¿Qué técnicas se utilizan en el tratamiento de la depresión?",
      answer: "Utilizamos varias técnicas complementarias: Activación conductual para recuperar gradualmente actividades que generan sensación de logro o placer; Trabajo cognitivo para identificar y cuestionar los pensamientos negativos automáticos; Regulación emocional para desarrollar estrategias para tolerar y manejar las emociones difíciles; Reconexión con valores para clarificar qué es realmente importante para ti; y Prevención de recaídas para identificar señales de alerta temprana."
    },
    {
      question: "¿Por qué la presión por 'demostrar que valió la pena' empeora la depresión?",
      answer: "Existe una presión implícita por demostrar que la decisión de emigrar 'valió la pena'. Admitir que estás deprimido puede sentirse como un fracaso, como si estuvieras siendo desagradecido con las oportunidades que tienes. Esta presión hace que muchas personas vivan la depresión en silencio, sin buscar ayuda, lo que solo empeora la situación."
    }
  ];

  return (
    <SEOPageLayout
      title="Depresión en Suiza | Atención psicológica online"
      description="Acompañamiento psicológico online para personas con depresión en Suiza. Psicoterapia privada en español."
      heroTitle="Supera la depresión en Suiza"
      heroSubtitle="Acompañamiento psicológico profesional para salir del estado depresivo, recuperar la energía y reconectar con lo que te importa."
      badgeText="Depresión y estado de ánimo"
      canonicalPath="/depresion-suiza"
      faqs={faqs}
      disclaimer="Aviso legal: Los servicios ofrecidos son de psicoterapia privada en modalidad online. No están cubiertos por el seguro de salud suizo ni forman parte del sistema sanitario del país. La habilitación profesional corresponde a la formación obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La depresión y la experiencia migratoria
      </h2>
      
      <p>
        La depresión es una realidad silenciosa que afecta a muchas personas en Suiza, especialmente entre quienes se encuentran lejos de su país de origen. Mientras que desde fuera la vida en Suiza puede parecer perfecta –seguridad, belleza natural, buenos salarios–, la experiencia interna puede ser muy diferente. El aislamiento emocional, las dificultades de adaptación a una cultura distante, y la distancia física de la familia y amigos pueden convertirse en un peso que, con el tiempo, se transforma en algo más profundo que la simple nostalgia.
      </p>

      <p className="mt-4">
        Para los hispanohablantes que viven en Suiza, la depresión tiene características particulares. La barrera del idioma puede hacer que sea difícil expresar lo que realmente sientes, incluso cuando dominas el alemán, francés o inglés para el trabajo. Las emociones más profundas, los matices del malestar, la forma en que experimentas el mundo: todo esto fluye mejor en tu lengua materna. Y cuando no puedes expresarte plenamente, el aislamiento emocional se profundiza.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Señales de alerta de la depresión
      </h2>

      <p>
        La depresión no siempre se manifiesta como tristeza evidente. De hecho, muchas personas con depresión no se identifican como "tristes", sino que experimentan vacío emocional, incapacidad de sentir alegría o interés, o irritabilidad persistente. Reconocer las señales de alerta es el primer paso para buscar ayuda.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Tristeza persistente o sensación de vacío emocional que no se va</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Pérdida de interés en actividades que antes disfrutabas</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Fatiga constante y falta de energía incluso para tareas simples</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Dificultad para concentrarte, recordar cosas o tomar decisiones</span>
        </div>
      </div>

      <p>
        Otros síntomas comunes incluyen cambios en el sueño (dormir demasiado o muy poco), cambios en el apetito y peso, sentimientos de culpa o inutilidad desproporcionados, y en casos más severos, pensamientos de muerte o suicidio. Si experimentas varios de estos síntomas durante más de dos semanas, es importante buscar ayuda profesional.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pedir ayuda es valiente
      </h2>
      
      <p>
        Reconocer que estás pasando por un momento difícil y buscar apoyo profesional no es una señal de debilidad: es un acto de valentía y de amor propio. La depresión no es un defecto de carácter ni falta de fuerza de voluntad; es una condición que tiene causas identificables y que responde bien al tratamiento adecuado. No tienes que vivir así, y no tienes que hacerlo sola.
      </p>

      <p className="mt-4">
        Si te identificas con lo que has leído aquí, te invito a dar el primer paso. Agenda una primera sesión donde podamos conversar sobre lo que estás viviendo, evaluar tu situación, y diseñar juntas un plan para que puedas recuperar tu bienestar. El camino de salida de la depresión es posible, y estoy aquí para acompañarte en él.
      </p>
    </SEOPageLayout>
  );
};

export default DepresionSuiza;
