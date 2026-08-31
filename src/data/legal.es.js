const operator = {
  name: "ETX-capital",
  inn: "772331755151",
  address: "Moscú, calle Malaya Nikitskaya, 33",
  email: "info@etx-capital.com",
};

const effectiveDate = "31 de agosto de 2026";

export const esPolicyContent = {
  label: "Documento público",
  title: "Política de tratamiento de datos personales",
  description: "Esta Política explica qué datos personales recibe ETX-capital a través del sitio web, con qué fines los utiliza, cómo los protege y cómo pueden las personas ejercer sus derechos.",
  version: "Versión 1.0",
  effective: `Vigente desde el ${effectiveDate}`,
  contents: "Índice",
  operatorTitle: "Operador",
  operatorLines: [
    `${operator.name}, INN ${operator.inn}`,
    operator.address,
    operator.email,
  ],
  sections: [
    {
      id: "general",
      title: "1. Disposiciones generales",
      paragraphs: [
        "Esta Política se ha elaborado de conformidad con la Constitución de la Federación de Rusia y la Ley Federal n.º 152-FZ, de 27 de julio de 2006, «Sobre datos personales». Se aplica a toda la información que el operador recibe de los usuarios del sitio etx-capital.com.",
        "Navegar por el sitio sin enviar un formulario no requiere facilitar el nombre, el teléfono ni el correo electrónico. Al enviar un formulario, el usuario proporciona voluntariamente la información que ha introducido.",
      ],
    },
    {
      id: "operator",
      title: "2. Datos del operador",
      paragraphs: [
        `Operador de datos personales: ${operator.name}, INN ${operator.inn}. Dirección: ${operator.address}.`,
        `Las consultas sobre el tratamiento de datos personales y las solicitudes de los interesados pueden enviarse a ${operator.email}.`,
      ],
    },
    {
      id: "purposes",
      title: "3. Fines, categorías de interesados y datos tratados",
      paragraphs: [
        "El operador trata datos de visitantes del sitio, posibles clientes, socios y candidatos a puestos de trabajo únicamente en la medida necesaria para el fin seleccionado.",
      ],
      groups: [
        {
          title: "Consulta de inversión",
          text: "Finalidad: responder a la consulta y organizar una primera reunión. Datos: nombre, teléfono, correo electrónico opcional, motivo de la consulta y mensaje.",
        },
        {
          title: "Consulta de empleo",
          text: "Finalidad: contactar con la persona candidata y hablar sobre una vacante. Datos: nombre, teléfono, correo electrónico opcional, experiencia en ventas, idiomas de trabajo, horario preferido para una llamada y mensaje.",
        },
        {
          title: "Propuesta de colaboración",
          text: "Finalidad: estudiar una propuesta de colaboración y responder a quien la envía. Datos: nombre, teléfono, correo electrónico opcional y mensaje.",
        },
        {
          title: "Funcionamiento técnico y seguridad del sitio",
          text: "Pueden tratarse la dirección IP, la fecha y hora de la solicitud, la dirección de la página solicitada, el tipo de navegador y dispositivo, y los registros técnicos de errores. Esta información no se utiliza con fines publicitarios.",
        },
      ],
    },
    {
      id: "grounds",
      title: "4. Bases jurídicas",
      paragraphs: [
        "Los datos facilitados mediante los formularios se tratan sobre la base del consentimiento separado del interesado. El consentimiento debe prestarse libremente y ser específico, concreto, informado, consciente e inequívoco.",
        "Los datos técnicos se tratan en la medida necesaria para el funcionamiento, la protección y el diagnóstico del sitio, con sujeción a la legislación aplicable.",
      ],
    },
    {
      id: "operations",
      title: "5. Operaciones y plazo de tratamiento",
      paragraphs: [
        "El tratamiento puede comprender la recogida, el registro, la organización, la acumulación, la conservación, la actualización, la extracción, el uso, la concesión de acceso a personas autorizadas, el bloqueo, la supresión y la destrucción.",
        "Los datos de cada formulario se conservan durante un máximo de 7 días naturales desde la fecha de envío. Transcurrido ese plazo, se suprimen o destruyen, salvo que la ley exija un periodo de conservación distinto.",
        "El operador no adopta decisiones que produzcan efectos jurídicos para el interesado basándose exclusivamente en un tratamiento automatizado.",
      ],
    },
    {
      id: "storage",
      title: "6. Conservación, destinatarios y transferencia transfronteriza",
      paragraphs: [
        "El registro, la organización, la acumulación, la conservación, la actualización y la extracción de los datos personales de ciudadanos de la Federación de Rusia se realizan mediante bases de datos ubicadas en el territorio de la Federación de Rusia.",
        "Los formularios del sitio no transfieren datos personales a otros países. El acceso se limita al personal autorizado y a encargados del tratamiento rusos que actúan siguiendo las instrucciones del operador y están sujetos a obligaciones de confidencialidad.",
        "Los datos no se venden, publican ni utilizan para envíos publicitarios. Solo podrán facilitarse a autoridades públicas en los casos y conforme al procedimiento establecidos por la ley.",
      ],
    },
    {
      id: "security",
      title: "7. Protección de los datos personales",
      paragraphs: [
        "El operador aplica las medidas jurídicas, organizativas y técnicas necesarias para impedir el acceso, la modificación, el bloqueo, la copia, la comunicación, la difusión o la destrucción ilícitos o accidentales de datos personales.",
        "El acceso se restringe a las personas que lo necesitan para tramitar una consulta. El operador controla el acceso, protege los canales de transmisión y adopta medidas para detectar incidentes y recuperar los datos.",
      ],
    },
    {
      id: "rights",
      title: "8. Derechos del interesado y retirada del consentimiento",
      paragraphs: [
        "El interesado puede obtener información sobre el tratamiento de sus datos, solicitar su actualización, bloqueo o supresión, retirar su consentimiento e impugnar las actuaciones del operador.",
        `Las solicitudes deben enviarse a ${operator.email} e indicar el nombre, un medio de contacto para responder y el objeto de la solicitud. El operador podrá pedir la información necesaria para verificar la identidad del solicitante y su relación con los datos tratados.`,
        "Una vez recibida la retirada, el operador cesará el tratamiento y destruirá los datos, salvo que exista otra base jurídica para conservarlos.",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies y almacenamiento técnico",
      paragraphs: [
        "El sitio no utiliza cookies analíticas ni publicitarias. El almacenamiento local del navegador solo contiene un indicador técnico de que se ha cerrado el aviso sobre tratamiento de datos.",
        "Los registros técnicos del servidor se utilizan para garantizar la disponibilidad, seguridad y capacidad de diagnóstico del sitio, y no para crear perfiles publicitarios.",
      ],
    },
    {
      id: "final",
      title: "10. Disposiciones finales",
      paragraphs: [
        `Esta Política está vigente desde el ${effectiveDate}. La versión actual permanece disponible en esta página.`,
        "El operador actualizará la Política cuando cambien sus prácticas de tratamiento. La nueva versión entrará en vigor en la fecha indicada en el documento.",
      ],
    },
  ],
};

const purposeCopy = {
  investor: {
    title: "Consentimiento para el tratamiento de datos personales en una consulta de inversión",
    purpose: "responder a una consulta de inversión y organizar una primera reunión",
    data: "nombre, número de teléfono, correo electrónico si se facilita, motivo de la consulta y mensaje",
  },
  candidate: {
    title: "Consentimiento de la persona candidata para el tratamiento de datos personales",
    purpose: "contactar con la persona candidata y hablar sobre una vacante",
    data: "nombre, número de teléfono, correo electrónico si se facilita, experiencia en ventas, idiomas de trabajo, horario preferido para una llamada y mensaje",
  },
  partner: {
    title: "Consentimiento para el tratamiento de datos personales en una propuesta de colaboración",
    purpose: "estudiar una propuesta de colaboración y preparar una respuesta",
    data: "nombre, número de teléfono, correo electrónico si se facilita y mensaje",
  },
};

export function esConsentContent(purpose = "investor") {
  const copy = purposeCopy[purpose] || purposeCopy.investor;

  return {
    label: "Consentimiento separado",
    title: copy.title,
    description: "Texto del consentimiento aceptado mediante una casilla separada antes de enviar el formulario.",
    version: "Versión 1.0",
    effective: `Vigente desde el ${effectiveDate}`,
    sections: [
      {
        id: "consent",
        title: "1. Consentimiento",
        paragraphs: [
          `De forma libre, consciente y en mi propio interés, consiento que el operador ${operator.name}, INN ${operator.inn}, con domicilio en ${operator.address}, trate mis datos personales.`,
          `Finalidad del tratamiento: ${copy.purpose}.`,
        ],
      },
      {
        id: "data",
        title: "2. Datos incluidos",
        paragraphs: [`El operador podrá tratar los siguientes datos: ${copy.data}.`],
      },
      {
        id: "actions",
        title: "3. Operaciones y modalidad de tratamiento",
        paragraphs: [
          "El consentimiento comprende la recogida, el registro, la organización, la acumulación, la conservación, la actualización, la extracción, el uso, la concesión de acceso a personas autorizadas, el bloqueo, la supresión y la destrucción de los datos.",
          "El tratamiento podrá realizarse por medios automatizados o sin utilizar medios de automatización.",
        ],
      },
      {
        id: "term",
        title: "4. Vigencia",
        paragraphs: [
          "El consentimiento tendrá una vigencia de 7 días naturales desde el envío del formulario o hasta su retirada, si esta se produce antes.",
          "Al finalizar dicho plazo, los datos se suprimirán o destruirán, salvo que la ley exija conservarlos durante más tiempo.",
        ],
      },
      {
        id: "withdrawal",
        title: "5. Retirada del consentimiento",
        paragraphs: [
          `El consentimiento puede retirarse enviando un correo electrónico a ${operator.email}. El mensaje deberá indicar el nombre, los datos de contacto y la solicitud de que cese el tratamiento.`,
          "La retirada no afecta a la licitud del tratamiento efectuado antes de que el operador la reciba.",
        ],
      },
      {
        id: "limits",
        title: "6. Límites",
        paragraphs: [
          "Este consentimiento no comprende los envíos publicitarios, el tratamiento de datos biométricos ni la transferencia transfronteriza.",
          "El operador no adopta decisiones con efectos jurídicos basándose exclusivamente en un tratamiento automatizado.",
        ],
      },
    ],
  };
}

export const esConsentContents = {
  investor: esConsentContent("investor"),
  candidate: esConsentContent("candidate"),
  partner: esConsentContent("partner"),
};
