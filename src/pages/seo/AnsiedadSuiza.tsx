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
      answer: "Sí, la terapia cognitivo-conductual online ha demostrado la misma eficacia que la presencial para el tratamiento de trastornos de ansiedad. La comodidad de conectarte desde casa puede incluso reducir la ansiedad inicial de acudir a consulta. Múltiples estudios de investigación han demostrado que la TCC online produce resultados equivalentes a la TCC presencial para trastornos de ansiedad. De hecho, para muchas personas, la posibilidad de conectarse desde casa puede reducir la barrera inicial de buscar ayuda: no tienes que salir, no tienes que encontrarte con nadie en una sala de espera, y puedes estar en un ambiente donde te sientes segura."
    },
    {
      question: "¿Qué técnicas utilizas para tratar la ansiedad?",
      answer: "Utilizo técnicas de la Terapia Cognitivo-Conductual: reestructuración cognitiva para cambiar pensamientos ansiosos, exposición gradual para reducir evitaciones, técnicas de relajación y mindfulness, y prevención de recaídas."
    },
    {
      question: "¿Necesito medicación además de terapia?",
      answer: "No necesariamente. Muchas personas mejoran solo con psicoterapia. Si durante la evaluación considero que podrías beneficiarte de una consulta psiquiátrica, te lo indicaré para que lo valores con un profesional médico."
    },
    {
      question: "¿Cómo se manifiesta la ansiedad en hispanohablantes en Suiza?",
      answer: "Para muchos hispanohablantes en Suiza, la ansiedad se manifiesta como una preocupación constante sobre el futuro: ¿Renovarán mi contrato? ¿Podré mantener este nivel de vida? ¿Estoy haciendo lo suficiente para que mis hijos se adapten? ¿Y si algo le pasa a mi familia en Latinoamérica y no puedo estar ahí? Estas preocupaciones, aunque comprensibles, pueden volverse paralizantes cuando la mente no puede descansar. La cultura suiza valora la puntualidad, la precisión y el orden de una manera que puede resultar abrumadora para quienes vienen de culturas más flexibles."
    },
    {
      question: "¿Qué es la evitación y cómo afecta la ansiedad?",
      answer: "Un patrón muy común en la ansiedad es la evitación. Cuando ciertas situaciones generan ansiedad intensa, es natural querer evitarlas: evitar hablar en público, evitar conflictos, evitar viajar sola, evitar llamar al médico, evitar revisar las finanzas. El problema es que cada vez que evitas algo, la ansiedad se fortalece. El mensaje que le das a tu cerebro es 'esa situación es peligrosa y no puedo manejarla', lo que hace que la próxima vez la ansiedad sea aún mayor."
    },
    {
      question: "¿Cómo es el proceso de tratamiento para la ansiedad?",
      answer: "El tratamiento de la ansiedad con TCC sigue un proceso estructurado pero personalizado. Comenzamos con una evaluación detallada para comprender cómo se manifiesta tu ansiedad, qué situaciones la disparan, qué pensamientos la alimentan, y qué comportamientos la mantienen. A partir de esta comprensión, diseñamos un plan de tratamiento con objetivos claros y técnicas específicas: psicoeducación, reestructuración cognitiva, exposición gradual, técnicas de regulación, y prevención de recaídas."
    },
    {
      question: "¿Cuáles son las ventajas de la terapia online para la ansiedad?",
      answer: "La terapia online elimina obstáculos logísticos que pueden interferir con la regularidad del tratamiento. No tienes que pedir permiso en el trabajo para desplazarte, no tienes que coordinar transporte, y si tienes un día especialmente ansioso, no tienes que enfrentar el mundo exterior para llegar a tu sesión. Esto se traduce en mayor adherencia al tratamiento y, por tanto, mejores resultados."
    }
  ];

  return (
    <SEOPageLayout
      title="Ansiedad en Suiza | Psicoterapia online para ansiedad"
      description="Psicoterapia online para personas que viven con ansiedad en Suiza. Enfoque basado en la evidencia y atención en español."
      heroTitle="Supera la ansiedad en Suiza"
      heroSubtitle="Tratamiento psicológico online basado en la evidencia para manejar la ansiedad, las preocupaciones constantes y el estrés de vivir en Suiza."
      badgeText="Ansiedad y estrés"
      canonicalPath="/ansiedad-suiza"
      faqs={faqs}
      disclaimer="Nota legal: Este servicio corresponde a psicoterapia privada online. No forma parte del sistema sanitario suizo ni está cubierto por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La ansiedad en el contexto suizo
      </h2>
      
      <p>
        La ansiedad es una de las condiciones de salud mental más prevalentes en el mundo, y Suiza no es la excepción. Sin embargo, para las personas hispanohablantes que viven en este país, la experiencia de la ansiedad tiene matices particulares que muchas veces no son comprendidos por profesionales locales. El ritmo de vida exigente, la presión constante por rendir en el trabajo, la necesidad de adaptarse a una cultura diferente, y la distancia física y emocional de los seres queridos pueden convertirse en fuentes de tensión que alimentan y mantienen la ansiedad.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        ¿Reconoces estos síntomas de ansiedad?
      </h2>

      <p>
        La ansiedad se manifiesta de formas diversas, y no siempre es evidente que lo que estás experimentando tiene un nombre y un tratamiento efectivo. Algunas personas experimentan principalmente síntomas físicos: tensión muscular, especialmente en cuello y espalda; problemas digestivos; palpitaciones; o dificultad para respirar profundamente. Otras personas viven la ansiedad más en la mente: pensamientos acelerados, preocupaciones que no paran, dificultad para concentrarse, o la sensación de que algo malo está por pasar aunque no haya evidencia real.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Preocupación constante y pensamientos catastróficos que no puedes detener</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Tensión muscular persistente y problemas de sueño</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Dificultad para relajarte incluso cuando tienes tiempo libre</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Evitación de situaciones que te generan malestar</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Tratamiento de la ansiedad basado en la evidencia científica
      </h2>
      
      <p>
        Trabajo principalmente desde la Terapia Cognitivo-Conductual (TCC), que es el enfoque con mayor respaldo científico para el tratamiento de los trastornos de ansiedad. La TCC ha sido sometida a cientos de estudios clínicos que demuestran su eficacia, y es el tratamiento de primera línea recomendado por las principales guías clínicas internacionales para condiciones como el trastorno de ansiedad generalizada, el trastorno de pánico, las fobias específicas, y la ansiedad social.
      </p>
      
      <ul>
        <li><strong>Psicoeducación:</strong> El primer paso es entender cómo funciona la ansiedad, por qué apareció, y por qué se mantiene. Este conocimiento te da poder sobre tu experiencia y reduce el miedo a los síntomas</li>
        <li><strong>Reestructuración cognitiva:</strong> Aprendes a identificar los pensamientos ansiosos automáticos, a cuestionar su validez, y a desarrollar perspectivas más realistas y funcionales</li>
        <li><strong>Exposición gradual:</strong> Enfrentas progresivamente las situaciones que has estado evitando, en un ritmo que puedas manejar, para recuperar terreno y reducir el miedo</li>
        <li><strong>Técnicas de regulación:</strong> Desarrollas herramientas concretas para manejar la activación ansiosa: técnicas de relajación, respiración diafragmática, y mindfulness</li>
        <li><strong>Prevención de recaídas:</strong> Consolidamos lo aprendido y desarrollamos un plan para mantener los logros a largo plazo y manejar posibles retrocesos</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Da el primer paso hacia una vida con menos ansiedad
      </h2>
      
      <p>
        Si la ansiedad está afectando tu calidad de vida, tu trabajo, tus relaciones o tu capacidad de disfrutar, buscar ayuda profesional es un paso valiente e importante. La ansiedad es una de las condiciones más tratables en salud mental, y con el apoyo adecuado puedes recuperar la sensación de control sobre tu vida, reducir los síntomas que te limitan, y desarrollar herramientas que te servirán para siempre.
      </p>

      <p className="mt-4">
        No tienes que seguir viviendo en un estado de alerta constante. No tienes que resignarte a las preocupaciones interminables o a evitar las cosas que te dan miedo. El cambio es posible, y estoy aquí para acompañarte en ese proceso. Agenda una primera sesión y comencemos a trabajar juntas.
      </p>
    </SEOPageLayout>
  );
};

export default AnsiedadSuiza;
