import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnBasilea = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Basilea?",
      answer:
        "Sí, ofrezco psicoterapia online accesible desde Basilea ciudad, el lado alemán (Lörrach, Weil am Rhein) o el lado francés (Saint-Louis, Mulhouse). La modalidad online es perfecta para la región trinacional.",
    },
    {
      question: "¿Trabajas con profesionales de la industria farmacéutica?",
      answer:
        "Sí, tengo experiencia con científicos e investigadores que enfrentan la presión del sector farmacéutico: plazos de desarrollo, publicaciones, organizaciones matriciales complejas, y síndrome del impostor. La industria farmacéutica tiene características organizacionales particulares que pueden ser fuente de estrés: estructuras matriciales donde reportas simultáneamente a múltiples jefes con diferentes prioridades.",
    },
    {
      question: "¿Por qué es especial la situación de Basilea?",
      answer:
        "Basilea es una ciudad fronteriza donde la población está dispersa entre tres países. Esto ofrece flexibilidad pero también fragmenta la comunidad y complica la formación de vínculos. La pequeña comunidad hispanohablante de la región está así fragmentada, haciendo que el aislamiento sea más probable.",
    },
    {
      question: "¿El síndrome del impostor es común en la industria farmacéutica?",
      answer:
        "Muy común, especialmente entre científicos con doctorados que, a pesar de sus logros, sienten que no son suficientemente buenos o que van a ser descubiertos. Este fenómeno tiene raíces complejas: la cultura académica y científica valora la humildad intelectual y la capacidad de reconocer lo que no se sabe, lo cual puede distorsionarse en autocrítica excesiva.",
    },
    {
      question: "¿Atiendes si vivo en Francia o Alemania pero trabajo en Basilea?",
      answer:
        "Sí, la terapia online elimina las complicaciones de las fronteras. Puedes conectarte desde cualquier punto de la región trinacional.",
    },
    {
      question: "¿Qué hace especial a Basilea como capital farmacéutica?",
      answer:
        "Basilea es conocida mundialmente como la capital de la industria farmacéutica. Novartis, Roche, y numerosas empresas biotecnológicas de vanguardia tienen su sede aquí, atrayendo a científicos, investigadores, y profesionales altamente cualificados de todo el mundo. Para muchos hispanohablantes, Basilea representa la oportunidad de trabajar en la vanguardia de la ciencia biomédica, con recursos y posibilidades que serían impensables en otros contextos.",
    },
    {
      question: "¿Cómo afecta la región trinacional a la vida de los hispanohablantes?",
      answer:
        "La situación trinacional ofrece ventajas prácticas significativas: muchas personas que trabajan en Basilea viven en Francia o en Alemania, donde el costo de vida es menor. Sin embargo, esta dispersión geográfica también puede dificultar la formación de comunidad. Los hispanohablantes que trabajan en Basilea pueden vivir en tres países diferentes, lo que complica la organización de encuentros sociales y la formación de vínculos.",
    },
    {
      question: "¿Por qué el síndrome del impostor tiene una capa adicional para científicos hispanohablantes?",
      answer:
        "Para los científicos hispanohablantes, el síndrome del impostor puede tener una capa adicional. La sensación de ser 'el otro', de venir de un país que quizás no tiene la misma reputación científica que Suiza o Estados Unidos, puede alimentar la creencia de que no perteneces realmente a ese espacio de élite. El hecho de que tengas que trabajar en un idioma que no es el tuyo puede hacer que tus ideas no fluyan con la misma facilidad, lo que refuerza la sensación de incompetencia aunque sea completamente injustificada.",
    },
    {
      question: "¿Cuáles son las ventajas de la terapia online para la región de Basilea?",
      answer:
        "La modalidad online es especialmente práctica para la región de Basilea. No importa si vives en Basilea ciudad, en los pueblos del lado alemán, o en el Alsacia francés: puedes conectarte desde donde estés sin cruzar fronteras ni perder tiempo en desplazamientos. Esto es particularmente valioso para profesionales con agendas saturadas que trabajan en la industria farmacéutica. Además, resuelve el problema de la escasez de recursos en español en la región.",
    },
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Basilea | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Basilea. Atención psicológica privada en español sin esperas. 80 CHF la sesión."
      heroTitle="Psicóloga online en Basilea"
      heroSubtitle="Atención psicológica en español para la comunidad científica y farmacéutica de la región trinacional de Basilea."
      badgeText="Basilea"
      canonicalPath="/psicologa-en-basilea"
      faqs={faqs}
      disclaimer="Aviso legal: Los servicios ofrecidos son de psicoterapia privada en modalidad online. No forman parte del sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">Temas frecuentes en la comunidad de Basilea</h2>

      <p>
        Pero esta concentración de talento y recursos también crea un entorno intensamente competitivo. Los estándares
        de rendimiento son extremadamente altos, las expectativas de productividad constantes, y la presión por
        publicar, innovar, y demostrar resultados puede ser abrumadora. Para los profesionales hispanohablantes que
        trabajan en este sector, a la presión laboral se suma el desafío de rendir en inglés o alemán, navegar culturas
        corporativas complejas, y muchas veces, el síndrome del impostor que hace dudar de los propios logros.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Burnout y estrés crónico en el sector farmacéutico</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Síndrome del impostor entre científicos e investigadores</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Comunidad hispanohablante dispersa entre tres países</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Ansiedad de rendimiento en entornos de alta exigencia</span>
        </div>
      </div>

      <p>
        Los plazos de desarrollo de medicamentos son largos, lo que significa años de trabajo antes de ver resultados
        tangibles. Y la incertidumbre inherente a la ciencia –donde muchos proyectos fracasan– puede ser emocionalmente
        agotadora.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Terapia online sin fronteras</h2>

      <p>
        No estás limitado a los pocos psicólogos hispanohablantes que puedan existir localmente (si es que existen):
        puedes acceder a atención de calidad en tu idioma sin importar dónde vivas en la región trinacional.
      </p>

      <p className="mt-4">
        Si trabajas en la industria farmacéutica o biotecnológica de Basilea, si te identificas con el síndrome del
        impostor, si sientes el peso del estrés crónico y la ansiedad de rendimiento, o simplemente si buscas un espacio
        donde hablar en español de lo que te preocupa, estoy aquí para acompañarte. Juntas podemos trabajar para que
        recuperes el equilibrio y puedas disfrutar de lo que has logrado.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnBasilea;
