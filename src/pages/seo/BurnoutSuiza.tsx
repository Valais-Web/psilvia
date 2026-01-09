import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const BurnoutSuiza = () => {
  const faqs = [
    {
      question: "¿Cómo sé si tengo burnout o solo estoy cansado?",
      answer: "El cansancio normal se alivia con descanso. El burnout es un agotamiento profundo que persiste incluso después de vacaciones, acompañado de cinismo hacia el trabajo y sensación de ineficacia. Si sientes que el descanso ya no te recupera, puede ser burnout."
    },
    {
      question: "¿El burnout es reconocido como enfermedad?",
      answer: "La OMS reconoce el burnout como un fenómeno ocupacional. Aunque no es un diagnóstico médico en sí mismo, puede derivar en problemas de salud mental como ansiedad y depresión que sí requieren tratamiento."
    },
    {
      question: "¿Necesito dejar mi trabajo para recuperarme del burnout?",
      answer: "No necesariamente. El tratamiento incluye establecer límites, cambiar patrones disfuncionales y desarrollar estrategias de autocuidado. En algunos casos puede ser necesario un periodo de baja, pero trabajamos para que puedas volver a trabajar de forma sostenible."
    },
    {
      question: "¿Cuánto tiempo tarda la recuperación del burnout?",
      answer: "La recuperación del burnout es gradual y puede tomar varios meses. No solo se trata de reducir síntomas, sino de cambiar patrones profundos en tu relación con el trabajo. La terapia te acompaña en este proceso."
    },
    {
      question: "¿Por qué el burnout es tan común entre expatriados?",
      answer: "Los expatriados enfrentan presiones adicionales: demostrar que merecen la oportunidad, rendir en otro idioma, adaptarse culturalmente, y mantener un nivel de vida costoso. Todo esto se suma al estrés laboral normal."
    }
  ];

  return (
    <SEOPageLayout
      title="Burnout en Suiza | Psicoterapia online para estrés laboral"
      description="Psicoterapia online para burnout y estrés laboral en Suiza. Atención privada y flexible en español."
      heroTitle="Recupera el equilibrio del burnout"
      heroSubtitle="Tratamiento psicológico para superar el agotamiento laboral, establecer límites saludables y reconectar con tu bienestar."
      badgeText="Burnout y estrés laboral"
      faqs={faqs}
      disclaimer="Nota legal: Este servicio corresponde a psicoterapia privada en modalidad online. No constituye una prestación del sistema sanitario suizo ni está cubierto por seguros de salud en Suiza. La formación profesional fue obtenida en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La cultura del rendimiento en Suiza
      </h2>
      
      <p>
        Suiza tiene una de las culturas laborales más exigentes de Europa. La precisión, la puntualidad y el alto rendimiento son valores profundamente arraigados. Para quienes trabajan aquí, especialmente expatriados, adaptarse a estas expectativas puede convertirse en una fuente constante de presión que eventualmente conduce al agotamiento.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Señales de alerta del burnout
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Agotamiento que no mejora con descanso</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Cinismo o distanciamiento del trabajo</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Sensación de ineficacia o incompetencia</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Dificultad para desconectar del trabajo</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Recuperación integral
      </h2>
      
      <p>
        Recuperarse del burnout requiere más que vacaciones. En terapia trabajamos en:
      </p>
      
      <ul>
        <li><strong>Establecer límites:</strong> Aprender a decir no y proteger tu tiempo personal</li>
        <li><strong>Identificar patrones:</strong> Explorar creencias que te llevan al sobresfuerzo</li>
        <li><strong>Reconectar con valores:</strong> Clarificar qué es importante más allá del trabajo</li>
        <li><strong>Autocuidado sostenible:</strong> Incorporar prácticas que nutran tu bienestar</li>
        <li><strong>Gestión del estrés:</strong> Técnicas concretas para manejar la presión</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        No esperes al colapso
      </h2>
      
      <p>
        Cuanto antes intervengas, más fácil será recuperar el equilibrio. Si reconoces señales de burnout, buscar apoyo profesional es una inversión en tu bienestar y tu capacidad de sostener todo lo demás.
      </p>
    </SEOPageLayout>
  );
};

export default BurnoutSuiza;
