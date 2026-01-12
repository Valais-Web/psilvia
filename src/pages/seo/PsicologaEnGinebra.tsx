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
      answer: "Sí, conozco las particularidades del entorno internacional en Ginebra: la presión del rendimiento, las rotaciones frecuentes, la transitoriedad de las amistades, y los desafíos de las familias expatriadas. Muchos funcionarios internacionales trabajan en condiciones de alta presión durante años hasta que el cuerpo o la mente dicen basta."
    },
    {
      question: "¿Hay mucha comunidad hispanohablante en Ginebra?",
      answer: "Sí, Ginebra alberga una comunidad hispanohablante significativa en organizaciones internacionales, bancos y multinacionales. Sin embargo, encontrar atención psicológica en español localmente puede ser difícil y costoso. La comunidad hispanohablante en Ginebra es diversa y vibrante, con personas de México, España, Colombia, Argentina, Chile, Venezuela, Perú, y muchos otros países."
    },
    {
      question: "¿Qué horarios manejas para Ginebra?",
      answer: "Trabajo en horario europeo con flexibilidad para adaptarme a agendas exigentes. Puedo ofrecer sesiones en pausas del almuerzo, primeras horas de la mañana o al final de la jornada laboral."
    },
    {
      question: "¿Qué pasa si viajo frecuentemente por trabajo?",
      answer: "La terapia online permite mantener la continuidad del proceso sin importar dónde te encuentres. Muchos de mis pacientes viajan regularmente y mantenemos las sesiones sin interrupciones."
    },
    {
      question: "¿Cuál es el contexto particular de Ginebra que entiendes?",
      answer: "Ginebra es una ciudad única en el mundo: sede de las Naciones Unidas, la Cruz Roja Internacional, la Organización Mundial de la Salud, y decenas de organizaciones internacionales más. Esta concentración de instituciones globales hace de Ginebra un imán para diplomáticos, funcionarios internacionales, y profesionales de alto nivel de todo el mundo. La riqueza cosmopolita de la ciudad es extraordinaria, pero también conlleva desafíos particulares."
    },
    {
      question: "¿Por qué la vida en Ginebra puede ser paradójica para expatriados?",
      answer: "Para los hispanohablantes que viven en Ginebra, la experiencia puede ser paradójica. Por un lado, están rodeados de diversidad cultural y oportunidades profesionales excepcionales. Por otro, la transitoriedad de las amistades –donde la gente viene y va cada pocos años–, la presión del entorno laboral internacional, y el alto costo de vida pueden generar un desgaste emocional significativo. Muchas personas me cuentan que, a pesar de vivir en una de las ciudades más privilegiadas del mundo, se sienten solas, agotadas, o desconectadas."
    },
    {
      question: "¿Qué temas son frecuentes entre hispanohablantes en Ginebra?",
      answer: "El estrés y el burnout en organismos internacionales es quizás el más común. La soledad y las amistades transitorias son otro tema recurrente: en Ginebra, las personas van y vienen, los contratos terminan, las misiones cambian. La ansiedad relacionada con contratos y permisos de residencia es también frecuente. Y para las parejas interculturales, los desafíos son únicos."
    },
    {
      question: "¿Cuáles son las ventajas específicas de la terapia online para Ginebra?",
      answer: "En una ciudad donde el tiempo es un recurso escaso y las agendas están saturadas, evitar el desplazamiento a una consulta presencial puede significar la diferencia entre poder asistir a terapia o no. Puedes conectarte desde tu oficina durante la pausa del almuerzo, desde tu casa al terminar la jornada, o incluso desde un hotel cuando estás de viaje por trabajo. Además, las tarifas son significativamente más económicas que la terapia presencial en Ginebra, donde los precios son de los más altos de Suiza."
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
        Temas frecuentes entre hispanohablantes en Ginebra
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

      <p>
        Construir amistades profundas cuando sabes que la otra persona probablemente se irá en dos o tres años es emocionalmente agotador. Muchos me cuentan que después de varias despedidas dolorosas, se vuelven reacios a invertir emocionalmente en nuevas amistades.
      </p>

      <p className="mt-4">
        Los contratos temporales, las renovaciones inciertas, y la dependencia del empleador para mantener el estatus migratorio generan una inseguridad constante que puede manifestarse como ansiedad, insomnio, o irritabilidad.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Ventajas de la terapia online para quienes viven en Ginebra
      </h2>

      <ul>
        <li><strong>Flexibilidad horaria:</strong> Sesiones adaptadas a agendas exigentes de organismos internacionales y multinacionales, incluyendo horarios fuera del típico 9-5</li>
        <li><strong>Sin desplazamientos:</strong> Evitas perder tiempo en el tráfico o transporte público, tiempo que en Ginebra es especialmente valioso</li>
        <li><strong>Continuidad en viajes:</strong> Mantienes tu proceso terapéutico aunque viajes por misión, conferencia, o vacaciones</li>
        <li><strong>Atención en español:</strong> Sin depender de la limitada y costosa oferta local de psicólogos hispanohablantes</li>
        <li><strong>Tarifas accesibles:</strong> Significativamente más económico que la terapia presencial en Ginebra, donde los precios son de los más altos de Suiza</li>
        <li><strong>Privacidad total:</strong> Nadie en tu entorno laboral o social tiene que saber que estás en terapia</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Comprendo tu contexto
      </h2>
      
      <p>
        Una de las ventajas de trabajar conmigo es que no tendrás que explicarme desde cero qué significa vivir en un entorno internacional, enfrentar la burocracia suiza, o navegar las diferencias culturales entre tu país de origen y la cultura suiza francófona. Conozco las particularidades de la vida expatriada, las dinámicas de las organizaciones internacionales, y los desafíos específicos que enfrentan las familias latinoamericanas y españolas en Europa.
      </p>

      <p className="mt-4">
        Este conocimiento contextual me permite ofrecerte un acompañamiento más preciso y relevante. No perdemos tiempo en explicaciones básicas sobre tu realidad; podemos ir directamente a lo que importa: comprender tu malestar y trabajar juntas para generar el cambio que necesitas. Si vives en Ginebra y buscas atención psicológica en español con alguien que entiende tu mundo, estoy aquí para ayudarte.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnGinebra;
