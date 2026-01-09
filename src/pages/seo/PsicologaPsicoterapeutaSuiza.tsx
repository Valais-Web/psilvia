import { SEOPageLayout } from "@/components/SEOPageLayout";
import { CheckCircle2 } from "lucide-react";

const PsicologaPsicoterapeutaSuiza = () => {
  const faqs = [
    {
      question: "¿Cuál es tu formación profesional?",
      answer: "Soy Licenciada en Psicología por una universidad reconocida en México, con formación de posgrado en Psicoterapia Cognitivo-Conductual en España. Esta formación me habilita para ejercer la psicoterapia de manera privada."
    },
    {
      question: "¿Estás acreditada en el sistema de salud suizo?",
      answer: "No, mi formación fue obtenida en México y España, no en Suiza. Esto significa que ofrezco psicoterapia privada que no está cubierta por el seguro de salud suizo. Soy transparente sobre este encuadre."
    },
    {
      question: "¿Cuál es la diferencia entre psicoterapia privada y cubierta por seguro?",
      answer: "La psicoterapia cubierta por seguro requiere profesionales acreditados en Suiza y suele tener listas de espera. La privada ofrece más flexibilidad, atención inmediata, tarifas más accesibles, y en mi caso, atención en español."
    },
    {
      question: "¿Qué enfoque terapéutico utilizas?",
      answer: "Trabajo principalmente desde la Terapia Cognitivo-Conductual (TCC), el enfoque con mayor respaldo empírico para una amplia variedad de problemas emocionales. Es un enfoque práctico, orientado a resultados."
    },
    {
      question: "¿Cómo garantizas la calidad de tu trabajo?",
      answer: "Trabajo con rigor clínico, actualización constante, y supervisión profesional. La ética, la transparencia y el compromiso con el bienestar de mis pacientes son pilares fundamentales de mi práctica."
    }
  ];

  return (
    <SEOPageLayout
      title="Psicóloga y psicoterapeuta en Suiza | Atención online privada"
      description="Psicoterapia online privada para personas que viven en Suiza. Formación internacional y enfoque basado en la evidencia."
      heroTitle="Psicóloga y psicoterapeuta en Suiza"
      heroSubtitle="Atención psicológica privada online con formación internacional y un compromiso claro con la ética y la transparencia profesional."
      badgeText="Sobre mi práctica"
      faqs={faqs}
      disclaimer="Información legal: Los servicios de psicoterapia que se ofrecen son privados y se brindan en modalidad online. No forman parte del sistema de salud suizo ni están cubiertos por seguros médicos en Suiza. La formación profesional fue completada en instituciones educativas de México y España."
    >
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Transparencia sobre mi práctica
      </h2>
      
      <p>
        Es fundamental entender la diferencia entre el lugar donde residen los pacientes y el país donde un profesional obtuvo su formación. Mi formación académica y clínica fue completada en México y España. Esto significa que ofrezco psicoterapia privada, no cubierta por el seguro de salud suizo.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Lo que puedes esperar
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Honestidad sobre lo que puedo ofrecerte</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Confidencialidad estricta</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Profesionalismo y rigor clínico</span>
        </div>
        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">Claridad en el proceso terapéutico</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Ventajas de la psicoterapia privada
      </h2>
      
      <ul>
        <li>Sin listas de espera: podemos comenzar cuando estés lista</li>
        <li>Tarifas más accesibles que la psicoterapia presencial en Suiza</li>
        <li>Flexibilidad total en los horarios</li>
        <li>Acceso desde cualquier lugar de Suiza</li>
        <li>Atención en español con comprensión cultural</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Para quién es este servicio
      </h2>
      
      <p>
        Este servicio está pensado para hispanohablantes en Suiza que valoran la posibilidad de hacer terapia en su idioma materno, con una profesional que comprende su realidad cultural, y que buscan una alternativa accesible y flexible a la psicoterapia presencial local.
      </p>
    </SEOPageLayout>
  );
};

export default PsicologaPsicoterapeutaSuiza;
