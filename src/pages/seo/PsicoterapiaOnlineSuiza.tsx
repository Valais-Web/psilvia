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
        Vivir en Suiza representa una oportunidad extraordinaria, pero también conlleva desafíos emocionales que muchas veces permanecen invisibles. La distancia de la familia, la adaptación a una cultura diferente, las exigencias laborales y la búsqueda de un nuevo equilibrio pueden generar un desgaste emocional significativo.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Sin desplazamientos ni pérdida de tiempo</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Atención en español, tu lengua materna</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Horarios flexibles adaptados a tu agenda</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Continuidad aunque viajes o te mudes</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Temas que trabajo en consulta
      </h2>
      
      <ul>
        <li>Ansiedad, preocupación constante y estrés</li>
        <li>Depresión y estados de ánimo bajos</li>
        <li>Burnout y agotamiento laboral</li>
        <li>Adaptación cultural y duelo migratorio</li>
        <li>Autoestima y autocrítica</li>
        <li>Conflictos de pareja y familiares</li>
        <li>Transiciones vitales y toma de decisiones</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Mi enfoque terapéutico
      </h2>
      
      <p>
        Soy Silvia Gómez, Licenciada en Psicología con formación de posgrado en Psicoterapia Cognitivo-Conductual. Trabajo desde la psicología científica para ayudarte a comprender por qué te sientes, piensas o actúas de cierta manera, y qué puedes hacer para generar un cambio real y sostenible.
      </p>
    </SEOPageLayout>
  );
};

export default PsicoterapiaOnlineSuiza;
