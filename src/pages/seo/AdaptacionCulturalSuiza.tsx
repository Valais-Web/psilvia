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
        Cuando hablamos de adaptación cultural, muchas veces pensamos en las diferencias superficiales: el idioma, la comida, el clima, las costumbres. Y sí, estas diferencias existen y pueden ser desafiantes. Pero el choque cultural más profundo tiene que ver con algo más fundamental: un desajuste entre la forma en que has aprendido a entender el mundo, a relacionarte con los demás, a expresar emociones, a organizarte en el tiempo, y cómo funciona el nuevo entorno.
      </p>

      <p className="mt-4">
        En Suiza, este desajuste puede manifestarse de múltiples maneras. Las reglas implícitas de interacción social son diferentes: el nivel de formalidad esperado, la distancia física y emocional en las relaciones, la importancia de la puntualidad y la planificación, la forma en que se expresan (o no se expresan) las emociones. Para alguien que viene de una cultura latina, donde la calidez, la espontaneidad y la expresividad son la norma, la reserva suiza puede sentirse fría, distante, o incluso hostil.
      </p>

      <p className="mt-4">
        No se trata de que una cultura sea mejor que otra; son simplemente diferentes. Pero cuando vives esta diferencia en el día a día, cuando te sientes fuera de lugar en situaciones cotidianas, cuando no entiendes las señales sociales que para otros son obvias, el impacto emocional puede ser significativo. Muchas personas me describen la experiencia como "estar constantemente actuando", como si tuvieran que usar una máscara para encajar, sin poder ser realmente ellos mismos.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        El duelo migratorio: las pérdidas invisibles
      </h2>

      <p>
        El duelo migratorio es uno de los conceptos más importantes para entender la experiencia emocional de quien emigra. A diferencia de otros duelos, el duelo migratorio es invisible: no hay funeral, no hay fecha en el calendario, nadie te da el pésame ni te envía flores. Pero las pérdidas son muy reales, aunque la sociedad no las reconozca ni las valide.
      </p>

      <p className="mt-4">
        Cuando emigras, dejas atrás mucho más que un lugar geográfico. Dejas a tu familia: los abrazos, las comidas juntos, los momentos cotidianos que construyen las relaciones. Dejas a tus amigos de toda la vida, esos que te conocen desde antes de que fueras quien eres ahora. Dejas tu estatus y tu lugar en la comunidad: aquí empiezas desde cero, tienes que demostrar quién eres. Dejas tu lengua: aunque hables español con algunos amigos, vives en un mundo donde tu lengua materna es minoritaria. Dejas los códigos culturales compartidos: los chistes, las referencias, los sobreentendidos que hacen que la comunicación fluya sin esfuerzo.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Familia y amigos cercanos que ya no están en lo cotidiano</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Estatus, reconocimiento y lugar en la comunidad</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Códigos culturales y sobreentendidos compartidos</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Paisaje, olores, sabores y sonidos de tu tierra</span>
        </div>
      </div>

      <p>
        Y también dejas los paisajes, los olores, los sabores, los sonidos que formaron tu infancia y tu juventud. La luz del sol de tu país, el olor a lluvia en tu ciudad, la comida de tu abuela, los ruidos de la calle: todo esto queda atrás, y aunque pueda parecer superficial, tiene un impacto profundo en tu bienestar emocional.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Un duelo parcial y recurrente
      </h2>

      <p>
        Lo que hace al duelo migratorio particularmente complejo es que es un duelo "parcial" y "recurrente". A diferencia de la muerte de un ser querido, las personas y lugares que dejaste siguen existiendo. Están ahí, al otro lado de una pantalla o un vuelo transoceánico. Esto genera una ambivalencia constante: no los has perdido del todo, pero tampoco los tienes realmente.
      </p>

      <p className="mt-4">
        Además, el duelo migratorio se reactiva periódicamente. Cada vez que alguien en tu familia se enferma y tú no puedes estar ahí. Cada vez que celebran un cumpleaños, una boda, un bautizo sin ti. Cada vez que ves fotos de la reunión familiar a la que no asististe. Cada vez que muere alguien cercano y llegas tarde al funeral, o no puedes ir en absoluto. Estas reactivaciones pueden ser intensamente dolorosas, y a menudo te toman por sorpresa cuando pensabas que ya "lo habías superado".
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Trabajo terapéutico en adaptación cultural
      </h2>

      <p>
        Mi enfoque para trabajar los temas de adaptación cultural y duelo migratorio combina elementos de la terapia cognitivo-conductual con un trabajo más profundo sobre identidad, pertenencia y significado. El proceso incluye varias líneas de trabajo que se entrelazan según las necesidades de cada persona.
      </p>
      
      <ul>
        <li><strong>Procesar el duelo:</strong> Dar espacio legítimo a las emociones de tristeza, nostalgia, rabia, culpa, y ambivalencia. Validar que estas pérdidas son reales aunque sean invisibles para otros</li>
        <li><strong>Explorar la identidad:</strong> Trabajar para integrar las diferentes partes de quién eres: la persona que eras en tu país, la persona que eres aquí, la persona que quieres ser. No tienes que elegir una sola versión de ti</li>
        <li><strong>Manejar el estrés de adaptación:</strong> Desarrollar estrategias concretas para navegar las diferencias culturales, los malentendidos, y las situaciones que te generan ansiedad o frustración</li>
        <li><strong>Fortalecer recursos y redes:</strong> Identificar y ampliar tus redes de apoyo, tanto con otros hispanohablantes como con la comunidad local. Construir un sentido de pertenencia que no dependa de un solo lugar</li>
        <li><strong>Encontrar equilibrio:</strong> Negociar el balance entre adaptarte al nuevo entorno y mantener tus raíces, sin sentir que traicionas a ninguna de las dos partes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Comprendo tu experiencia desde adentro
      </h2>
      
      <p>
        Una de las ventajas de trabajar conmigo es que conozco de cerca el contexto cultural suizo y comprendo las particularidades de la experiencia migratoria latinoamericana y española. Sé lo que significa sentirse entre dos mundos, negociar diferentes expectativas culturales, y buscar un lugar donde sentirse realmente en casa.
      </p>

      <p className="mt-4">
        En nuestras sesiones, no tendrás que explicar constantemente de dónde vienes o por qué ves las cosas de cierta manera. No tendrás que justificar por qué extrañas tu país a pesar de que "objetivamente todo está mejor aquí". No tendrás que traducir tu experiencia emocional a un idioma y un marco cultural que no es el tuyo. Este conocimiento compartido me permite ofrecerte un acompañamiento más preciso, más empático, y más relevante para tu realidad.
      </p>

      <p className="mt-4">
        Si estás atravesando un proceso de adaptación difícil, si sientes que el duelo migratorio te está pesando, o si simplemente necesitas un espacio donde puedas hablar de todo esto en español con alguien que entiende, estoy aquí para acompañarte. El camino de la adaptación no tiene que ser tan solitario.
      </p>
    </SEOPageLayout>
  );
};

export default AdaptacionCulturalSuiza;
