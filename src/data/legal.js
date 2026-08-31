import { deConsentContent, dePolicyContent } from "./legal.de.js";
import { esConsentContent, esPolicyContent } from "./legal.es.js";
import { frConsentContent, frPolicyContent } from "./legal.fr.js";
import { nlConsentContent, nlPolicyContent } from "./legal.nl.js";

const operator = {
  name: "ETX-capital",
  inn: "772331755151",
  address: "г. Москва, ул. Малая Никитская, 33",
  email: "info@etx-capital.com",
};

const effectiveDate = {
  ru: "31 августа 2026 года",
  en: "31 August 2026",
};

export const policyContent = {
  ru: {
    label: "Публичный документ",
    title: "Политика в отношении обработки персональных данных",
    description:
      "Политика объясняет, какие персональные данные ETX-capital получает через сайт, для каких целей их использует, как защищает и как субъект может реализовать свои права.",
    version: "Версия 1.0",
    effective: `Действует с ${effectiveDate.ru}`,
    contents: "Содержание",
    operatorTitle: "Оператор",
    operatorLines: [
      `${operator.name}, ИНН ${operator.inn}`,
      operator.address,
      operator.email,
    ],
    sections: [
      {
        id: "general",
        title: "1. Общие положения",
        paragraphs: [
          "Настоящая Политика разработана в соответствии с Конституцией Российской Федерации и Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных». Она применяется ко всей информации, которую оператор получает от пользователей сайта etx-capital.com.",
          "Использование сайта без отправки формы не требует передачи имени, телефона или email. При отправке формы пользователь самостоятельно и добровольно предоставляет указанные в ней сведения.",
        ],
      },
      {
        id: "operator",
        title: "2. Сведения об операторе",
        paragraphs: [
          `Оператор персональных данных: ${operator.name}, ИНН ${operator.inn}. Адрес: ${operator.address}.`,
          `По вопросам обработки персональных данных и для направления обращений субъект может написать на ${operator.email}.`,
        ],
      },
      {
        id: "purposes",
        title: "3. Цели, категории субъектов и состав данных",
        paragraphs: [
          "Оператор обрабатывает данные посетителей сайта, потенциальных клиентов, партнёров и кандидатов на вакансии только в объёме, необходимом для выбранной цели.",
        ],
        groups: [
          {
            title: "Инвестиционное обращение",
            text: "Цель — ответить на запрос и организовать первичную консультацию. Данные: имя, телефон, необязательный email, цель обращения и сообщение.",
          },
          {
            title: "Карьерное обращение",
            text: "Цель — связаться с кандидатом и обсудить вакансию. Данные: имя, телефон, необязательный email, опыт продаж, рабочие языки, удобное время звонка и сообщение.",
          },
          {
            title: "Партнёрское обращение",
            text: "Цель — рассмотреть предложение о сотрудничестве и ответить отправителю. Данные: имя, телефон, необязательный email и сообщение.",
          },
          {
            title: "Техническая работа и безопасность сайта",
            text: "Могут обрабатываться IP-адрес, дата и время запроса, адрес запрошенной страницы, тип браузера и устройства, а также технические журналы ошибок. Эти сведения не используются для рекламы.",
          },
        ],
      },
      {
        id: "grounds",
        title: "4. Правовые основания",
        paragraphs: [
          "Данные, переданные через формы, обрабатываются на основании отдельного согласия субъекта персональных данных. Согласие является свободным, конкретным, предметным, информированным, сознательным и однозначным.",
          "Технические данные обрабатываются в объёме, необходимом для работы, защиты и диагностики сайта, с учётом требований применимого законодательства.",
        ],
      },
      {
        id: "operations",
        title: "5. Способы и сроки обработки",
        paragraphs: [
          "Обработка может включать сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление доступа уполномоченным лицам, блокирование, удаление и уничтожение.",
          "Данные из каждой формы хранятся не более 7 календарных дней с даты отправки. По истечении срока они удаляются или уничтожаются, если закон не требует иного срока хранения.",
          "Оператор не принимает решений, порождающих юридические последствия для субъекта, исключительно на основании автоматизированной обработки.",
        ],
      },
      {
        id: "storage",
        title: "6. Хранение, получатели и трансграничная передача",
        paragraphs: [
          "Запись, систематизация, накопление, хранение, уточнение и извлечение персональных данных граждан Российской Федерации выполняются с использованием баз данных, находящихся на территории Российской Федерации.",
          "Трансграничная передача персональных данных через формы сайта не осуществляется. Доступ получают только уполномоченные лица и российские исполнители, действующие по поручению оператора и обязанные соблюдать конфиденциальность.",
          "Данные не продаются, не публикуются и не используются для рекламных рассылок. Предоставление государственным органам возможно только в случаях и порядке, установленных законом.",
        ],
      },
      {
        id: "security",
        title: "7. Защита персональных данных",
        paragraphs: [
          "Оператор применяет необходимые правовые, организационные и технические меры для предотвращения неправомерного или случайного доступа, изменения, блокирования, копирования, предоставления, распространения и уничтожения персональных данных.",
          "Доступ ограничивается кругом лиц, которым он необходим для обработки обращения. Оператор контролирует доступ, применяет защиту каналов передачи и принимает меры по обнаружению инцидентов и восстановлению данных.",
        ],
      },
      {
        id: "rights",
        title: "8. Права субъекта и отзыв согласия",
        paragraphs: [
          "Субъект вправе получить сведения об обработке своих данных, потребовать их уточнения, блокирования или удаления, а также отозвать согласие и обжаловать действия оператора.",
          `Обращение направляется на ${operator.email}. В обращении следует указать имя, контакт для ответа и суть требования. Оператор вправе запросить сведения, позволяющие подтвердить личность заявителя и его связь с обрабатываемыми данными.`,
          "После получения отзыва оператор прекращает обработку и уничтожает данные, если отсутствует иное законное основание для их сохранения.",
        ],
      },
      {
        id: "cookies",
        title: "9. Cookie и техническое хранилище",
        paragraphs: [
          "Сайт не использует аналитические или рекламные cookie. В локальном хранилище браузера сохраняется только техническая отметка о закрытии уведомления об обработке данных.",
          "Технические журналы сервера используются для доступности, безопасности и диагностики сайта и не предназначены для составления рекламных профилей.",
        ],
      },
      {
        id: "final",
        title: "10. Заключительные положения",
        paragraphs: [
          `Политика действует с ${effectiveDate.ru}. Актуальная версия постоянно доступна на этой странице.`,
          "При изменении процессов обработки оператор обновляет Политику. Новая редакция вступает в силу с даты, указанной в документе.",
        ],
      },
    ],
  },
  en: {
    label: "Public document",
    title: "Personal Data Processing Policy",
    description:
      "This Policy explains which personal data ETX-capital receives through the website, why it is used, how it is protected, and how individuals may exercise their rights.",
    version: "Version 1.0",
    effective: `Effective ${effectiveDate.en}`,
    contents: "Contents",
    operatorTitle: "Operator",
    operatorLines: [
      `${operator.name}, taxpayer number ${operator.inn}`,
      "33 Malaya Nikitskaya Street, Moscow",
      operator.email,
    ],
    sections: [
      {
        id: "general",
        title: "1. General provisions",
        paragraphs: [
          "This Policy is governed by the Constitution of the Russian Federation and Federal Law No. 152-FZ of 27 July 2006 on Personal Data. It applies to information received from users of etx-capital.com.",
          "Browsing the website does not require a visitor to provide a name, phone number, or email. Information entered into a form is provided voluntarily.",
        ],
      },
      {
        id: "operator",
        title: "2. Operator details",
        paragraphs: [
          `Personal-data operator: ${operator.name}, taxpayer number ${operator.inn}. Address: 33 Malaya Nikitskaya Street, Moscow.`,
          `Questions and data-subject requests may be sent to ${operator.email}.`,
        ],
      },
      {
        id: "purposes",
        title: "3. Purposes, individuals, and data",
        paragraphs: [
          "The operator processes data from visitors, prospective clients, partners, and job candidates only to the extent required for the selected purpose.",
        ],
        groups: [
          { title: "Investment enquiry", text: "Purpose: respond and arrange an initial consultation. Data: name, phone, optional email, enquiry purpose, and message." },
          { title: "Career enquiry", text: "Purpose: contact a candidate and discuss a role. Data: name, phone, optional email, sales experience, working languages, preferred call time, and message." },
          { title: "Partnership enquiry", text: "Purpose: review and respond to a cooperation proposal. Data: name, phone, optional email, and message." },
          { title: "Website operation and security", text: "IP address, request date and time, requested page, browser/device type, and technical error logs may be processed. They are not used for advertising." },
        ],
      },
      {
        id: "grounds",
        title: "4. Legal grounds",
        paragraphs: [
          "Form data is processed on the basis of the individual’s separate consent. Consent must be freely given, specific, informed, conscious, and unambiguous.",
          "Technical data is processed only as required to operate, protect, and diagnose the website, subject to applicable law.",
        ],
      },
      {
        id: "operations",
        title: "5. Processing and retention",
        paragraphs: [
          "Processing may include collection, recording, organisation, accumulation, storage, correction, retrieval, use, authorised access, blocking, deletion, and destruction.",
          "Form data is retained for no more than seven calendar days after submission and is then deleted or destroyed unless the law requires a different period.",
          "The operator does not make decisions producing legal effects solely by automated processing.",
        ],
      },
      {
        id: "storage",
        title: "6. Storage, recipients, and international transfer",
        paragraphs: [
          "Personal data of Russian citizens is recorded, organised, accumulated, stored, corrected, and retrieved using databases located in the Russian Federation.",
          "Website forms do not transfer personal data across borders. Access is limited to authorised personnel and Russian processors acting under the operator’s instructions and confidentiality obligations.",
          "Data is not sold, published, or used for advertising. Disclosure to public authorities occurs only where required by law.",
        ],
      },
      {
        id: "security",
        title: "7. Security",
        paragraphs: [
          "The operator applies necessary legal, organisational, and technical measures against unlawful or accidental access, alteration, blocking, copying, disclosure, distribution, and destruction.",
          "Access is restricted to personnel who need it to handle an enquiry. The operator controls access, protects transmission channels, and maintains incident-detection and recovery measures.",
        ],
      },
      {
        id: "rights",
        title: "8. Individual rights and withdrawal",
        paragraphs: [
          "Individuals may request information, correction, blocking, or deletion, withdraw consent, and challenge the operator’s actions.",
          `Requests should be sent to ${operator.email} and include the requester’s name, reply contact, and request. The operator may ask for information needed to verify identity and connection to the relevant data.`,
          "Following withdrawal, processing stops and data is destroyed unless another lawful ground requires retention.",
        ],
      },
      {
        id: "cookies",
        title: "9. Cookies and technical storage",
        paragraphs: [
          "The website uses no analytics or advertising cookies. Browser local storage contains only a technical marker recording that the data notice was dismissed.",
          "Server logs support availability, security, and diagnostics and are not used to create advertising profiles.",
        ],
      },
      {
        id: "final",
        title: "10. Final provisions",
        paragraphs: [
          `This Policy is effective from ${effectiveDate.en}. The current version remains available on this page.`,
          "The operator updates the Policy when processing practices change. A new version takes effect on the date stated in the document.",
        ],
      },
    ],
  },
};

Object.assign(policyContent, {
  de: dePolicyContent,
  fr: frPolicyContent,
  es: esPolicyContent,
  nl: nlPolicyContent,
});

const purposeCopy = {
  investor: {
    ru: {
      title: "Согласие на обработку персональных данных для инвестиционного обращения",
      purpose: "ответ на инвестиционный запрос и организация первичной консультации",
      data: "имя, номер телефона, email (если указан), цель обращения и текст сообщения",
    },
    en: {
      title: "Consent to Personal Data Processing for an Investment Enquiry",
      purpose: "responding to an investment enquiry and arranging an initial consultation",
      data: "name, phone number, email if provided, enquiry purpose, and message",
    },
  },
  candidate: {
    ru: {
      title: "Согласие на обработку персональных данных кандидата",
      purpose: "связь с кандидатом и обсуждение вакансии",
      data: "имя, номер телефона, email (если указан), опыт продаж, рабочие языки, удобное время звонка и текст сообщения",
    },
    en: {
      title: "Job Candidate Consent to Personal Data Processing",
      purpose: "contacting the candidate and discussing a vacancy",
      data: "name, phone number, email if provided, sales experience, working languages, preferred call time, and message",
    },
  },
  partner: {
    ru: {
      title: "Согласие на обработку персональных данных для партнёрского обращения",
      purpose: "рассмотрение предложения о сотрудничестве и подготовка ответа",
      data: "имя, номер телефона, email (если указан) и текст сообщения",
    },
    en: {
      title: "Consent to Personal Data Processing for a Partnership Enquiry",
      purpose: "reviewing a cooperation proposal and preparing a response",
      data: "name, phone number, email if provided, and message",
    },
  },
};

export function consentContent(locale, purpose = "investor") {
  const localizedConsent = {
    de: deConsentContent,
    fr: frConsentContent,
    es: esConsentContent,
    nl: nlConsentContent,
  }[locale];
  if (localizedConsent) return localizedConsent(purpose);

  const safePurpose = purposeCopy[purpose] ? purpose : "investor";
  const copy = purposeCopy[safePurpose][locale] || purposeCopy[safePurpose].ru;
  const ru = locale === "ru";

  return {
    label: ru ? "Отдельное согласие" : "Separate consent",
    title: copy.title,
    description: ru
      ? "Текст согласия, подтверждаемого отдельной отметкой перед отправкой формы."
      : "The consent text accepted through a separate checkbox before a form is submitted.",
    version: ru ? "Версия 1.0" : "Version 1.0",
    effective: ru ? `Действует с ${effectiveDate.ru}` : `Effective ${effectiveDate.en}`,
    sections: ru
      ? [
          {
            id: "consent",
            title: "1. Согласие",
            paragraphs: [
              `Я свободно, своей волей и в своём интересе даю оператору ${operator.name}, ИНН ${operator.inn}, адрес: ${operator.address}, согласие на обработку моих персональных данных.`,
              `Цель обработки: ${copy.purpose}.`,
            ],
          },
          {
            id: "data",
            title: "2. Перечень данных",
            paragraphs: [`Оператор вправе обработать следующие данные: ${copy.data}.`],
          },
          {
            id: "actions",
            title: "3. Действия и способ обработки",
            paragraphs: [
              "Согласие распространяется на сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление доступа уполномоченным лицам, блокирование, удаление и уничтожение данных.",
              "Обработка может выполняться автоматизированным способом и без использования средств автоматизации.",
            ],
          },
          {
            id: "term",
            title: "4. Срок действия",
            paragraphs: [
              "Согласие действует в течение 7 календарных дней с даты отправки формы либо до его отзыва, если отзыв поступит раньше.",
              "По окончании срока данные удаляются или уничтожаются, если их дальнейшее хранение не требуется по закону.",
            ],
          },
          {
            id: "withdrawal",
            title: "5. Отзыв согласия",
            paragraphs: [
              `Согласие можно отозвать, направив письмо на ${operator.email}. В письме необходимо указать имя, контактные данные и требование прекратить обработку.`,
              "Отзыв согласия не влияет на законность обработки, выполненной до его получения оператором.",
            ],
          },
          {
            id: "limits",
            title: "6. Ограничения",
            paragraphs: [
              "Согласие не распространяется на рекламные рассылки, обработку биометрических данных или трансграничную передачу.",
              "Оператор не принимает решений, порождающих юридические последствия, исключительно на основании автоматизированной обработки.",
            ],
          },
        ]
      : [
          {
            id: "consent",
            title: "1. Consent",
            paragraphs: [
              `I freely and knowingly consent to processing by ${operator.name}, taxpayer number ${operator.inn}, at 33 Malaya Nikitskaya Street, Moscow.`,
              `Purpose: ${copy.purpose}.`,
            ],
          },
          {
            id: "data",
            title: "2. Data covered",
            paragraphs: [`The operator may process: ${copy.data}.`],
          },
          {
            id: "actions",
            title: "3. Processing operations",
            paragraphs: [
              "Consent covers collection, recording, organisation, accumulation, storage, correction, retrieval, use, authorised access, blocking, deletion, and destruction.",
              "Processing may be automated or non-automated.",
            ],
          },
          {
            id: "term",
            title: "4. Term",
            paragraphs: [
              "Consent remains valid for seven calendar days after submission or until withdrawn, whichever occurs first.",
              "Data is then deleted or destroyed unless continued storage is required by law.",
            ],
          },
          {
            id: "withdrawal",
            title: "5. Withdrawal",
            paragraphs: [
              `Consent may be withdrawn by emailing ${operator.email} with the requester’s name, contact details, and request to stop processing.`,
              "Withdrawal does not affect processing lawfully carried out before it was received.",
            ],
          },
          {
            id: "limits",
            title: "6. Limits",
            paragraphs: [
              "This consent does not cover advertising, biometric data, or international transfer.",
              "The operator does not make legally significant decisions solely through automated processing.",
            ],
          },
        ],
  };
}

export const legalOperator = operator;
