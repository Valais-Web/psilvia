import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const AdaptacionCulturalSuiza = () => {
  const faqs = [
    {
      question: "¿Qué es el duelo migratorio?",
      answer: "El duelo migratorio son las pérdidas que implica migrar: familia, amigos, estatus, idioma, paisaje, y una versión de ti mismo. A diferencia de otros duelos, es invisible socialmente y puede reactivarse en momentos específicos."
    },
    {
      question: "¿Es normal sentirse entre dos mundos?",
      answer: "Sí, es una experiencia muy común entre migrantes. Sentir que no perteneces completamente ni aquí ni allá, que tienes que negociar constantemente entre diferentes versiones de ti mismo. En terapia trabajamos para integrar estas partes."
    },
    {
      question: "¿Cuánto tiempo toma adaptarse culturalmente?",
      answer: "La adaptación cultural es un proceso continuo que puede tomar años. No hay un punto final donde 'ya estás adaptado'. Lo que trabajamos en terapia es que el proceso sea menos doloroso y más consciente."
    },
    {
      question: "¿Por qué me siento triste si objetivamente todo está bien?",
      answer: "El bienestar externo (buen trabajo, calidad de vida) no garantiza el bienestar emocional. Las pérdidas del duelo migratorio son reales aunque invisibles. Tus sentimientos son válidos independientemente de tus circunstancias."
    },
    {
      question: "¿Cómo puedo mantener mi identidad mientras me integro?",
      answer: "No tienes que elegir entre ser quien eras y adaptarte. Trabajamos para encontrar un equilibrio que integre ambas partes, manteniendo lo esencial de tu identidad mientras desarrollas nuevas facetas."
    }
  ];

  return (
    <SEOPageLayout
      title="Adaptación cultural en Suiza | Psicoterapia online para expatriados"
      description="Psicoterapia online para personas en proceso de adaptación cultural en Suiza. Atención psicológica en español."
      heroTitle="Adaptación cultural y duelo migratorio"
      heroSubtitle="Acompañamiento psicológico para procesar las pérdidas de la migración y construir una nueva vida sin renunciar a quien eres."
      badgeText="Expatriados y migrantes"
      faqs={faqs}
      disclaimer="Información legal: Los servicios ofrecidos corresponden a psicoterapia privada en modalidad online. No forman parte del sistema sanitario suizo ni están cubiertos por seguros médicos en Suiza. La formación profesional fue obtenida en instituciones de México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Más allá de las diferencias superficiales
      </h2>
      
      <p>
        El choque cultural va más profundo que el idioma o las costumbres. Se trata de un desajuste fundamental entre la forma en que has aprendido a entender el mundo y cómo funciona el nuevo entorno. En Suiza, esto puede manifestarse en las reglas implícitas de interacción social, el nivel de expresividad emocional aceptable, o el equilibrio entre lo personal y lo profesional.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Las pérdidas del duelo migratorio
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Familia y amigos cercanos</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Estatus y lugar en la comunidad</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Códigos culturales compartidos</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Paisaje, olores, sonidos de tu tierra</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Trabajo terapéutico en adaptación cultural
      </h2>
      
      <ul>
        <li><strong>Procesar el duelo:</strong> Dar espacio a las emociones de tristeza, nostalgia, rabia, culpa</li>
        <li><strong>Explorar la identidad:</strong> Integrar las diferentes partes de quién eres</li>
        <li><strong>Manejar el estrés:</strong> Desarrollar estrategias para la adaptación</li>
        <li><strong>Fortalecer recursos:</strong> Identificar y ampliar tus redes de apoyo</li>
        <li><strong>Encontrar equilibrio:</strong> Entre adaptarte al nuevo entorno y mantener tus raíces</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Comprendo tu experiencia
      </h2>
      
      <p>
        Conozco de cerca el contexto cultural suizo y comprendo las particularidades de la experiencia migratoria latinoamericana y española. No tendrás que explicar constantemente de dónde vienes o por qué ves las cosas de cierta manera. Este conocimiento me permite ofrecerte un acompañamiento más preciso y relevante.
      </p>
    </SEOPageLayout>
  );
};

export default AdaptacionCulturalSuiza;
