const deOperator = {
  name: "ETX-capital",
  inn: "772331755151",
  address: "Moskau, ul. Malaya Nikitskaya 33",
  email: "info@etx-capital.com",
};

const deEffectiveDate = "31. August 2026";

export const dePolicyContent = {
  label: "Öffentliches Dokument",
  title: "Richtlinie zur Verarbeitung personenbezogener Daten",
  description:
    "Diese Richtlinie erläutert, welche personenbezogenen Daten ETX-capital über die Website erhält, zu welchen Zwecken sie verwendet werden, wie sie geschützt werden und wie betroffene Personen ihre Rechte ausüben können.",
  version: "Version 1.0",
  effective: `Gültig ab ${deEffectiveDate}`,
  contents: "Inhalt",
  operatorTitle: "Verantwortlicher",
  operatorLines: [
    `${deOperator.name}, INN ${deOperator.inn}`,
    deOperator.address,
    deOperator.email,
  ],
  sections: [
    {
      id: "general",
      title: "1. Allgemeine Bestimmungen",
      paragraphs: [
        "Diese Richtlinie wurde in Übereinstimmung mit der Verfassung der Russischen Föderation und dem Föderalen Gesetz Nr. 152-FZ vom 27.07.2006 „Über personenbezogene Daten“ erstellt. Sie gilt für alle Informationen, die der Verantwortliche von Nutzern der Website etx-capital.com erhält.",
        "Für die Nutzung der Website ohne Absenden eines Formulars müssen weder Name noch Telefonnummer oder E-Mail-Adresse angegeben werden. Beim Absenden eines Formulars stellt der Nutzer die darin angegebenen Informationen selbstständig und freiwillig bereit.",
      ],
    },
    {
      id: "operator",
      title: "2. Angaben zum Verantwortlichen",
      paragraphs: [
        `Verantwortlicher für die Verarbeitung personenbezogener Daten: ${deOperator.name}, INN ${deOperator.inn}. Anschrift: ${deOperator.address}.`,
        `Fragen zur Verarbeitung personenbezogener Daten und Anfragen betroffener Personen können an ${deOperator.email} gerichtet werden.`,
      ],
    },
    {
      id: "purposes",
      title: "3. Zwecke, Kategorien betroffener Personen und Datenumfang",
      paragraphs: [
        "Der Verantwortliche verarbeitet Daten von Websitebesuchern, potenziellen Kunden, Partnern und Stellenbewerbern ausschließlich in dem Umfang, der für den gewählten Zweck erforderlich ist.",
      ],
      groups: [
        {
          title: "Anlageanfrage",
          text: "Zweck: Beantwortung der Anfrage und Organisation einer Erstberatung. Daten: Name, Telefonnummer, optionale E-Mail-Adresse, Grund der Anfrage und Nachricht.",
        },
        {
          title: "Karriereanfrage",
          text: "Zweck: Kontaktaufnahme mit dem Bewerber und Besprechung einer Stelle. Daten: Name, Telefonnummer, optionale E-Mail-Adresse, Vertriebserfahrung, Arbeitssprachen, bevorzugte Gesprächszeit und Nachricht.",
        },
        {
          title: "Partnerschaftsanfrage",
          text: "Zweck: Prüfung eines Kooperationsvorschlags und Beantwortung der Anfrage. Daten: Name, Telefonnummer, optionale E-Mail-Adresse und Nachricht.",
        },
        {
          title: "Technischer Betrieb und Sicherheit der Website",
          text: "Verarbeitet werden können IP-Adresse, Datum und Uhrzeit der Anfrage, Adresse der aufgerufenen Seite, Browser- und Gerätetyp sowie technische Fehlerprotokolle. Diese Informationen werden nicht für Werbung verwendet.",
        },
      ],
    },
    {
      id: "grounds",
      title: "4. Rechtsgrundlagen",
      paragraphs: [
        "Über Formulare übermittelte Daten werden auf Grundlage einer gesonderten Einwilligung der betroffenen Person verarbeitet. Die Einwilligung erfolgt freiwillig, für den bestimmten Fall, nach ausreichender Information, bewusst und eindeutig.",
        "Technische Daten werden unter Beachtung des anwendbaren Rechts nur in dem Umfang verarbeitet, der für Betrieb, Schutz und Diagnose der Website erforderlich ist.",
      ],
    },
    {
      id: "operations",
      title: "5. Art und Dauer der Verarbeitung",
      paragraphs: [
        "Die Verarbeitung kann das Erheben, Erfassen, Ordnen, Sammeln, Speichern, Berichtigen, Auslesen, Verwenden, Gewähren des Zugriffs für befugte Personen, Sperren, Löschen und Vernichten umfassen.",
        "Daten aus jedem Formular werden höchstens sieben Kalendertage ab dem Tag der Übermittlung gespeichert. Nach Ablauf dieser Frist werden sie gelöscht oder vernichtet, sofern gesetzlich keine andere Aufbewahrungsfrist vorgeschrieben ist.",
        "Der Verantwortliche trifft keine Entscheidungen mit rechtlichen Folgen für die betroffene Person ausschließlich auf Grundlage einer automatisierten Verarbeitung.",
      ],
    },
    {
      id: "storage",
      title: "6. Speicherung, Empfänger und grenzüberschreitende Übermittlung",
      paragraphs: [
        "Die Erfassung, Ordnung, Sammlung, Speicherung, Berichtigung und das Auslesen personenbezogener Daten von Bürgern der Russischen Föderation erfolgen unter Verwendung von Datenbanken, die sich auf dem Gebiet der Russischen Föderation befinden.",
        "Über die Formulare der Website werden personenbezogene Daten nicht grenzüberschreitend übermittelt. Zugriff erhalten ausschließlich befugte Personen und russische Auftragsverarbeiter, die nach Weisung des Verantwortlichen handeln und zur Vertraulichkeit verpflichtet sind.",
        "Daten werden nicht verkauft, veröffentlicht oder für Werbesendungen verwendet. Eine Weitergabe an staatliche Stellen erfolgt nur in den gesetzlich vorgesehenen Fällen und nach dem gesetzlich festgelegten Verfahren.",
      ],
    },
    {
      id: "security",
      title: "7. Schutz personenbezogener Daten",
      paragraphs: [
        "Der Verantwortliche trifft die erforderlichen rechtlichen, organisatorischen und technischen Maßnahmen, um unrechtmäßigen oder unbeabsichtigten Zugriff sowie Änderung, Sperrung, Vervielfältigung, Offenlegung, Verbreitung und Vernichtung personenbezogener Daten zu verhindern.",
        "Der Zugriff ist auf Personen beschränkt, die ihn zur Bearbeitung einer Anfrage benötigen. Der Verantwortliche kontrolliert Zugriffe, schützt Übertragungskanäle und trifft Maßnahmen zur Erkennung von Sicherheitsvorfällen und zur Wiederherstellung von Daten.",
      ],
    },
    {
      id: "rights",
      title: "8. Rechte betroffener Personen und Widerruf der Einwilligung",
      paragraphs: [
        "Betroffene Personen können Auskunft über die Verarbeitung ihrer Daten verlangen, deren Berichtigung, Sperrung oder Löschung fordern, ihre Einwilligung widerrufen und gegen Handlungen des Verantwortlichen Beschwerde einlegen.",
        `Anfragen sind an ${deOperator.email} zu richten und sollten Name, eine Kontaktmöglichkeit für die Antwort sowie den Gegenstand der Anfrage enthalten. Der Verantwortliche kann Informationen anfordern, die zur Bestätigung der Identität des Antragstellers und seines Bezugs zu den verarbeiteten Daten erforderlich sind.`,
        "Nach Eingang des Widerrufs stellt der Verantwortliche die Verarbeitung ein und vernichtet die Daten, sofern keine andere gesetzliche Grundlage ihre weitere Speicherung erfordert.",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies und technischer Speicher",
      paragraphs: [
        "Die Website verwendet keine Analyse- oder Werbe-Cookies. Im lokalen Speicher des Browsers wird ausschließlich eine technische Markierung gespeichert, dass der Hinweis zur Datenverarbeitung geschlossen wurde.",
        "Technische Serverprotokolle dienen der Verfügbarkeit, Sicherheit und Diagnose der Website und werden nicht zur Erstellung von Werbeprofilen verwendet.",
      ],
    },
    {
      id: "final",
      title: "10. Schlussbestimmungen",
      paragraphs: [
        `Diese Richtlinie gilt ab dem ${deEffectiveDate}. Die aktuelle Fassung ist dauerhaft auf dieser Seite verfügbar.`,
        "Ändern sich die Verarbeitungsprozesse, aktualisiert der Verantwortliche die Richtlinie. Eine neue Fassung tritt an dem im Dokument angegebenen Datum in Kraft.",
      ],
    },
  ],
};

const dePurposeCopy = {
  investor: {
    title: "Einwilligung in die Verarbeitung personenbezogener Daten für eine Anlageanfrage",
    purpose: "Beantwortung einer Anlageanfrage und Organisation einer Erstberatung",
    data: "Name, Telefonnummer, E-Mail-Adresse (falls angegeben), Grund der Anfrage und Nachricht",
  },
  candidate: {
    title: "Einwilligung eines Stellenbewerbers in die Verarbeitung personenbezogener Daten",
    purpose: "Kontaktaufnahme mit dem Bewerber und Besprechung einer Stelle",
    data: "Name, Telefonnummer, E-Mail-Adresse (falls angegeben), Vertriebserfahrung, Arbeitssprachen, bevorzugte Gesprächszeit und Nachricht",
  },
  partner: {
    title: "Einwilligung in die Verarbeitung personenbezogener Daten für eine Partnerschaftsanfrage",
    purpose: "Prüfung eines Kooperationsvorschlags und Vorbereitung einer Antwort",
    data: "Name, Telefonnummer, E-Mail-Adresse (falls angegeben) und Nachricht",
  },
};

export function deConsentContent(purpose = "investor") {
  const copy = dePurposeCopy[purpose] || dePurposeCopy.investor;

  return {
    label: "Gesonderte Einwilligung",
    title: copy.title,
    description:
      "Text der Einwilligung, die vor dem Absenden eines Formulars über ein gesondertes Kontrollkästchen erteilt wird.",
    version: "Version 1.0",
    effective: `Gültig ab ${deEffectiveDate}`,
    sections: [
      {
        id: "consent",
        title: "1. Einwilligung",
        paragraphs: [
          `Ich willige freiwillig, aus eigenem Willen und in meinem eigenen Interesse darin ein, dass ${deOperator.name}, INN ${deOperator.inn}, Anschrift: ${deOperator.address}, meine personenbezogenen Daten verarbeitet.`,
          `Zweck der Verarbeitung: ${copy.purpose}.`,
        ],
      },
      {
        id: "data",
        title: "2. Erfasste Daten",
        paragraphs: [`Der Verantwortliche darf folgende Daten verarbeiten: ${copy.data}.`],
      },
      {
        id: "actions",
        title: "3. Verarbeitungsvorgänge und -verfahren",
        paragraphs: [
          "Die Einwilligung umfasst das Erheben, Erfassen, Ordnen, Sammeln, Speichern, Berichtigen, Auslesen, Verwenden, Gewähren des Zugriffs für befugte Personen, Sperren, Löschen und Vernichten der Daten.",
          "Die Verarbeitung kann automatisiert oder ohne Einsatz automatisierter Verfahren erfolgen.",
        ],
      },
      {
        id: "term",
        title: "4. Gültigkeitsdauer",
        paragraphs: [
          "Die Einwilligung gilt sieben Kalendertage ab dem Absenden des Formulars oder bis zu ihrem Widerruf, falls dieser früher eingeht.",
          "Nach Ablauf der Frist werden die Daten gelöscht oder vernichtet, sofern ihre weitere Speicherung nicht gesetzlich vorgeschrieben ist.",
        ],
      },
      {
        id: "withdrawal",
        title: "5. Widerruf der Einwilligung",
        paragraphs: [
          `Die Einwilligung kann durch eine E-Mail an ${deOperator.email} widerrufen werden. Die Nachricht muss den Namen, Kontaktdaten und die Aufforderung enthalten, die Verarbeitung einzustellen.`,
          "Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung, die vor seinem Eingang beim Verantwortlichen erfolgt ist.",
        ],
      },
      {
        id: "limits",
        title: "6. Beschränkungen",
        paragraphs: [
          "Diese Einwilligung erstreckt sich nicht auf Werbesendungen, die Verarbeitung biometrischer Daten oder eine grenzüberschreitende Übermittlung.",
          "Der Verantwortliche trifft keine Entscheidungen mit rechtlichen Folgen ausschließlich auf Grundlage einer automatisierten Verarbeitung.",
        ],
      },
    ],
  };
}

export const deConsentContents = {
  investor: deConsentContent("investor"),
  candidate: deConsentContent("candidate"),
  partner: deConsentContent("partner"),
};
