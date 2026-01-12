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
      answer: "Sí, tengo experiencia con estudiantes de doctorado y posdoctorado que enfrentan la presión del ambiente académico suizo. Entiendo los desafíos de la vida académica internacional. Los estudiantes de doctorado enfrentan presiones múltiples: producir publicaciones de alto impacto, cumplir con plazos estrictos, navegar relaciones complejas con supervisores, y todo esto mientras viven lejos de su red de apoyo familiar y social."
    },
    {
      question: "¿Por qué es difícil hacer amigos en Lausana?",
      answer: "La población estudiantil internacional es transitoria, las amistades se forman al inicio y si no te integras pronto puede ser difícil. Además, la rotación constante genera inestabilidad relacional. La gente viene para un doctorado de cuatro años, un posdoc de dos, o una pasantía de seis meses, y luego se va. Las amistades se forman, se profundizan, y luego se pierden cuando alguien se muda."
    },
    {
      question: "¿Atiendes familias hispanohablantes?",
      answer: "Sí, trabajo con padres que enfrentan desafíos de crianza en el extranjero: cómo mantener el español, transmitir la cultura de origen, y manejar la identidad bicultural de los hijos. Los niños que crecen en contextos biculturales tienen ventajas únicas, pero también enfrentan desafíos: pueden sentirse entre dos mundos, sin pertenecer completamente a ninguno."
    },
    {
      question: "¿Las tarifas son accesibles para estudiantes?",
      answer: "Las tarifas de terapia online son significativamente más accesibles que la terapia presencial en Suiza, lo que la hace más viable para estudiantes con presupuestos limitados."
    },
    {
      question: "¿Qué hace especial a Lausana como ciudad para expatriados?",
      answer: "Lausana tiene una personalidad distintiva que la diferencia de otras ciudades suizas. Es sede de la École Polytechnique Fédérale de Lausanne (EPFL), una de las universidades técnicas más prestigiosas del mundo, y de la Universidad de Lausana (UNIL). Es también la capital olímpica, sede del Comité Olímpico Internacional. Esta combinación atrae a estudiantes, investigadores, y profesionales del deporte de todo el mundo, creando un ambiente intelectualmente estimulante pero también intensamente competitivo."
    },
    {
      question: "¿Por qué el síndrome del impostor es tan común en Lausana?",
      answer: "El síndrome del impostor es particularmente prevalente en entornos académicos de élite como la EPFL. Estar rodeado de personas brillantes puede generar la sensación constante de que no eres suficiente, de que llegaste por error, de que en cualquier momento van a darse cuenta de que no perteneces. Esta creencia, aunque generalmente infundada, puede ser paralizante y contribuir significativamente al malestar emocional."
    },
    {
      question: "¿Cuáles son los desafíos particulares de estudiantes de doctorado?",
      answer: "El camino del doctorado y el posdoctorado está lleno de presiones que rara vez se discuten abiertamente. La incertidumbre laboral es constante: ¿Conseguiré una posición después? ¿Debo seguir en la academia o irme a la industria? Las relaciones con los supervisores pueden ser complicadas, ya que el supervisor tiene un poder enorme sobre tu carrera. El equilibrio vida-trabajo es otro desafío, con límites difusos entre el tiempo de trabajo y el tiempo personal."
    },
    {
      question: "¿Qué desafíos enfrentan las familias hispanohablantes en Lausana?",
      answer: "Criar hijos en un contexto bicultural plantea preguntas que no tienen respuestas fáciles: ¿Cómo mantener el español vivo cuando los niños pasan todo el día en francés? ¿Cómo transmitir la cultura de origen cuando no hay familia extendida cerca? ¿Cómo manejar la brecha que puede surgir cuando los hijos se adaptan más rápido que los padres? Los padres pueden experimentar culpa por no poder darles la experiencia de crecer cerca de los abuelos, primos y tíos."
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
        Desafíos comunes en la comunidad de Lausana
      </h2>

      <p>
        El ambiente académico suizo es extremadamente exigente. No es sorprendente que los problemas de salud mental sean comunes en la población doctoral, incluyendo ansiedad, depresión, y burnout.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Presión académica intensa y miedo al fracaso</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Burnout y agotamiento en estudiantes de doctorado</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Soledad y amistades transitorias en la comunidad internacional</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Síndrome del impostor en entornos académicos de élite</span>
        </div>
      </div>

      <p>
        La belleza natural de la región –el lago Lemán, los viñedos de Lavaux, las montañas– puede hacer que sea difícil admitir que no todo está bien. "¿Cómo puedo estar deprimido viviendo aquí?" es una pregunta que escucho con frecuencia. Pero la calidad de vida externa no garantiza el bienestar interno, y las presiones de la vida académica o profesional internacional son muy reales aunque el paisaje sea hermoso.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Estudiantes y jóvenes profesionales
      </h2>
      
      <p>
        La cultura del "publish or perish" (publica o muere) genera una presión constante que puede llevar al agotamiento. Algunos supervisores son exigentes; otros simplemente tienen estilos de trabajo incompatibles con los tuyos. Navegar estas dinámicas mientras intentas producir trabajo de calidad es agotador.
      </p>

      <p className="mt-4">
        Si vives en Lausana o la región del lago Lemán y buscas apoyo psicológico en español, estoy aquí para ayudarte. Ya sea que estés luchando con las presiones del doctorado, la soledad de la vida expatriada, los desafíos de la crianza bicultural, o cualquier otro tema emocional, podemos trabajar juntas para encontrar alivio y dirección.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnLausana;
