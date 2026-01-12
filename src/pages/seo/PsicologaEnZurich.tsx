import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnZurich = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Zúrich?",
      answer: "Sí, ofrezco psicoterapia online accesible desde Zúrich y todo su área metropolitana. La modalidad online elimina la necesidad de desplazamientos en una ciudad donde el tiempo es un recurso escaso."
    },
    {
      question: "¿Es difícil encontrar psicólogos en español en Zúrich?",
      answer: "Sí, la mayoría de profesionales de salud mental en Zúrich trabajan en alemán. Las opciones en español son muy limitadas, con listas de espera largas y tarifas elevadas."
    },
    {
      question: "¿Entiendes la presión del sector financiero suizo?",
      answer: "Sí, conozco las particularidades del entorno laboral zuiqués: altas expectativas de rendimiento, largas jornadas, competencia intensa, y la presión adicional de trabajar en un idioma que no es el materno. El sector financiero zuiqués –bancos, gestoras de activos, aseguradoras– es conocido por sus altas exigencias: jornadas largas, presión por resultados, competencia feroz por los ascensos, y una cultura donde mostrar debilidad no es bien visto."
    },
    {
      question: "¿Es común el síndrome del impostor en Zúrich?",
      answer: "Muy común, especialmente entre profesionales hispanohablantes de alto nivel. La sensación de no pertenecer, de haber llegado por suerte, de que te van a descubrir, es frecuente en entornos tan competitivos. El síndrome del impostor hace dudar de los propios logros, y la presión constante por demostrar que mereces estar ahí lo intensifica."
    },
    {
      question: "¿Por qué la terapia online es buena opción para Zúrich?",
      answer: "Ofrece flexibilidad para agendas saturadas, acceso a terapia en español, continuidad si viajas por trabajo, privacidad total, y tarifas más accesibles que la terapia presencial local."
    },
    {
      question: "¿Cuál es la realidad de vivir y trabajar en Zúrich como expatriado?",
      answer: "Zúrich representa para muchos el sueño europeo: la ciudad más grande y próspera de Suiza, sede de los principales bancos, aseguradoras, y empresas tecnológicas del país. Sin embargo, la experiencia de vivir en Zúrich como expatriado hispanohablante puede ser muy diferente. El idioma principal es el alemán suizo, un dialecto difícil de entender. La cultura suiza-alemana es notablemente más reservada y formal que la latina. Y el entorno laboral, aunque ofrece oportunidades excepcionales, es intensamente competitivo y exigente."
    },
    {
      question: "¿Por qué la soledad es tan frecuente en Zúrich?",
      answer: "Hacer amigos en Suiza es difícil en general, y en Zúrich quizás más que en otras ciudades. Los suizos tienden a mantener sus círculos sociales cerrados, formados durante la infancia y la escuela. Los expatriados suelen socializar entre ellos, pero estas amistades pueden ser transitorias: la gente viene y va según sus contratos. Y el ritmo de trabajo deja poco tiempo y energía para cultivar relaciones sociales."
    },
    {
      question: "¿La depresión estacional es un problema en Zúrich?",
      answer: "Sí, los inviernos en Zúrich son largos, grises, y con pocas horas de luz. Para quienes vienen de países con más sol, el impacto en el estado de ánimo puede ser significativo. Muchas personas notan que su energía y motivación bajan notablemente durante los meses de invierno, sin entender que esto tiene una base biológica y que hay formas de manejarlo."
    },
    {
      question: "¿Cómo afecta la comunicación suiza al estrés laboral?",
      answer: "La comunicación en el trabajo suizo tiene características particulares que pueden resultar confusas para quienes vienen de culturas latinas. La retroalimentación negativa se da de forma muy indirecta, lo que puede hacer difícil entender qué esperan realmente de ti. La asertividad 'a la latina' puede ser percibida como agresiva, mientras que la diplomacia suiza puede parecer falta de sinceridad. Navegar estas diferencias requiere energía y puede ser fuente de malentendidos y estrés."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Zúrich | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Zúrich. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Zúrich"
      heroSubtitle="Atención psicológica en español para profesionales hispanohablantes en el motor económico de Suiza. Entiendo la presión del entorno laboral zuiqués."
      badgeText="Zúrich"
      faqs={faqs}
      disclaimer="Nota legal: Este servicio es de psicoterapia privada en modalidad online. No constituye una prestación reconocida por el sistema sanitario suizo ni está cubierto por seguros médicos en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Temas frecuentes entre hispanohablantes en Zúrich
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Estrés y burnout en el sector financiero y tecnológico</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Síndrome del impostor en entornos de alto rendimiento</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Soledad y dificultad para conectar socialmente</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Depresión estacional por el clima invernal</span>
        </div>
      </div>

      <p>
        El burnout y el estrés crónico son verdaderas epidemias silenciosas en este entorno. Muchos de mis pacientes en Zúrich describen una sensación de estar siempre "en guardia", de no poder relajarse completamente en el trabajo porque sienten que los están evaluando constantemente. Esta hipervigilancia es agotadora y contribuye al desgaste emocional.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Cuida tu salud mental en Zúrich
      </h2>
      
      <p>
        En una ciudad que valora tanto la eficiencia, el rendimiento y el éxito profesional, cuidar tu salud mental puede parecer un lujo o incluso una señal de debilidad. Pero es exactamente lo contrario: es una inversión fundamental en tu bienestar y en tu capacidad de sostener una carrera satisfactoria a largo plazo. Las personas más exitosas no son las que ignoran sus problemas emocionales hasta que explotan, sino las que buscan apoyo proactivamente.
      </p>

      <p className="mt-4">
        La terapia online es especialmente práctica para profesionales en Zúrich con agendas saturadas. No tienes que pedir permiso en el trabajo, no tienes que desplazarte por la ciudad, no tienes que encontrarte con nadie en una sala de espera. Puedes conectarte desde tu oficina durante la pausa del almuerzo, desde tu casa después del trabajo, o desde cualquier lugar donde tengas privacidad y conexión a internet.
      </p>

      <p className="mt-4">
        Si vives en Zúrich y reconoces en ti algunos de los patrones que he descrito –el estrés crónico, el síndrome del impostor, la soledad, el agotamiento– estoy aquí para acompañarte. No tienes que esperar a que la situación empeore. El cambio es posible, y puedes empezar hoy.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnZurich;
