/**
 * ============================================================
 * CONFIGURATION CENTRALE DU SITE — Accueil Formalités
 * ============================================================
 * Modifiez ce fichier pour mettre à jour :
 *   - les coordonnées (téléphone, e-mail, adresse)
 *   - le numéro WhatsApp
 *   - les services proposés
 *   - les métadonnées SEO
 * ============================================================
 */

export const images = {
  logo: "/images/logo2.png",
  hero: "/images/3.jpg",
  about: "/images/1.jpg",
  services: {
    titreSejour: "/images/2.jpg",
    renouvellement: "/images/service-renouvellement.jpg",
    travail: "/images/service-travail.jpg",
    naturalisation: "/images/passport.png",
    famille: "/images/service-famille.jpg",
    accompagnement: "/images/service-accompagnement.jpg",
  },
};

export const company = {
  name: "Accueil Formalités",
  /** Nom du ou des consultants — affiché dans le header et le footer */
  consultant: "Jelly Tran",
  slogan: "Faire de vos démarches un succès",
  tagline: "Cabinet spécialisé dans l'accompagnement administratif des étrangers en France.",
  /** Texte court pour la description du cabinet (À propos, footer) */
  description: "Notre équipe accompagne les particuliers et les familles dans la régularisation et le suivi de leur situation administrative en France.",
};

export const contact = {
  phone: "+33671661201",
  phoneDisplay: "06 71 66 12 01",
  email: "contact@accueilformalites.fr",
  /** Numéro WhatsApp au format international, sans + ni espaces */
  whatsapp: "33671661201",
  whatsappMessage: "Bonjour, je souhaite des informations sur vos services.",
};

export const agencies = [
  {
    city: "Paris",
    address: "91 rue du Faubourg Saint-Denis, 75010 Paris",
    mapsQuery: "91+rue+du+Faubourg+Saint-Denis,+75010+Paris",
  },
];

export const services = [
  {
    slug: "titre-de-sejour",
    title: "Titre de séjour",
    summary:
      "Constitution complète et suivi de votre demande de titre de séjour, de la prise de rendez-vous en préfecture à la remise du titre.",
    image: images.services.titreSejour,
  },
  {
    slug: "renouvellement",
    title: "Renouvellement de titre de séjour",
    summary:
      "Anticipation des délais, vérification des pièces et accompagnement jusqu'au renouvellement de votre titre.",
    image: images.services.renouvellement,
  },
  {
    slug: "autorisation-de-travail",
    title: "Autorisation de travail",
    summary:
      "Montage du dossier employeur et démarches auprès de la DREETS pour l'obtention de votre autorisation de travail.",
    image: images.services.travail,
  },
  {
    slug: "naturalisation",
    title: "Naturalisation",
    summary:
      "Évaluation de votre éligibilité, préparation des justificatifs et accompagnement jusqu'au décret de naturalisation.",
    image: images.services.naturalisation,
  },
  {
    slug: "regroupement-familial",
    title: "Regroupement familial",
    summary:
      "Procédure complète de regroupement familial : conditions, dépôt OFII et suivi du dossier jusqu'à l'arrivée des proches.",
    image: images.services.famille,
  },
  {
    slug: "accompagnement",
    title: "Accompagnement personnalisé",
    summary:
      "Conseil sur-mesure, rédaction de courriers, recours gracieux et hiérarchiques, suivi de vos démarches au quotidien.",
    image: images.services.accompagnement,
  },
] as const;

export const values = [
  {
    title: "Accompagnement",
    description: "Un interlocuteur dédié à chaque étape, de l'analyse du dossier à la décision finale.",
  },
  {
    title: "Transparence",
    description: "Honoraires clairs, échéances communiquées et reporting régulier sur l'avancement.",
  },
  {
    title: "Réactivité",
    description: "Réponse à vos questions sous 24h ouvrées et anticipation des délais administratifs.",
  },
  {
    title: "Confidentialité",
    description: "Vos documents et informations personnelles sont traités avec la plus stricte discrétion.",
  },
];

export const stats = [
  { label: "Expérience", value: "+10 ans" },
  { label: "Dossiers traités", value: "+2 500" },
  { label: "Satisfaction", value: "98%" },
];

/** URL de production — mettre à jour avant déploiement */
export const siteUrl = "https://www.accueilformalites.fr";

export const seo = {
  defaultTitle: `${company.name} — Jelly Tran, Consultante en démarches administratives`,
  defaultDescription:
    "Accueil Formalités, cabinet de Jelly Tran, consultante spécialisée en accompagnement administratif : titre de séjour, naturalisation, autorisation de travail, regroupement familial. Paris 10e.",
};

/** Langues disponibles */
export const locales = ["fr", "en", "es", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  ar: "العربية",
};
