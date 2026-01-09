import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaEnEspanolSuiza = () => {
  const faqs = [
    {
      question: "¿Por qué es importante hacer terapia en español?",
      answer: "Las emociones más profundas, los recuerdos de la infancia, los matices de lo que sientes: todo fluye más naturalmente en tu lengua materna. No tener que traducir mientras exploras tu mundo interno permite una conexión más auténtica con el proceso terapéutico."
    },
    {
      question: "¿Atiendes a personas de cualquier país hispanohablante?",
      answer: "Sí, trabajo con personas de México, España, Colombia, Argentina, Chile, Perú, Venezuela y cualquier otro país de habla hispana. Cada cultura tiene sus particularidades y las tengo en cuenta en el proceso terapéutico."
    },
    {
      question: "¿Es difícil encontrar psicólogos en español en Suiza?",
      answer: "Sí, los profesionales de salud mental que hablan español son escasos en Suiza, las listas de espera son largas, y las tarifas presenciales son muy elevadas. La terapia online resuelve estos problemas."
    },
    {
      question: "¿Entiendes las dinámicas familiares latinas?",
      answer: "Sí, comprendo las particularidades de las familias latinoamericanas y españolas: las expectativas, la importancia de la comunidad y la familia extendida, y los desafíos de ser migrante en Europa."
    },
    {
      question: "¿Puedo hacer terapia si domino bien el francés o alemán?",
      answer: "Por supuesto. Aunque domines otros idiomas para el trabajo y la vida cotidiana, muchas personas prefieren hablar de sus emociones en español. El idioma del corazón suele ser el materno."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga en español en Suiza | Psicoterapia online para hispanohablantes"
      description="Atención psicológica online en español para personas que viven en Suiza. Psicoterapia privada, cercana y basada en la evidencia."
      heroTitle="Psicóloga en español en Suiza"
      heroSubtitle="Terapia en tu lengua materna para conectar más profundamente con tus emociones y avanzar en tu proceso de cambio."
      badgeText="En español"
      faqs={faqs}
      disclaimer="Aviso legal: Esta consulta ofrece servicios de psicoterapia privada online. Las sesiones no están cubiertas por seguros de salud suizos ni forman parte del sistema sanitario de Suiza. La formación profesional fue obtenida en instituciones de México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        La importancia del idioma en terapia
      </h2>
      
      <p>
        El idioma no es simplemente un vehículo neutral para transmitir información: es el recipiente de nuestra historia emocional, el archivo donde guardamos los recuerdos más profundos, el sistema de códigos con el que aprendimos a nombrar el mundo. Las experiencias que vivimos en español –la infancia, los primeros amores, las conversaciones con nuestros padres, los momentos de mayor alegría y mayor dolor– quedaron codificadas en ese idioma. Cuando intentamos hablar de ellas en otro idioma, algo se pierde inevitablemente en la traducción.
      </p>

      <p className="mt-4">
        Este fenómeno tiene un nombre: "el idioma del corazón" o "lengua emocional". Para la mayoría de las personas, es la lengua materna, la primera que aprendieron, la que está más conectada con las capas más profundas de la experiencia emocional. Aunque domines perfectamente el alemán, el francés o el inglés para el trabajo y la vida cotidiana, es muy probable que tus emociones más intensas, tus sueños nocturnos, y tu diálogo interno sigan siendo en español.
      </p>

      <p className="mt-4">
        En psicoterapia, donde el trabajo se centra precisamente en explorar el mundo emocional, esta diferencia es crucial. Hacer terapia en un idioma que no es el materno puede funcionar para temas superficiales, pero cuando necesitas acceder a recuerdos profundos, procesar traumas, o explorar conflictos familiares antiguos, la barrera del idioma se convierte en un obstáculo real. Por eso, para muchos hispanohablantes en Suiza, encontrar una psicóloga que hable español no es un capricho sino una necesidad terapéutica.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Temas frecuentes con hispanohablantes en Suiza
      </h2>

      <p>
        A lo largo de mi práctica he trabajado con hispanohablantes de muy diversos países y situaciones, y ciertos temas aparecen con frecuencia. No porque todas las personas sean iguales, sino porque la experiencia de ser hispanohablante en Suiza tiene elementos comunes que generan desafíos particulares.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Adaptación cultural y duelo migratorio en todas sus formas</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Distancia familiar y la culpa por no estar presente</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Identidad bicultural y sentido de pertenencia dividido</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Crianza de hijos bilingües y transmisión de la cultura</span>
        </div>
      </div>

      <p>
        La adaptación cultural y el duelo migratorio son quizás los más universales. Independientemente de si vienes de México, España, Colombia o Argentina, emigrar implica pérdidas que muchas veces no se reconocen ni se validan socialmente. La distancia de la familia genera un dolor particular, especialmente cuando hay enfermedades, muertes, o celebraciones importantes a las que no puedes asistir. Y la culpa por "haber abandonado" a la familia es una sombra que acompaña a muchas personas.
      </p>

      <p className="mt-4">
        La identidad bicultural es otro tema frecuente: ¿Quién soy ahora? ¿Sigo siendo mexicano/español/colombiano si ya llevo años en Suiza? ¿Pertenezco a algún lugar o estoy en un limbo permanente? Para quienes tienen hijos, se suma la pregunta sobre cómo transmitir la cultura de origen, cómo mantener el español vivo en un entorno donde los niños se adaptan rápidamente al idioma local, y cómo manejar la brecha cultural que puede surgir entre padres e hijos.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        La comunidad latinoamericana y española en Suiza
      </h2>
      
      <p>
        Suiza alberga una comunidad hispanohablante diversa y vibrante, aunque dispersa y menos visible que en otros países europeos. Personas de México, Colombia, España, Argentina, Chile, Perú, Ecuador, Venezuela, y muchos otros países han encontrado en Suiza un lugar para desarrollarse profesionalmente, formar familias, o simplemente buscar nuevas oportunidades. Cada nacionalidad trae su propia cultura, sus costumbres, su forma de ver el mundo, pero todas comparten la experiencia común de ser migrantes en un país con una cultura muy diferente a la latina.
      </p>

      <p className="mt-4">
        Esta diversidad dentro de la comunidad hispanohablante es algo que tengo muy presente en mi trabajo. No es lo mismo ser español en Suiza (con pasaporte europeo, sin barreras migratorias) que ser latinoamericano (con procesos de visa complejos y mayor precariedad legal). No es lo mismo venir de una gran ciudad cosmopolita que de un pueblo pequeño. No es lo mismo emigrar por aventura que por necesidad económica o para escapar de la violencia. Estas diferencias importan, y las tengo en cuenta en el proceso terapéutico.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Sensibilidad cultural en mi práctica
      </h2>
      
      <p>
        Mi compromiso es ofrecer un espacio donde puedas sentirte genuinamente comprendida, sin tener que explicar el contexto cultural de cada cosa que dices. Entiendo las dinámicas familiares latinoamericanas y españolas: el peso de las expectativas familiares, la importancia de la familia extendida, los roles de género tradicionales y cómo negociarlos, la forma en que se expresa (o se calla) el afecto, y los mandatos implícitos sobre el éxito, el matrimonio, los hijos, y lo que significa "ser una buena hija/esposa/madre".
      </p>

      <p className="mt-4">
        También entiendo los desafíos específicos de ser migrante en Europa: la burocracia interminable, la sensación de ser siempre "el otro", las microagresiones cotidianas, la presión por integrarse sin perder la identidad, y la fatiga de tener que demostrar constantemente tu valía. Estos temas no son tangenciales a la terapia; muchas veces están en el centro mismo del malestar que las personas traen a consulta.
      </p>

      <p className="mt-4">
        Si buscas una psicóloga en español en Suiza que entienda tu mundo, que hable tu idioma no solo lingüística sino culturalmente, y que pueda ofrecerte un espacio seguro para explorar lo que te preocupa, estoy aquí para ayudarte. No tienes que seguir buscando o conformándote con terapia en un idioma que no es el tuyo.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaEnEspanolSuiza;
