import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnBerna = () => {
  const faqs = [
    {
      question: "¿Puedo acceder a tus servicios desde Berna?",
      answer:
        "Sí, ofrezco psicoterapia online accesible desde Berna y sus alrededores. La modalidad online es especialmente valiosa en una ciudad donde los recursos en español son muy limitados.",
    },
    {
      question: "¿Trabajas con personal diplomático?",
      answer:
        "Sí, tengo experiencia con diplomáticos y funcionarios internacionales que enfrentan desafíos particulares: rotaciones frecuentes, presión de representación, y familias acompañantes. La vida diplomática implica representar a tu país, mantener cierta imagen, y navegar relaciones políticas complejas.",
    },
    {
      question: "¿Por qué es especialmente difícil para hispanohablantes en Berna?",
      answer:
        "La comunidad hispanohablante en Berna es pequeña comparada con Ginebra o Zúrich. Hay menos recursos en español, menos oportunidades de conectar, y mayor presión para integrarse al entorno local. Los recursos de salud mental en español son prácticamente inexistentes localmente.",
    },
    {
      question: "¿Atiendes a cónyuges acompañantes?",
      answer:
        "Sí, los cónyuges que dejaron sus carreras para acompañar a la pareja enfrentan desafíos particulares: pérdida de identidad profesional, aislamiento, y el mercado laboral limitado para no alemán-parlantes. Esta pérdida de identidad profesional puede ser devastadora para el bienestar emocional.",
    },
    {
      question: "¿Berna es buena ciudad para familias?",
      answer:
        "Sí, su tamaño manejable, seguridad y ritmo pausado la hacen atractiva para familias. Sin embargo, la crianza sin apoyo de familia extendida y el aislamiento pueden ser desafiantes.",
    },
    {
      question: "¿Qué hace única a Berna como capital federal?",
      answer:
        "Berna tiene un carácter distintivo entre las ciudades suizas. Es el centro político del país, sede del gobierno federal, del parlamento, y de numerosas embajadas y representaciones internacionales. Pero a diferencia de otras capitales europeas, Berna mantiene un ambiente casi de pueblo grande: su casco histórico medieval (Patrimonio de la Humanidad), su ritmo pausado, y su población relativamente pequeña le dan un carácter íntimo y acogedor que contrasta con su importancia política.",
    },
    {
      question: "¿Cuáles son los desafíos específicos de la vida diplomática en Berna?",
      answer:
        "Para quienes trabajan en el sector diplomático, hay presiones adicionales. Los cónyuges diplomáticos enfrentan sus propios desafíos: suelen tener que abandonar sus carreras profesionales para acompañar a su pareja, reinventándose cada pocos años cuando llega la siguiente rotación. Las rotaciones frecuentes crean dificultad para formar vínculos estables: cuando sabes que en tres o cuatro años te irás a otro destino, puede ser difícil invertir emocionalmente en amistades profundas.",
    },
    {
      question: "¿Cómo es el entorno laboral para hispanohablantes en Berna?",
      answer:
        "Muchos hispanohablantes en Berna trabajan en embajadas latinoamericanas o españolas, en organizaciones internacionales con sede en la ciudad, o en la administración federal suiza. También hay quienes trabajan en sectores no diplomáticos: empresas suizas, el sector tecnológico, la universidad, o profesiones liberales. Para ellos, el desafío suele ser la integración a un entorno laboral suizo-alemán donde las expectativas culturales pueden ser muy diferentes a las latinas.",
    },
    {
      question: "¿Por qué la terapia online es especialmente útil en Berna?",
      answer:
        "En una ciudad donde los recursos de salud mental en español son prácticamente inexistentes, la terapia online se convierte en un puente invaluable. Te permite acceder a atención psicológica profesional en tu idioma materno, con una profesional que comprende tu contexto cultural, sin las limitaciones de la escasa oferta local. La modalidad online también tiene ventajas prácticas específicas para Berna: flexibilidad para horarios impredecibles del sector diplomático, continuidad si viajas frecuentemente, y privacidad en un entorno donde 'todos se conocen'.",
    },
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en Berna | Psicoterapia online en español"
      description="Psicoterapia online para personas que viven en Berna. Atención psicológica privada en español sin esperas. 80 CHF la sesión."
      heroTitle="Psicóloga online en Berna"
      heroSubtitle="Atención psicológica en español para la comunidad diplomática e internacional de la capital federal suiza."
      badgeText="Berna"
      canonicalPath="/psicologa-en-berna"
      faqs={faqs}
      disclaimer="Información legal: Los servicios corresponden a psicoterapia privada en modalidad online. No forman parte del sistema de salud suizo ni están cubiertos por seguros médicos en Suiza. La formación profesional fue completada en México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Desafíos particulares de la comunidad hispanohablante en Berna
      </h2>

      <p>
        Los hispanohablantes en Berna enfrentan desafíos específicos derivados del tamaño reducido de su comunidad y de
        las características particulares de la ciudad. La sensación de aislamiento puede ser más intensa aquí que en
        ciudades más grandes y cosmopolitas. Cuando la comunidad de tu lengua y cultura es pequeña, cada persona que se
        va deja un vacío más difícil de llenar.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Recursos muy limitados en español en toda la ciudad</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Comunidad hispanohablante pequeña y dispersa</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Presiones específicas del entorno diplomático</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Rotaciones frecuentes que dificultan vínculos estables</span>
        </div>
      </div>

      <p>
        El idioma predominante en Berna es el alemán (específicamente el dialecto bernés), aunque el francés también
        tiene presencia oficial. Para hispanohablantes, esto significa una barrera lingüística adicional que puede
        dificultar la integración social y el acceso a servicios. Muchas personas me cuentan que después de años en
        Berna, siguen sintiéndose como forasteros porque la integración a la sociedad suiza-alemana es particularmente
        difícil.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">La terapia online como puente necesario</h2>

      <p>
        No tienes que conformarte con terapia en alemán o resignarte a no recibir apoyo. La modalidad online también
        tiene ventajas prácticas específicas para Berna. Si trabajas en el sector diplomático con horarios
        impredecibles, la flexibilidad de las sesiones online puede ser crucial. Si viajas frecuentemente por trabajo,
        puedes mantener la continuidad del proceso terapéutico desde cualquier lugar.
      </p>

      <p className="mt-4">
        Si vives en Berna y buscas apoyo psicológico en español, estoy aquí para acompañarte. Entiendo las
        particularidades de la vida en esta ciudad, los desafíos del entorno diplomático, y la experiencia de ser
        hispanohablante en un lugar donde tu comunidad es pequeña. Juntas podemos trabajar en lo que te preocupa y
        ayudarte a construir una vida más plena en la capital suiza.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnBerna;
