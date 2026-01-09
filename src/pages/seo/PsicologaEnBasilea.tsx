import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnBasilea = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Basilea?",
      answer: "Sí, ofrezco psicoterapia online accesible desde Basilea ciudad, el lado alemán (Lörrach, Weil am Rhein) o el lado francés (Saint-Louis, Mulhouse). La modalidad online es perfecta para la región trinacional."
    },
    {
      question: "¿Trabajas con profesionales de la industria farmacéutica?",
      answer: "Sí, tengo experiencia con científicos e investigadores que enfrentan la presión del sector farmacéutico: plazos de desarrollo, publicaciones, organizaciones matriciales complejas, y síndrome del impostor."
    },
    {
      question: "¿Por qué es especial la situación de Basilea?",
      answer: "Basilea es una ciudad fronteriza donde la población está dispersa entre tres países. Esto ofrece flexibilidad pero también fragmenta la comunidad y complica la formación de vínculos."
    },
    {
      question: "¿El síndrome del impostor es común en la industria farmacéutica?",
      answer: "Muy común, especialmente entre científicos con doctorados que, a pesar de sus logros, sienten que no son suficientemente buenos o que van a ser descubiertos."
    },
    {
      question: "¿Atiendes si vivo en Francia o Alemania pero trabajo en Basilea?",
      answer: "Sí, la terapia online elimina las complicaciones de las fronteras. Puedes conectarte desde cualquier punto de la región trinacional."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Basilea | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Basilea. Atención psicológica privada en español."
      heroTitle="Psicóloga online en Basilea"
      heroSubtitle="Atención psicológica en español para la comunidad científica y farmacéutica de la región trinacional de Basilea."
      badgeText="Basilea"
      faqs={faqs}
      disclaimer="Aviso legal: Los servicios ofrecidos son de psicoterapia privada en modalidad online. No forman parte del sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Capital farmacéutica mundial
      </h2>
      
      <p>
        Basilea es conocida mundialmente como la capital de la industria farmacéutica. Novartis, Roche, y numerosas empresas biotecnológicas de vanguardia tienen su sede aquí, atrayendo a científicos, investigadores, y profesionales altamente cualificados de todo el mundo. Para muchos hispanohablantes, Basilea representa la oportunidad de trabajar en la vanguardia de la ciencia biomédica, con recursos y posibilidades que serían impensables en otros contextos.
      </p>

      <p className="mt-4">
        Pero esta concentración de talento y recursos también crea un entorno intensamente competitivo. Los estándares de rendimiento son extremadamente altos, las expectativas de productividad constantes, y la presión por publicar, innovar, y demostrar resultados puede ser abrumadora. Para los profesionales hispanohablantes que trabajan en este sector, a la presión laboral se suma el desafío de rendir en inglés o alemán, navegar culturas corporativas complejas, y muchas veces, el síndrome del impostor que hace dudar de los propios logros.
      </p>

      <p className="mt-4">
        La industria farmacéutica tiene además características organizacionales particulares que pueden ser fuente de estrés. Las estructuras matriciales, donde reportas simultáneamente a múltiples jefes con diferentes prioridades, son comunes y pueden generar conflictos de rol. Los plazos de desarrollo de medicamentos son largos, lo que significa años de trabajo antes de ver resultados tangibles. Y la incertidumbre inherente a la ciencia –donde muchos proyectos fracasan– puede ser emocionalmente agotadora.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        La región trinacional: oportunidades y fragmentación
      </h2>

      <p>
        Basilea tiene una característica geográfica única: está ubicada exactamente donde se encuentran Suiza, Alemania, y Francia. Esta situación trinacional ofrece ventajas prácticas significativas. Muchas personas que trabajan en Basilea viven en Francia (especialmente en Saint-Louis o Mulhouse) o en Alemania (Lörrach, Weil am Rhein), donde el costo de vida es menor. Otros aprovechan la diversidad de la región para comprar, comer, o pasar el tiempo libre cruzando fronteras libremente.
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
        Sin embargo, esta dispersión geográfica también puede dificultar la formación de comunidad. Los hispanohablantes que trabajan en Basilea pueden vivir en tres países diferentes, lo que complica la organización de encuentros sociales y la formación de vínculos. La pequeña comunidad hispanohablante de la región está así fragmentada, haciendo que el aislamiento sea más probable. A diferencia de ciudades como Ginebra o Madrid, donde puedes encontrar fácilmente espacios de encuentro en español, en Basilea estos espacios son escasos.
      </p>

      <p className="mt-4">
        La vida cotidiana en la región trinacional también tiene sus complejidades. Los sistemas de salud, seguros, y regulaciones son diferentes en cada país. Si vives en Francia y trabajas en Suiza, la burocracia puede ser considerable. Y aunque las fronteras son abiertas, hay sutiles diferencias culturales entre la Suiza alemana, la Francia alsaciana, y la Alemania del sur que pueden ser desconcertantes para un recién llegado.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        El síndrome del impostor en el mundo científico
      </h2>
      
      <p>
        El síndrome del impostor es particularmente prevalente entre científicos e investigadores, y el entorno farmacéutico de Basilea no es la excepción. Personas con doctorados de universidades prestigiosas, publicaciones en revistas de alto impacto, y carreras objetivamente exitosas me cuentan que sienten constantemente que no son suficientemente buenos, que llegaron donde están por suerte, y que en cualquier momento van a ser "descubiertos" como fraudes.
      </p>

      <p className="mt-4">
        Este fenómeno tiene raíces complejas. La cultura académica y científica valora la humildad intelectual y la capacidad de reconocer lo que no se sabe, lo cual puede distorsionarse en autocrítica excesiva. Además, cuanto más aprendes, más consciente eres de lo mucho que desconoces (el llamado "efecto Dunning-Kruger inverso"). Y en entornos altamente competitivos donde todos son brillantes, es fácil sentirse como el menos capaz del grupo.
      </p>

      <p className="mt-4">
        Para los científicos hispanohablantes, el síndrome del impostor puede tener una capa adicional. La sensación de ser "el otro", de venir de un país que quizás no tiene la misma reputación científica que Suiza o Estados Unidos, puede alimentar la creencia de que no perteneces realmente a ese espacio de élite. El hecho de que tengas que trabajar en un idioma que no es el tuyo puede hacer que tus ideas no fluyan con la misma facilidad, lo que refuerza la sensación de incompetencia aunque sea completamente injustificada.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Terapia online sin fronteras
      </h2>
      
      <p>
        La modalidad online de la terapia es especialmente práctica para la región de Basilea. No importa si vives en Basilea ciudad, en los pueblos del lado alemán, o en el Alsacia francés: puedes conectarte desde donde estés sin cruzar fronteras ni perder tiempo en desplazamientos. Esto es particularmente valioso para profesionales con agendas saturadas que trabajan en la industria farmacéutica.
      </p>

      <p className="mt-4">
        La terapia online también resuelve el problema de la escasez de recursos en español en la región. No estás limitado a los pocos psicólogos hispanohablantes que puedan existir localmente (si es que existen): puedes acceder a atención de calidad en tu idioma sin importar dónde vivas en la región trinacional.
      </p>

      <p className="mt-4">
        Si trabajas en la industria farmacéutica o biotecnológica de Basilea, si te identificas con el síndrome del impostor, si sientes el peso del estrés crónico y la ansiedad de rendimiento, o simplemente si buscas un espacio donde hablar en español de lo que te preocupa, estoy aquí para acompañarte. Juntas podemos trabajar para que recuperes el equilibrio y puedas disfrutar de lo que has logrado.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnBasilea;
