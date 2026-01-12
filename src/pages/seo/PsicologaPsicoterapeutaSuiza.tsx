import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaPsicoterapeutaSuiza = () => {
  const faqs = [
    {
      question: "¿Cuál es tu formación profesional?",
      answer: "Soy Licenciada en Psicología por una universidad reconocida en México, con formación de posgrado en Psicoterapia Cognitivo-Conductual en España. Esta formación me habilita para ejercer la psicoterapia de manera privada."
    },
    {
      question: "¿Estás acreditada en el sistema de salud suizo?",
      answer: "No, mi formación fue obtenida en México y España, no en Suiza. Esto significa que ofrezco psicoterapia privada que no está cubierta por el seguro de salud suizo. Soy transparente sobre este encuadre."
    },
    {
      question: "¿Cuál es la diferencia entre psicoterapia privada y cubierta por seguro?",
      answer: "La psicoterapia cubierta por seguro requiere profesionales acreditados en Suiza y suele tener listas de espera. La privada ofrece más flexibilidad, atención inmediata, tarifas más accesibles, y en mi caso, atención en español."
    },
    {
      question: "¿Qué enfoque terapéutico utilizas?",
      answer: "Trabajo principalmente desde la Terapia Cognitivo-Conductual (TCC), el enfoque con mayor respaldo empírico para una amplia variedad de problemas emocionales. Es un enfoque práctico, orientado a resultados."
    },
    {
      question: "¿Cómo garantizas la calidad de tu trabajo?",
      answer: "Trabajo con rigor clínico, actualización constante, y supervisión profesional. La ética, la transparencia y el compromiso con el bienestar de mis pacientes son pilares fundamentales de mi práctica."
    },
    {
      question: "¿Qué puedo esperar de mi consulta contigo?",
      answer: "Cuando decides iniciar un proceso de psicoterapia, es natural que te preguntes qué esperar y cómo será la experiencia. Mi compromiso es ofrecerte un espacio seguro, confidencial y profesional donde puedas explorar tus dificultades emocionales con el apoyo de alguien que genuinamente se preocupa por tu bienestar. Desde la primera sesión, trabajaremos juntas para establecer objetivos claros y un plan de tratamiento que se adapte a tus necesidades específicas."
    },
    {
      question: "¿Cómo funciona la Terapia Cognitivo-Conductual (TCC)?",
      answer: "Mi formación de posgrado se centra en la Terapia Cognitivo-Conductual (TCC), considerada el 'gold standard' o estándar de oro en el tratamiento de numerosos problemas psicológicos. La TCC cuenta con décadas de investigación científica que respalda su eficacia para trastornos de ansiedad, depresión, estrés postraumático, trastorno obsesivo-compulsivo, problemas de sueño, y muchas otras condiciones. Lo que distingue a la TCC de otros enfoques es su carácter práctico y orientado a resultados. En lugar de explorar indefinidamente el pasado, nos enfocamos en comprender cómo tus pensamientos, emociones y comportamientos actuales interactúan para mantener el malestar, y trabajamos activamente para generar cambios concretos."
    },
    {
      question: "¿Para quién es ideal este servicio de psicoterapia?",
      answer: "Este servicio está diseñado específicamente para hispanohablantes que viven en Suiza y que buscan una alternativa de calidad a la psicoterapia presencial local. Si valoras la posibilidad de expresarte en tu lengua materna, de ser atendida por una profesional que comprende tu realidad cultural y los desafíos específicos de la vida en el extranjero, y si buscas una opción flexible y accesible económicamente, este servicio es para ti. Muchas de las personas que me consultan son profesionales altamente cualificados que han construido carreras exitosas en Suiza, pero que enfrentan dificultades emocionales que no habían anticipado: la soledad de estar lejos de la familia, la presión de rendir en un idioma que no es el materno, el duelo por lo que dejaron atrás, o la ansiedad de mantener un nivel de vida exigente."
    },
    {
      question: "¿También trabajas con parejas interculturales o familias?",
      answer: "También trabajo con parejas interculturales que enfrentan los desafíos de combinar diferentes visiones del mundo, con padres que crían hijos en un contexto bicultural, y con estudiantes o investigadores que luchan con la presión del ambiente académico suizo. Lo que todas estas personas tienen en común es la necesidad de un espacio donde puedan ser completamente ellos mismos, en su idioma, sin tener que explicar constantemente de dónde vienen o por qué ven las cosas de cierta manera."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga y psicoterapeuta en Suiza | Atención online privada"
      description="Psicoterapia online privada para personas que viven en Suiza. Formación internacional y enfoque basado en la evidencia."
      heroTitle="Psicóloga y psicoterapeuta en Suiza"
      heroSubtitle="Atención psicológica privada online con formación internacional y un compromiso claro con la ética y la transparencia profesional."
      badgeText="Sobre mi práctica"
      faqs={faqs}
      disclaimer="Información legal: Los servicios de psicoterapia que se ofrecen son privados y se brindan en modalidad online. No forman parte del sistema de salud suizo ni están cubiertos por seguros médicos en Suiza. La formación profesional fue completada en instituciones educativas de México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Valores fundamentales de mi práctica
      </h2>

      <p>
        La honestidad y la transparencia son valores fundamentales en mi práctica. Esto significa que siempre serás informada sobre el proceso terapéutico, las técnicas que utilizamos, y el progreso que vamos logrando. No hay agendas ocultas ni promesas vacías: trabajamos con expectativas realistas y objetivos medibles para que puedas ver tu avance de manera tangible.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Honestidad sobre lo que puedo ofrecerte</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Confidencialidad estricta</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Profesionalismo y rigor clínico</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Claridad en el proceso terapéutico</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Sesiones estructuradas y orientadas a resultados
      </h2>
      
      <p>
        Las sesiones de TCC son estructuradas pero flexibles. Cada sesión tiene un propósito claro, revisamos tareas y aprendizajes de la semana, y establecemos objetivos para la siguiente. Esta estructura te ayuda a sentir que estás avanzando y te proporciona herramientas concretas que puedes aplicar en tu vida cotidiana desde las primeras sesiones.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Ventajas de la psicoterapia privada online
      </h2>
      
      <p>
        La psicoterapia privada online ofrece una serie de ventajas significativas frente a la terapia presencial tradicional, especialmente para personas que viven en Suiza. En un país donde la demanda de servicios de salud mental supera ampliamente la oferta, las listas de espera para terapeutas cubiertos por el seguro pueden ser de varios meses. La modalidad privada te permite comenzar tu proceso terapéutico cuando lo necesitas, sin esperas prolongadas que pueden agravar el malestar.
      </p>

      <ul>
        <li><strong>Sin listas de espera:</strong> Podemos comenzar cuando estés lista, sin meses de espera que pueden empeorar tu situación</li>
        <li><strong>Tarifas más accesibles:</strong> Las tarifas de terapia online son significativamente menores que las de la terapia presencial en Suiza, donde una sesión puede costar 200-250 CHF</li>
        <li><strong>Flexibilidad total en los horarios:</strong> Ofrezco sesiones en horarios adaptados a agendas exigentes, incluyendo pausas del almuerzo y horarios fuera del trabajo</li>
        <li><strong>Acceso desde cualquier lugar de Suiza:</strong> Ya sea que vivas en Zúrich, Ginebra, Basilea, Lausana, Berna o cualquier otra ciudad, puedes acceder a la terapia sin desplazamientos</li>
        <li><strong>Atención en español con comprensión cultural:</strong> No solo hablamos el mismo idioma, sino que compartimos referencias culturales que enriquecen el proceso terapéutico</li>
        <li><strong>Continuidad garantizada:</strong> Si viajas por trabajo o te mudas dentro de Suiza o Europa, el proceso terapéutico continúa sin interrupciones</li>
      </ul>
    </SEOPageLayout>
  );
};

export default PsicologaPsicoterapeutaSuiza;
