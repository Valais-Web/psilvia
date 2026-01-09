import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicoterapiaOnlineSuiza = () => {
  const faqs = [
    {
      question: "¿La terapia online es igual de efectiva que la presencial?",
      answer: "Sí, numerosos estudios científicos demuestran que la terapia online es igual de efectiva que la presencial para el tratamiento de ansiedad, depresión y otros problemas emocionales. La conexión terapéutica depende de la calidad del vínculo y el trabajo colaborativo, no de la presencia física."
    },
    {
      question: "¿Cómo funcionan las sesiones online?",
      answer: "Las sesiones se realizan por videollamada segura, duran aproximadamente 55 minutos. Solo necesitas una conexión a internet estable y un espacio privado donde puedas hablar con tranquilidad."
    },
    {
      question: "¿Desde qué ciudades de Suiza puedo acceder?",
      answer: "Puedes acceder desde cualquier cantón de Suiza: Zúrich, Ginebra, Basilea, Lausana, Berna, o cualquier otra ciudad. La modalidad online elimina las barreras geográficas."
    },
    {
      question: "¿Las sesiones están cubiertas por el seguro suizo?",
      answer: "No, este servicio es de psicoterapia privada y no está cubierto por el seguro de salud suizo. Sin embargo, las tarifas son más accesibles que la psicoterapia presencial en Suiza."
    },
    {
      question: "¿Cómo agendo mi primera sesión?",
      answer: "Puedes agendar directamente desde esta página haciendo clic en 'Agendar sesión'. Verás el calendario con los horarios disponibles adaptados a tu zona horaria."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicoterapia online en Suiza | Atención psicológica en español"
      description="Psicoterapia online para personas hispanohablantes en Suiza. Atención privada, basada en la evidencia, desde un enfoque humano y profesional."
      heroTitle="Psicoterapia online en Suiza"
      heroSubtitle="Acompañamiento psicológico profesional en español para hispanohablantes en cualquier cantón de Suiza. Sesiones flexibles desde la comodidad de tu hogar."
      badgeText="Para hispanohablantes en Suiza"
      faqs={faqs}
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        ¿Por qué elegir psicoterapia online?
      </h2>
      
      <p>
        Vivir en Suiza representa una oportunidad extraordinaria en muchos sentidos: estabilidad económica, seguridad, calidad de vida, acceso a la naturaleza, y la posibilidad de desarrollarse profesionalmente en un entorno de primer nivel. Sin embargo, esta experiencia también conlleva desafíos emocionales que muchas veces permanecen invisibles, incluso para quienes los experimentan. La distancia de la familia, la adaptación a una cultura muy diferente a la latina, las exigencias del entorno laboral, y la búsqueda constante de un nuevo equilibrio pueden generar un desgaste emocional significativo.
      </p>

      <p className="mt-4">
        Para los hispanohablantes en Suiza, estos desafíos se multiplican por la barrera del idioma y la escasez de recursos de salud mental en español. Encontrar un psicólogo que hable español en Suiza puede ser extremadamente difícil: hay pocos profesionales, las listas de espera son largas, y las tarifas de la terapia presencial suiza están entre las más altas de Europa. La psicoterapia online resuelve estos obstáculos, permitiéndote acceder a atención de calidad en tu idioma materno sin importar en qué cantón vivas.
      </p>

      <p className="mt-4">
        Además, la psicoterapia online ofrece ventajas prácticas que la hacen especialmente adecuada para la vida en Suiza. En un país donde el tiempo es un recurso precioso y las agendas están saturadas, evitar el desplazamiento a una consulta puede ser la diferencia entre poder asistir a terapia regularmente o no. Puedes conectarte desde tu casa después del trabajo, desde la oficina durante la pausa del almuerzo, o incluso desde un hotel cuando estás de viaje por trabajo.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Sin desplazamientos ni pérdida de tiempo en transporte</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Atención en español, tu lengua materna y emocional</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Horarios flexibles adaptados a tu agenda laboral</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Continuidad del proceso aunque viajes o te mudes</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        La eficacia de la terapia online está científicamente probada
      </h2>

      <p>
        Una pregunta frecuente es si la terapia online puede ser tan efectiva como la terapia presencial. La respuesta, respaldada por décadas de investigación, es sí. Numerosos estudios clínicos han demostrado que la terapia cognitivo-conductual online produce resultados equivalentes a la presencial para el tratamiento de ansiedad, depresión, estrés postraumático, y otros problemas emocionales.
      </p>

      <p className="mt-4">
        Lo que determina la efectividad de la terapia no es la presencia física, sino la calidad del vínculo terapéutico y el compromiso con el proceso de cambio. A través de la videollamada, es perfectamente posible establecer una conexión genuina, trabajar con profundidad, y lograr transformaciones significativas. Miles de personas en todo el mundo han experimentado los beneficios de la terapia online, y la pandemia aceleró la adopción de esta modalidad incluso entre quienes inicialmente eran escépticos.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Temas que trabajo en consulta
      </h2>
      
      <p>
        Mi práctica clínica se centra en los problemas emocionales más comunes entre los hispanohablantes en Suiza. Si bien cada persona es única y el tratamiento se personaliza según tus necesidades, hay ciertos temas que aparecen con frecuencia en mi consulta y para los cuales tengo formación y experiencia específica.
      </p>

      <ul>
        <li><strong>Ansiedad:</strong> Preocupación constante, tensión, ataques de pánico, miedos específicos, ansiedad social, y la sensación de que algo malo está por pasar aunque no haya evidencia real</li>
        <li><strong>Depresión y estados de ánimo bajos:</strong> Tristeza persistente, pérdida de interés, fatiga, sentimientos de vacío o de que la vida no tiene sentido</li>
        <li><strong>Burnout y agotamiento laboral:</strong> Cuando el trabajo te ha consumido hasta el punto del colapso físico y emocional</li>
        <li><strong>Adaptación cultural y duelo migratorio:</strong> Las pérdidas y desafíos emocionales de vivir lejos de tu país de origen</li>
        <li><strong>Autoestima y autocrítica:</strong> Cuando el diálogo interno es cruel y te impide avanzar o disfrutar de tus logros</li>
        <li><strong>Conflictos de pareja y familiares:</strong> Dificultades en las relaciones más importantes, especialmente en contextos interculturales</li>
        <li><strong>Transiciones vitales:</strong> Cambios importantes como mudanzas, cambios de trabajo, maternidad/paternidad, separaciones, o decisiones difíciles sobre el futuro</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Mi enfoque terapéutico
      </h2>
      
      <p>
        Soy Silvia Gómez, Licenciada en Psicología con formación de posgrado en Psicoterapia Cognitivo-Conductual. Mi enfoque se basa en la psicología científica: utilizo técnicas y estrategias que han demostrado su eficacia en estudios de investigación rigurosos. Esto no significa que la terapia sea fría o mecánica; al contrario, la relación terapéutica cálida y empática es un ingrediente esencial del proceso.
      </p>

      <p className="mt-4">
        Lo que distingue a la Terapia Cognitivo-Conductual es su orientación práctica y su foco en el presente. Trabajamos para entender por qué te sientes, piensas o actúas de cierta manera, identificando los patrones que mantienen el malestar. Pero el énfasis está en qué puedes hacer para generar un cambio real y sostenible. Cada sesión tiene un propósito claro, y te llevas herramientas concretas que puedes aplicar en tu vida cotidiana.
      </p>

      <p className="mt-4">
        Mi compromiso es ofrecerte un espacio seguro, confidencial y libre de juicio donde puedas explorar lo que te preocupa, entender lo que te pasa, y trabajar activamente para construir una vida más alineada con lo que realmente te importa. Si buscas psicoterapia online en español en Suiza, estoy aquí para acompañarte.
      </p>
    </SEOPageLayout>
  );
};

export default PsicoterapiaOnlineSuiza;
