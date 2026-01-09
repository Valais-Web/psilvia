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
        Suiza tiene una de las culturas laborales más exigentes de Europa, y esto no es casualidad: el país se ha construido sobre los valores de la precisión, la puntualidad, la eficiencia y el alto rendimiento. Estos valores, que en muchos sentidos son admirables y han llevado al país a niveles extraordinarios de desarrollo, también tienen un lado oscuro. La presión por cumplir con estándares elevados de manera constante puede convertirse en una fuente de estrés crónico que eventualmente conduce al agotamiento.
      </p>

      <p className="mt-4">
        Para quienes trabajan en Suiza, especialmente los expatriados hispanohablantes, la presión tiene capas adicionales. No solo hay que rendir al máximo nivel, sino que hay que hacerlo en un idioma que no es el materno, navegando códigos culturales que pueden ser sutiles pero importantes. Muchos sienten que tienen que demostrar constantemente que merecen estar ahí, que justifican el salario que reciben, que no son "menos" que sus colegas suizos o europeos. Esta necesidad de probarse continuamente es agotadora.
      </p>

      <p className="mt-4">
        El costo de vida en Suiza añade otra capa de presión. Los salarios son altos, pero también lo son los gastos: alquileres, seguros, guarderías, impuestos. Muchas personas se sienten atrapadas en un círculo donde trabajan intensamente para mantener un nivel de vida que apenas les deja tiempo para disfrutarlo. Y cuando consideran reducir horas o cambiar a un trabajo menos exigente, el miedo a no poder mantener el estilo de vida –o a decepcionar a la familia en el país de origen que espera recibir apoyo– las paraliza.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        ¿Qué es exactamente el burnout?
      </h2>

      <p>
        El burnout, o síndrome de desgaste profesional, es un estado de agotamiento físico, emocional y mental causado por el estrés laboral crónico. La Organización Mundial de la Salud lo reconoce como un fenómeno ocupacional caracterizado por tres dimensiones principales: agotamiento extremo, distanciamiento mental del trabajo (cinismo), y sensación de ineficacia o falta de realización profesional.
      </p>

      <p className="mt-4">
        A diferencia del cansancio normal, que se alivia con descanso, el burnout es un estado más profundo del que no se sale simplemente con unas vacaciones. De hecho, uno de los signos más claros del burnout es cuando regresas de vacaciones sintiéndote igual o peor que cuando te fuiste. El descanso tradicional ya no funciona porque el problema no es solo físico: hay algo roto en tu relación con el trabajo.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Señales de alerta del burnout
      </h2>

      <p>
        El burnout rara vez aparece de la noche a la mañana. Es un proceso gradual donde las señales de alerta se van acumulando hasta que el cuerpo o la mente dicen basta. Reconocer estas señales tempranamente puede permitir intervenir antes de llegar al colapso.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Agotamiento profundo que no mejora con descanso o vacaciones</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Cinismo, distanciamiento emocional del trabajo y los colegas</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Sensación de ineficacia o de que tu trabajo no importa</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Dificultad para desconectar mentalmente del trabajo</span>
        </div>
      </div>

      <p>
        Otras señales incluyen problemas de sueño (especialmente despertarse pensando en el trabajo), irritabilidad aumentada, dolores de cabeza o musculares frecuentes, problemas digestivos, mayor susceptibilidad a enfermedades, y recurrir cada vez más a sustancias (alcohol, cafeína, medicamentos) para funcionar o desconectar. A nivel emocional, puedes sentir ansiedad los domingos por la noche pensando en la semana que viene, o sentir que ya no reconoces a la persona en que te has convertido.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        El burnout en expatriados: presiones adicionales
      </h2>

      <p>
        Para los expatriados hispanohablantes en Suiza, el riesgo de burnout es particularmente alto debido a presiones adicionales que sus colegas locales no enfrentan. Está la presión de demostrar que mereces la oportunidad, de justificar la decisión de emigrar, de no decepcionar a la familia que quizás depende económicamente de ti o que hizo sacrificios para que pudieras estudiar y progresar.
      </p>

      <p className="mt-4">
        Trabajar en un idioma que no es el materno requiere un esfuerzo cognitivo adicional constante. Aunque domines el alemán, francés o inglés, piensas, sueñas y procesas emociones en español. Traducir continuamente, estar atento a matices culturales, y preocuparte por cómo te perciben añade una carga invisible que se acumula. Y cuando algo sale mal, muchos expatriados se preguntan si los juzgarán más duramente por ser extranjeros.
      </p>

      <p className="mt-4">
        Además, la red de apoyo suele ser más limitada. No tienes a tu familia cerca para ayudar con los niños o simplemente para desahogarte. Los amigos que has hecho pueden estar igual de ocupados y estresados, o pueden irse del país en cualquier momento. La soledad del éxito profesional en el extranjero es un tema que aparece frecuentemente en mi consulta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Recuperación integral del burnout
      </h2>
      
      <p>
        Recuperarse del burnout requiere más que unas vacaciones largas o un cambio de trabajo. Es necesario abordar los patrones de pensamiento y comportamiento que te llevaron al agotamiento, para que no vuelvas a caer en el mismo ciclo. Mi enfoque para tratar el burnout combina intervenciones cognitivo-conductuales con un trabajo más profundo sobre valores, identidad y la relación con el trabajo.
      </p>
      
      <ul>
        <li><strong>Establecer límites saludables:</strong> Aprender a decir no, a proteger tu tiempo personal, a distinguir entre urgente e importante, y a dejar de compensar constantemente las deficiencias del sistema</li>
        <li><strong>Identificar patrones disfuncionales:</strong> Explorar las creencias profundas que te llevan al sobresfuerzo: perfeccionismo, necesidad de aprobación, miedo al fracaso, dificultad para delegar</li>
        <li><strong>Reconectar con valores:</strong> Clarificar qué es verdaderamente importante para ti más allá del trabajo, y reorganizar tu vida para darle espacio a esas prioridades</li>
        <li><strong>Desarrollar autocuidado sostenible:</strong> Incorporar prácticas que nutran tu bienestar físico, emocional y social de manera regular, no solo cuando estás al borde del colapso</li>
        <li><strong>Gestión práctica del estrés:</strong> Aprender técnicas concretas para manejar la presión diaria y recuperarte de los picos de estrés sin acumular agotamiento</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        No esperes al colapso para buscar ayuda
      </h2>
      
      <p>
        Una de las características del burnout es que se desarrolla gradualmente, y muchas personas no buscan ayuda hasta que ya están en una crisis severa: una baja médica, un ataque de pánico, o una decisión impulsiva como renunciar sin tener otro plan. Cuanto antes intervengas en el proceso, más fácil será recuperar el equilibrio y prevenir consecuencias más graves.
      </p>

      <p className="mt-4">
        Si reconoces en ti algunas de las señales de alerta que he descrito, no lo minimices pensando que "todo el mundo está estresado" o que "es normal en este trabajo". El estrés crónico tiene consecuencias reales para tu salud física y mental. Buscar apoyo profesional no es un lujo ni una señal de debilidad: es una inversión inteligente en tu bienestar y en tu capacidad de sostener una carrera satisfactoria a largo plazo.
      </p>

      <p className="mt-4">
        La terapia online te permite acceder a este apoyo sin añadir más desplazamientos a tu ya saturada agenda. Podemos trabajar juntas para que recuperes tu energía, tu motivación y tu sentido de propósito, sin que tengas que sacrificar la carrera que has construido. El cambio es posible, y estoy aquí para acompañarte.
      </p>
    </SEOPageLayout>
  );
};

export default BurnoutSuiza;
