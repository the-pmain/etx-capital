const operator = {
  name: "ETX-capital",
  inn: "772331755151",
  address: "Malaya Nikitskaya Street 33, Moskou",
  email: "info@etx-capital.com",
};

const effectiveDate = "31 augustus 2026";

export const nlPolicyContent = {
  label: "Openbaar document",
  title: "Beleid inzake de verwerking van persoonsgegevens",
  description:
    "Dit beleid legt uit welke persoonsgegevens ETX-capital via de website ontvangt, voor welke doeleinden deze worden gebruikt, hoe ze worden beschermd en hoe betrokkenen hun rechten kunnen uitoefenen.",
  version: "Versie 1.0",
  effective: `Van kracht sinds ${effectiveDate}`,
  contents: "Inhoud",
  operatorTitle: "Verwerkingsverantwoordelijke",
  operatorLines: [
    `${operator.name}, fiscaal identificatienummer (INN) ${operator.inn}`,
    operator.address,
    operator.email,
  ],
  sections: [
    {
      id: "general",
      title: "1. Algemene bepalingen",
      paragraphs: [
        "Dit beleid is opgesteld overeenkomstig de Grondwet van de Russische Federatie en Federale Wet nr. 152-FZ van 27 juli 2006 inzake persoonsgegevens. Het is van toepassing op alle informatie die de verwerkingsverantwoordelijke ontvangt van gebruikers van etx-capital.com.",
        "Voor het bezoeken van de website hoeft een bezoeker geen naam, telefoonnummer of e-mailadres te verstrekken. Gegevens die via een formulier worden verzonden, worden door de gebruiker zelfstandig en vrijwillig verstrekt.",
      ],
    },
    {
      id: "operator",
      title: "2. Gegevens van de verwerkingsverantwoordelijke",
      paragraphs: [
        `Verwerkingsverantwoordelijke voor persoonsgegevens: ${operator.name}, fiscaal identificatienummer (INN) ${operator.inn}. Adres: ${operator.address}.`,
        `Vragen over de verwerking van persoonsgegevens en verzoeken van betrokkenen kunnen worden gestuurd naar ${operator.email}.`,
      ],
    },
    {
      id: "purposes",
      title: "3. Doeleinden, categorieën betrokkenen en gegevens",
      paragraphs: [
        "De verwerkingsverantwoordelijke verwerkt gegevens van websitebezoekers, potentiële cliënten, partners en sollicitanten uitsluitend voor zover dat voor het gekozen doel noodzakelijk is.",
      ],
      groups: [
        {
          title: "Beleggingsaanvraag",
          text: "Doel: de aanvraag beantwoorden en een eerste adviesgesprek organiseren. Gegevens: naam, telefoonnummer, optioneel e-mailadres, doel van de aanvraag en bericht.",
        },
        {
          title: "Loopbaanaanvraag",
          text: "Doel: contact opnemen met een kandidaat en een vacature bespreken. Gegevens: naam, telefoonnummer, optioneel e-mailadres, verkoopervaring, werktalen, gewenst gesprekstijdstip en bericht.",
        },
        {
          title: "Partnerschapsaanvraag",
          text: "Doel: een samenwerkingsvoorstel beoordelen en de afzender antwoorden. Gegevens: naam, telefoonnummer, optioneel e-mailadres en bericht.",
        },
        {
          title: "Werking en beveiliging van de website",
          text: "Het IP-adres, de datum en het tijdstip van het verzoek, de opgevraagde pagina, het browser- en apparaattype en technische foutlogboeken kunnen worden verwerkt. Deze gegevens worden niet voor reclame gebruikt.",
        },
      ],
    },
    {
      id: "grounds",
      title: "4. Rechtsgronden",
      paragraphs: [
        "Via formulieren verstrekte gegevens worden verwerkt op basis van afzonderlijke toestemming van de betrokkene. De toestemming wordt vrij, specifiek, doelgericht, geïnformeerd, bewust en ondubbelzinnig gegeven.",
        "Technische gegevens worden uitsluitend verwerkt voor zover dat nodig is om de website te laten functioneren, te beveiligen en te diagnosticeren, met inachtneming van de toepasselijke wetgeving.",
      ],
    },
    {
      id: "operations",
      title: "5. Verwerking en bewaartermijnen",
      paragraphs: [
        "De verwerking kan bestaan uit verzamelen, vastleggen, ordenen, samenvoegen, opslaan, corrigeren, opvragen, gebruiken, toegang verlenen aan bevoegde personen, blokkeren, verwijderen en vernietigen.",
        "Gegevens uit elk formulier worden maximaal 7 kalenderdagen na verzending bewaard. Daarna worden ze verwijderd of vernietigd, tenzij de wet een andere bewaartermijn voorschrijft.",
        "De verwerkingsverantwoordelijke neemt geen besluiten met rechtsgevolgen voor de betrokkene die uitsluitend op geautomatiseerde verwerking zijn gebaseerd.",
      ],
    },
    {
      id: "storage",
      title: "6. Opslag, ontvangers en grensoverschrijdende doorgifte",
      paragraphs: [
        "Persoonsgegevens van burgers van de Russische Federatie worden vastgelegd, geordend, samengevoegd, opgeslagen, gecorrigeerd en opgevraagd met behulp van databanken die zich op het grondgebied van de Russische Federatie bevinden.",
        "Via de formulieren op de website worden geen persoonsgegevens grensoverschrijdend doorgegeven. Alleen bevoegde personen en Russische verwerkers die in opdracht van de verwerkingsverantwoordelijke handelen en tot vertrouwelijkheid verplicht zijn, krijgen toegang.",
        "Gegevens worden niet verkocht, gepubliceerd of voor reclameberichten gebruikt. Verstrekking aan overheidsinstanties vindt uitsluitend plaats in de gevallen en volgens de procedures die de wet voorschrijft.",
      ],
    },
    {
      id: "security",
      title: "7. Beveiliging van persoonsgegevens",
      paragraphs: [
        "De verwerkingsverantwoordelijke neemt de noodzakelijke juridische, organisatorische en technische maatregelen om onrechtmatige of onbedoelde toegang, wijziging, blokkering, kopiëren, verstrekking, verspreiding en vernietiging van persoonsgegevens te voorkomen.",
        "De toegang is beperkt tot personen die deze nodig hebben om een aanvraag te behandelen. De verwerkingsverantwoordelijke bewaakt de toegang, beveiligt transmissiekanalen en neemt maatregelen voor de detectie van incidenten en het herstel van gegevens.",
      ],
    },
    {
      id: "rights",
      title: "8. Rechten van de betrokkene en intrekking van toestemming",
      paragraphs: [
        "Betrokkenen hebben het recht informatie over de verwerking van hun gegevens te ontvangen, correctie, blokkering of verwijdering te verzoeken, hun toestemming in te trekken en tegen het handelen van de verwerkingsverantwoordelijke bezwaar te maken.",
        `Verzoeken moeten naar ${operator.email} worden gestuurd en de naam van de verzoeker, contactgegevens voor het antwoord en de inhoud van het verzoek bevatten. De verwerkingsverantwoordelijke kan informatie verlangen die nodig is om de identiteit van de verzoeker en diens relatie tot de verwerkte gegevens vast te stellen.`,
        "Na ontvangst van een intrekking staakt de verwerkingsverantwoordelijke de verwerking en vernietigt deze de gegevens, tenzij er een andere wettelijke grond bestaat om ze te bewaren.",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies en technische opslag",
      paragraphs: [
        "De website gebruikt geen analytische of advertentiecookies. In de lokale opslag van de browser wordt uitsluitend een technische markering bewaard waaruit blijkt dat de kennisgeving over gegevensverwerking is gesloten.",
        "Technische serverlogboeken worden gebruikt voor de beschikbaarheid, beveiliging en diagnose van de website en zijn niet bedoeld om advertentieprofielen op te stellen.",
      ],
    },
    {
      id: "final",
      title: "10. Slotbepalingen",
      paragraphs: [
        `Dit beleid is van kracht sinds ${effectiveDate}. De actuele versie is permanent beschikbaar op deze pagina.`,
        "De verwerkingsverantwoordelijke werkt het beleid bij wanneer de verwerkingspraktijken veranderen. Een nieuwe versie treedt in werking op de in het document vermelde datum.",
      ],
    },
  ],
};

const purposeCopy = {
  investor: {
    title: "Toestemming voor de verwerking van persoonsgegevens bij een beleggingsaanvraag",
    purpose: "het beantwoorden van een beleggingsaanvraag en het organiseren van een eerste adviesgesprek",
    data: "naam, telefoonnummer, e-mailadres indien verstrekt, doel van de aanvraag en bericht",
  },
  candidate: {
    title: "Toestemming van een sollicitant voor de verwerking van persoonsgegevens",
    purpose: "contact opnemen met de kandidaat en een vacature bespreken",
    data: "naam, telefoonnummer, e-mailadres indien verstrekt, verkoopervaring, werktalen, gewenst gesprekstijdstip en bericht",
  },
  partner: {
    title: "Toestemming voor de verwerking van persoonsgegevens bij een partnerschapsaanvraag",
    purpose: "een samenwerkingsvoorstel beoordelen en een antwoord voorbereiden",
    data: "naam, telefoonnummer, e-mailadres indien verstrekt en bericht",
  },
};

export function nlConsentContent(purpose = "investor") {
  const copy = purposeCopy[purpose] || purposeCopy.investor;

  return {
    label: "Afzonderlijke toestemming",
    title: copy.title,
    description:
      "De tekst van de toestemming die via een afzonderlijk selectievakje wordt aanvaard voordat een formulier wordt verzonden.",
    version: "Versie 1.0",
    effective: `Van kracht sinds ${effectiveDate}`,
    sections: [
      {
        id: "consent",
        title: "1. Toestemming",
        paragraphs: [
          `Ik geef vrijelijk, uit eigen wil en in mijn eigen belang toestemming aan ${operator.name}, fiscaal identificatienummer (INN) ${operator.inn}, adres: ${operator.address}, om mijn persoonsgegevens te verwerken.`,
          `Doel van de verwerking: ${copy.purpose}.`,
        ],
      },
      {
        id: "data",
        title: "2. Betrokken gegevens",
        paragraphs: [
          `De verwerkingsverantwoordelijke mag de volgende gegevens verwerken: ${copy.data}.`,
        ],
      },
      {
        id: "actions",
        title: "3. Verwerkingshandelingen en -wijze",
        paragraphs: [
          "De toestemming omvat het verzamelen, vastleggen, ordenen, samenvoegen, opslaan, corrigeren, opvragen, gebruiken, verlenen van toegang aan bevoegde personen, blokkeren, verwijderen en vernietigen van gegevens.",
          "De verwerking kan geautomatiseerd en niet-geautomatiseerd plaatsvinden.",
        ],
      },
      {
        id: "term",
        title: "4. Geldigheidsduur",
        paragraphs: [
          "De toestemming blijft geldig gedurende 7 kalenderdagen na verzending van het formulier of totdat deze wordt ingetrokken, indien de intrekking eerder plaatsvindt.",
          "Na afloop worden de gegevens verwijderd of vernietigd, tenzij verdere bewaring wettelijk verplicht is.",
        ],
      },
      {
        id: "withdrawal",
        title: "5. Intrekking",
        paragraphs: [
          `De toestemming kan worden ingetrokken door een e-mail te sturen naar ${operator.email} met de naam en contactgegevens van de verzoeker en het verzoek om de verwerking te staken.`,
          "Intrekking doet geen afbreuk aan de rechtmatigheid van de verwerking die vóór ontvangst van de intrekking heeft plaatsgevonden.",
        ],
      },
      {
        id: "limits",
        title: "6. Beperkingen",
        paragraphs: [
          "Deze toestemming geldt niet voor reclameberichten, de verwerking van biometrische gegevens of grensoverschrijdende doorgifte.",
          "De verwerkingsverantwoordelijke neemt geen besluiten met rechtsgevolgen die uitsluitend op geautomatiseerde verwerking zijn gebaseerd.",
        ],
      },
    ],
  };
}
