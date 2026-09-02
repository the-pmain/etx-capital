const operator = {
  name: "ETX-capital",
  inn: "772331755151",
  address: "г. Москва, ул. Малая Никитская, 33",
  email: "info@etx-marketing.com",
};

const effectiveDate = "31 août 2026";
const frenchAddress = "33, rue Malaya Nikitskaya, Moscou";

export const frPolicyContent = {
  label: "Document public",
  title: "Politique relative au traitement des données personnelles",
  description:
    "Cette Politique explique quelles données personnelles ETX-capital reçoit par l’intermédiaire du site, à quelles fins elles sont utilisées, comment elles sont protégées et comment les personnes concernées peuvent exercer leurs droits.",
  version: "Version 1.0",
  effective: `En vigueur à compter du ${effectiveDate}`,
  contents: "Sommaire",
  operatorTitle: "Responsable du traitement",
  operatorLines: [
    `${operator.name}, numéro d’identification fiscale (INN) ${operator.inn}`,
    frenchAddress,
    operator.email,
  ],
  sections: [
    {
      id: "general",
      title: "1. Dispositions générales",
      paragraphs: [
        "La présente Politique est établie conformément à la Constitution de la Fédération de Russie et à la loi fédérale n° 152-FZ du 27 juillet 2006 relative aux données personnelles. Elle s’applique à toutes les informations que le responsable du traitement reçoit des utilisateurs du site etx-marketing.com.",
        "La consultation du site sans envoi de formulaire ne nécessite pas la communication d’un nom, d’un numéro de téléphone ou d’une adresse e-mail. Lorsqu’il envoie un formulaire, l’utilisateur fournit les informations qui y figurent de manière volontaire et de sa propre initiative.",
      ],
    },
    {
      id: "operator",
      title: "2. Informations sur le responsable du traitement",
      paragraphs: [
        `Responsable du traitement des données personnelles : ${operator.name}, numéro d’identification fiscale (INN) ${operator.inn}. Adresse : ${frenchAddress}.`,
        `Pour toute question relative au traitement des données personnelles ou pour exercer ses droits, la personne concernée peut écrire à ${operator.email}.`,
      ],
    },
    {
      id: "purposes",
      title: "3. Finalités, catégories de personnes et données traitées",
      paragraphs: [
        "Le responsable du traitement ne traite les données des visiteurs du site, clients potentiels, partenaires et candidats à un emploi que dans la mesure nécessaire à la finalité choisie.",
      ],
      groups: [
        {
          title: "Demande relative à un investissement",
          text: "Finalité : répondre à la demande et organiser une première consultation. Données : nom, numéro de téléphone, e-mail facultatif, motif de la demande et message.",
        },
        {
          title: "Candidature",
          text: "Finalité : contacter le candidat et échanger sur un poste. Données : nom, numéro de téléphone, e-mail facultatif, expérience commerciale, langues de travail, créneau souhaité pour un appel et message.",
        },
        {
          title: "Proposition de partenariat",
          text: "Finalité : examiner une proposition de coopération et répondre à son auteur. Données : nom, numéro de téléphone, e-mail facultatif et message.",
        },
        {
          title: "Fonctionnement technique et sécurité du site",
          text: "Peuvent être traités : l’adresse IP, la date et l’heure de la requête, l’adresse de la page demandée, le type de navigateur et d’appareil ainsi que les journaux d’erreurs techniques. Ces informations ne sont pas utilisées à des fins publicitaires.",
        },
      ],
    },
    {
      id: "grounds",
      title: "4. Fondements juridiques",
      paragraphs: [
        "Les données transmises au moyen des formulaires sont traitées sur la base du consentement distinct de la personne concernée. Ce consentement est donné librement ; il est spécifique, exprès, éclairé, conscient et sans ambiguïté.",
        "Les données techniques ne sont traitées que dans la mesure nécessaire au fonctionnement, à la protection et au diagnostic du site, dans le respect des exigences du droit applicable.",
      ],
    },
    {
      id: "operations",
      title: "5. Modalités et durée du traitement",
      paragraphs: [
        "Le traitement peut comprendre la collecte, l’enregistrement, l’organisation, l’accumulation, la conservation, la rectification, l’extraction, l’utilisation, l’octroi d’un accès aux personnes autorisées, le verrouillage, l’effacement et la destruction.",
        "Les données provenant de chaque formulaire sont conservées pendant une durée maximale de 7 jours calendaires à compter de leur envoi. À l’expiration de cette durée, elles sont effacées ou détruites, sauf si la loi impose une autre durée de conservation.",
        "Le responsable du traitement ne prend aucune décision produisant des effets juridiques à l’égard de la personne concernée sur le seul fondement d’un traitement automatisé.",
      ],
    },
    {
      id: "storage",
      title: "6. Conservation, destinataires et transfert transfrontalier",
      paragraphs: [
        "L’enregistrement, l’organisation, l’accumulation, la conservation, la rectification et l’extraction des données personnelles des citoyens de la Fédération de Russie sont effectués au moyen de bases de données situées sur le territoire de la Fédération de Russie.",
        "Les formulaires du site ne donnent lieu à aucun transfert transfrontalier de données personnelles. Seules les personnes autorisées et les prestataires russes agissant sur instruction du responsable du traitement et tenus à une obligation de confidentialité peuvent y accéder.",
        "Les données ne sont ni vendues, ni publiées, ni utilisées pour des communications publicitaires. Elles ne peuvent être communiquées aux autorités publiques que dans les cas et selon les modalités prévus par la loi.",
      ],
    },
    {
      id: "security",
      title: "7. Protection des données personnelles",
      paragraphs: [
        "Le responsable du traitement met en œuvre les mesures juridiques, organisationnelles et techniques nécessaires pour prévenir tout accès, toute modification, tout verrouillage, toute copie, toute communication, toute diffusion ou toute destruction illicite ou accidentelle des données personnelles.",
        "L’accès est limité aux personnes qui en ont besoin pour traiter une demande. Le responsable du traitement contrôle les accès, protège les canaux de transmission et prend des mesures de détection des incidents et de restauration des données.",
      ],
    },
    {
      id: "rights",
      title: "8. Droits de la personne concernée et retrait du consentement",
      paragraphs: [
        "La personne concernée peut obtenir des informations sur le traitement de ses données, demander leur rectification, leur verrouillage ou leur effacement, retirer son consentement et contester les actes du responsable du traitement.",
        `Toute demande doit être envoyée à ${operator.email} et indiquer le nom de son auteur, un moyen de le contacter pour lui répondre et l’objet de sa demande. Le responsable du traitement peut demander les informations nécessaires pour vérifier l’identité du demandeur et son lien avec les données concernées.`,
        "Après réception du retrait, le responsable du traitement cesse le traitement et détruit les données, sauf s’il existe un autre fondement juridique justifiant leur conservation.",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies et stockage technique",
      paragraphs: [
        "Le site n’utilise aucun cookie d’analyse ou publicitaire. Le stockage local du navigateur contient uniquement un marqueur technique indiquant que l’avis relatif au traitement des données a été fermé.",
        "Les journaux techniques du serveur servent à assurer la disponibilité, la sécurité et le diagnostic du site ; ils ne sont pas destinés à créer des profils publicitaires.",
      ],
    },
    {
      id: "final",
      title: "10. Dispositions finales",
      paragraphs: [
        `La présente Politique entre en vigueur le ${effectiveDate}. Sa version en vigueur reste disponible en permanence sur cette page.`,
        "Le responsable du traitement met la Politique à jour lorsque les modalités de traitement évoluent. Toute nouvelle version entre en vigueur à la date indiquée dans le document.",
      ],
    },
  ],
};

const purposeCopy = {
  investor: {
    title: "Consentement au traitement des données personnelles pour une demande relative à un investissement",
    purpose: "répondre à une demande relative à un investissement et organiser une première consultation",
    data: "nom, numéro de téléphone, e-mail s’il est renseigné, motif de la demande et message",
  },
  candidate: {
    title: "Consentement du candidat au traitement de ses données personnelles",
    purpose: "contacter le candidat et échanger sur un poste",
    data: "nom, numéro de téléphone, e-mail s’il est renseigné, expérience commerciale, langues de travail, créneau souhaité pour un appel et message",
  },
  partner: {
    title: "Consentement au traitement des données personnelles pour une proposition de partenariat",
    purpose: "examiner une proposition de coopération et préparer une réponse",
    data: "nom, numéro de téléphone, e-mail s’il est renseigné et message",
  },
};

export function frConsentContent(purpose = "investor") {
  const safePurpose = purposeCopy[purpose] ? purpose : "investor";
  const copy = purposeCopy[safePurpose];

  return {
    label: "Consentement distinct",
    title: copy.title,
    description:
      "Texte du consentement accepté au moyen d’une case distincte avant l’envoi du formulaire.",
    version: "Version 1.0",
    effective: `En vigueur à compter du ${effectiveDate}`,
    sections: [
      {
        id: "consent",
        title: "1. Consentement",
        paragraphs: [
          `Je consens librement, volontairement et dans mon propre intérêt au traitement de mes données personnelles par ${operator.name}, numéro d’identification fiscale (INN) ${operator.inn}, dont l’adresse est ${frenchAddress}.`,
          `Finalité du traitement : ${copy.purpose}.`,
        ],
      },
      {
        id: "data",
        title: "2. Données concernées",
        paragraphs: [
          `Le responsable du traitement est autorisé à traiter les données suivantes : ${copy.data}.`,
        ],
      },
      {
        id: "actions",
        title: "3. Opérations et modalités de traitement",
        paragraphs: [
          "Le consentement couvre la collecte, l’enregistrement, l’organisation, l’accumulation, la conservation, la rectification, l’extraction, l’utilisation, l’octroi d’un accès aux personnes autorisées, le verrouillage, l’effacement et la destruction des données.",
          "Le traitement peut être automatisé ou effectué sans moyens d’automatisation.",
        ],
      },
      {
        id: "term",
        title: "4. Durée de validité",
        paragraphs: [
          "Le consentement reste valable pendant 7 jours calendaires à compter de l’envoi du formulaire ou jusqu’à son retrait, si celui-ci intervient plus tôt.",
          "À l’expiration de cette durée, les données sont effacées ou détruites, sauf si la loi impose de les conserver plus longtemps.",
        ],
      },
      {
        id: "withdrawal",
        title: "5. Retrait du consentement",
        paragraphs: [
          `Le consentement peut être retiré par e-mail à ${operator.email}. Le message doit indiquer le nom de son auteur, ses coordonnées et sa demande de cessation du traitement.`,
          "Le retrait du consentement n’affecte pas la licéité du traitement effectué avant sa réception par le responsable du traitement.",
        ],
      },
      {
        id: "limits",
        title: "6. Limites",
        paragraphs: [
          "Le présent consentement ne couvre ni les communications publicitaires, ni le traitement de données biométriques, ni les transferts transfrontaliers.",
          "Le responsable du traitement ne prend aucune décision produisant des effets juridiques sur le seul fondement d’un traitement automatisé.",
        ],
      },
    ],
  };
}
