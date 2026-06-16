import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType,
  convertInchesToTwip,
  PageOrientation,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  LevelFormat,
  UnderlineType,
} from "docx";
import { writeFileSync } from "fs";

// ─── Helpers ────────────────────────────────────────────────────────────────

const PRIMARY = "1E3A5F";
const ACCENT = "C0392B";
const LIGHT_BG = "EEF2F7";
const TABLE_HEADER_BG = "1E3A5F";
const TABLE_ROW_ALT = "F4F6FA";
const WHITE = "FFFFFF";

function heading1(text: string): Paragraph {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 6 },
    },
    run: { color: PRIMARY, bold: true, size: 28 },
  });
}

function heading2(text: string): Paragraph {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 120 },
    run: { color: PRIMARY, bold: true, size: 24 },
  });
}

function heading3(text: string): Paragraph {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    run: { color: ACCENT, bold: true, size: 22 },
  });
}

function para(text: string, options: { bold?: boolean; italic?: boolean; spacing?: number } = {}): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: options.bold,
        italics: options.italic,
        size: 22,
        color: "2C2C2C",
      }),
    ],
    spacing: { before: options.spacing ?? 80, after: options.spacing ?? 80 },
  });
}

function bullet(text: string, level = 0): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, size: 22, color: "2C2C2C" })],
    bullet: { level },
    spacing: { before: 60, after: 60 },
    indent: { left: convertInchesToTwip(0.25 + level * 0.25) },
  });
}

function spacer(lines = 1): Paragraph {
  return new Paragraph({ text: "", spacing: { before: lines * 100, after: 0 } });
}

function tableHeaderCell(text: string, width?: number): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: true, color: WHITE, size: 20 })],
        alignment: AlignmentType.LEFT,
        spacing: { before: 80, after: 80 },
      }),
    ],
    shading: { fill: TABLE_HEADER_BG, type: ShadingType.CLEAR, color: TABLE_HEADER_BG },
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    margins: { left: 100, right: 100, top: 60, bottom: 60 },
  });
}

function tableCell(text: string, alt = false, bold = false): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text, size: 20, color: "2C2C2C", bold })],
        spacing: { before: 60, after: 60 },
      }),
    ],
    shading: alt ? { fill: TABLE_ROW_ALT, type: ShadingType.CLEAR, color: TABLE_ROW_ALT } : undefined,
    margins: { left: 100, right: 100, top: 60, bottom: 60 },
  });
}

// ─── Document ────────────────────────────────────────────────────────────────

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "–",
            alignment: AlignmentType.LEFT,
          },
          {
            level: 1,
            format: LevelFormat.BULLET,
            text: "◦",
            alignment: AlignmentType.LEFT,
          },
        ],
      },
    ],
  },
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 22, color: "2C2C2C" },
        paragraph: { spacing: { line: 276 } },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        run: { font: "Calibri", size: 28, bold: true, color: PRIMARY },
        paragraph: { spacing: { before: 400, after: 200 } },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        run: { font: "Calibri", size: 24, bold: true, color: PRIMARY },
        paragraph: { spacing: { before: 300, after: 120 } },
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        run: { font: "Calibri", size: 22, bold: true, color: ACCENT },
        paragraph: { spacing: { before: 200, after: 80 } },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1.2),
            right: convertInchesToTwip(1.2),
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "CAHIER DES CHARGES — Site Internet", bold: true, color: PRIMARY, size: 18 }),
                new TextRun({ text: "\tDémarches France", color: "888888", size: 18 }),
              ],
              tabStops: [{ type: "right" as any, position: convertInchesToTwip(6) }],
              border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Page ", size: 18, color: "888888" }),
                new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "888888" }),
                new TextRun({ text: " / ", size: 18, color: "888888" }),
                new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, color: "888888" }),
                new TextRun({ text: "\tVersion 1.1 — Juin 2026 — Confidentiel", size: 18, color: "888888" }),
              ],
              tabStops: [{ type: "right" as any, position: convertInchesToTwip(6) }],
              border: { top: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
            }),
          ],
        }),
      },
      children: [

        // ── PAGE DE GARDE ──────────────────────────────────────────────────
        new Paragraph({
          children: [new TextRun({ text: "CAHIER DES CHARGES", bold: true, size: 56, color: PRIMARY, font: "Calibri" })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 1200, after: 200 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "Site Internet – Accompagnement administratif", size: 28, color: "555555", font: "Calibri" })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 800 },
        }),

        // Tableau de garde
        new Table({
          width: { size: 60, type: WidthType.PERCENTAGE },
          columnWidths: [3000, 4500],
          rows: [
            new TableRow({ children: [tableHeaderCell("Nature du document", 40), tableCell("Cahier des charges fonctionnel")] }),
            new TableRow({ children: [tableHeaderCell("Type de projet", 40), tableCell("Création de site vitrine", true)] }),
            new TableRow({ children: [tableHeaderCell("Client", 40), tableCell("Madame TRAN")] }),
            new TableRow({ children: [tableHeaderCell("Date de rédaction", 40), tableCell("Juin 2026", true)] }),
            new TableRow({ children: [tableHeaderCell("Version", 40), tableCell("1.1")] }),
            new TableRow({ children: [tableHeaderCell("Statut", 40), tableCell("Confidentiel", true)] }),
          ],
        }),

        spacer(8),

        // ── 1. PRÉSENTATION ───────────────────────────────────────────────
        heading1("1. Présentation du projet"),
        para(
          "Ce projet consiste en la création d'un site internet vitrine destiné à présenter une activité " +
          "d'accompagnement administratif auprès des particuliers et des personnes étrangères dans leurs " +
          "démarches administratives en France."
        ),
        para(
          "Le site devra refléter le sérieux, la proximité et le professionnalisme de la structure, tout en " +
          "facilitant la prise de contact et la prise de rendez-vous pour les usagers."
        ),

        spacer(),

        // ── 2. OBJECTIFS ──────────────────────────────────────────────────
        heading1("2. Objectifs du site"),
        para("Le site devra permettre :"),
        bullet("La présentation de l'activité et des prestations proposées ;"),
        bullet("La mise en avant des domaines d'accompagnement administratif ;"),
        bullet("La prise de contact simple et rapide ;"),
        bullet("La prise de rendez-vous en ligne ;"),
        bullet("La gestion d'un calendrier partagé ;"),
        bullet("La diffusion d'informations utiles aux usagers ;"),
        bullet("L'accès à des formulaires de demande de renseignements ;"),
        bullet("Le respect des obligations légales en matière de protection des données et d'accessibilité."),

        spacer(),

        // ── 3. ARBORESCENCE ───────────────────────────────────────────────
        heading1("3. Arborescence du site"),

        heading2("3.1 – Accueil"),
        bullet("Présentation synthétique de l'activité et de la valeur ajoutée."),
        bullet("Mise en avant visuelle des services proposés."),
        bullet("Appels à l'action clairs : « Nous contacter » / « Prendre rendez-vous »."),
        bullet("Statistiques clés (expérience, dossiers traités, agences)."),

        heading2("3.2 – Nos services"),
        para("Cette page détaillera l'ensemble des prestations :"),
        bullet("Titre de séjour"),
        bullet("Renouvellement de titre de séjour"),
        bullet("Autorisation de travail"),
        bullet("Naturalisation"),
        bullet("Regroupement familial"),
        bullet("Autres démarches administratives"),

        heading2("3.3 – À propos"),
        bullet("Présentation de l'entreprise, de son histoire et de sa mission."),
        bullet("Valeurs, engagement et expertise mises en avant."),

        heading2("3.4 – Contact"),
        bullet("Formulaire de contact en ligne (nom, prénom, e-mail, objet, message)."),
        bullet("Coordonnées complètes (adresse, téléphone, e-mail)."),
        bullet("Carte Google Maps intégrée pour la localisation."),

        heading2("3.5 – Pages légales"),
        bullet("Mentions légales (obligatoire)."),
        bullet("Politique de confidentialité (obligatoire RGPD)."),

        spacer(),

        // ── 4. FONCTIONNALITÉS ────────────────────────────────────────────
        heading1("4. Fonctionnalités requises"),

        heading2("4.1 – Fonctionnalités générales"),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          columnWidths: [3000, 6000],
          rows: [
            new TableRow({ children: [tableHeaderCell("Fonctionnalité", 33), tableHeaderCell("Détail", 67)] }),
            new TableRow({ children: [tableCell("Design responsive", false, true), tableCell("Compatible ordinateur, tablette et smartphone", false)] }),
            new TableRow({ children: [tableCell("Formulaire de contact", true, true), tableCell("Avec validation côté client et notification par e-mail", true)] }),
            new TableRow({ children: [tableCell("Optimisation SEO", false, true), tableCell("Balises méta, titres, canonical, sitemap XML, mots-clés", false)] }),
            new TableRow({ children: [tableCell("Sécurisation HTTPS", true, true), tableCell("Certificat SSL obligatoire", true)] }),
            new TableRow({ children: [tableCell("Carte interactive", false, true), tableCell("Intégration Google Maps pour chaque agence", false)] }),
            new TableRow({ children: [tableCell("Bouton WhatsApp", true, true), tableCell("Bouton flottant configurable (numéro + message)", true)] }),
            new TableRow({ children: [tableCell("Prise de rendez-vous", false, true), tableCell("Bouton dédié + intégration calendrier (cf. §4.2)", false)] }),
          ],
        }),

        spacer(),
        heading2("4.2 – Gestion des rendez-vous"),
        para("Le site devra intégrer une solution de gestion des rendez-vous permettant :"),

        heading3("Côté usager (public)"),
        bullet("La consultation des disponibilités ;"),
        bullet("La réservation en ligne ;"),
        bullet("La modification ou l'annulation du rendez-vous ;"),
        bullet("La réception automatique d'une confirmation par e-mail ;"),
        bullet("La réception de rappels automatiques avant le rendez-vous."),

        heading3("Côté interne (administration)"),
        bullet("Un accès sécurisé par identifiant/mot de passe ;"),
        bullet("Un calendrier partagé entre les collaborateurs ;"),
        bullet("La possibilité d'ajouter, modifier ou supprimer des créneaux ;"),
        bullet("Une synchronisation avec Google Calendar et Outlook ;"),
        bullet("Une gestion des droits utilisateurs (admin / consultant)."),

        spacer(),
        heading2("4.3 – Administration du site"),
        para("Le site devra disposer d'un espace d'administration permettant :"),
        bullet("La modification des contenus textes et images ;"),
        bullet("La publication d'actualités ;"),
        bullet("La gestion des demandes de contact reçues ;"),
        bullet("La gestion des rendez-vous ;"),
        bullet("La gestion des utilisateurs internes."),
        spacer(),
        para("Une formation à l'utilisation du site devra être incluse lors de la livraison.", { italic: true }),

        spacer(),

        // ── 5. EXIGENCES TECHNIQUES ───────────────────────────────────────
        heading1("5. Exigences techniques"),

        heading2("5.1 – Responsive Design"),
        para("Le site devra être entièrement compatible avec :"),
        bullet("Les ordinateurs (résolutions ≥ 1280px) ;"),
        bullet("Les tablettes (768px – 1279px) ;"),
        bullet("Les smartphones (< 768px)."),

        heading2("5.2 – Performance"),
        para("Le prestataire devra garantir :"),
        bullet("Un temps de chargement optimisé (objectif : score Lighthouse ≥ 90) ;"),
        bullet("Une compatibilité avec les navigateurs récents (Chrome, Firefox, Safari, Edge) ;"),
        bullet("Un hébergement sécurisé avec certificat SSL ;"),
        bullet("Des sauvegardes automatiques régulières."),

        heading2("5.3 – Référencement naturel (SEO)"),
        para("Le site devra être optimisé pour le référencement naturel :"),
        bullet("Structure sémantique des pages (balises H1–H3, liens canoniques) ;"),
        bullet("Balises méta (title, description, Open Graph, Twitter Card) ;"),
        bullet("Sitemap XML généré automatiquement ;"),
        bullet("Fichier robots.txt ;"),
        bullet("Optimisation des images (attribut alt, compression, lazy loading)."),

        spacer(),

        // ── 6. CONFORMITÉ RÉGLEMENTAIRE ───────────────────────────────────
        heading1("6. Conformité réglementaire"),

        heading2("6.1 – RGPD"),
        para(
          "Le site devra être entièrement conforme au Règlement Général sur la Protection des Données (RGPD), notamment :"
        ),
        bullet("Recueil du consentement des utilisateurs (formulaires, cookies) ;"),
        bullet("Politique de cookies avec bannière de consentement ;"),
        bullet("Information claire des personnes concernées (finalités, durée de conservation) ;"),
        bullet("Sécurisation des données collectées ;"),
        bullet("Conservation limitée des données ;"),
        bullet("Possibilité d'exercer les droits d'accès, rectification et suppression."),
        spacer(),
        para(
          "Les pages Mentions légales et Politique de confidentialité sont obligatoires et devront être " +
          "accessibles depuis toutes les pages du site (pied de page).",
          { italic: true }
        ),

        heading2("6.2 – Accessibilité"),
        para(
          "Le site devra tendre vers la conformité au Référentiel Général d'Amélioration de l'Accessibilité " +
          "(RGAA) dans sa version en vigueur. La mise en conformité complète sera traitée dans un second temps."
        ),

        heading2("6.3 – Sécurité"),
        para("Le prestataire devra mettre en œuvre :"),
        bullet("Certificat SSL (HTTPS) ;"),
        bullet("Protection contre les attaques courantes (injections, XSS, CSRF) ;"),
        bullet("Sauvegardes automatiques et procédure de restauration documentée ;"),
        bullet("Mises à jour de sécurité régulières ;"),
        bullet("Gestion sécurisée des accès administrateurs (authentification forte)."),

        spacer(),

        // ── 7. LIVRABLES ──────────────────────────────────────────────────
        heading1("7. Livrables attendus"),
        para("Le prestataire devra fournir :"),
        bullet("Le site internet opérationnel mis en ligne ;"),
        bullet("L'ensemble des codes sources ;"),
        bullet("La documentation technique (architecture, dépendances, déploiement) ;"),
        bullet("La documentation utilisateur (guide administrateur) ;"),
        bullet("Les accès administrateurs (hébergement, domaine, CMS, e-mail) ;"),
        bullet("Les procédures de sauvegarde et de restauration ;"),
        bullet("Une session de formation à l'utilisation du site."),

        spacer(),

        // ── 8. PLANNING ───────────────────────────────────────────────────
        heading1("8. Délais et planning prévisionnel"),
        para("Le prestataire devra proposer un calendrier détaillé. À titre indicatif :"),
        spacer(),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          columnWidths: [1500, 5000, 2500],
          rows: [
            new TableRow({ children: [tableHeaderCell("Phase", 17), tableHeaderCell("Description", 55), tableHeaderCell("Délai estimé", 28)] }),
            new TableRow({ children: [tableCell("Phase 1", false, true), tableCell("Réunion de lancement et validation du CDC", false), tableCell("J+X après notification", false)] }),
            new TableRow({ children: [tableCell("Phase 2", true, true), tableCell("Maquettage (wireframes + charte graphique)", true), tableCell("À définir", true)] }),
            new TableRow({ children: [tableCell("Phase 3", false, true), tableCell("Développement et intégration du contenu", false), tableCell("À définir", false)] }),
            new TableRow({ children: [tableCell("Phase 4", true, true), tableCell("Livraison en préproduction", true), tableCell("À définir", true)] }),
            new TableRow({ children: [tableCell("Phase 5", false, true), tableCell("Phase de recette et corrections", false), tableCell("x jours ouvrés", false)] }),
            new TableRow({ children: [tableCell("Phase 6", true, true), tableCell("Mise en production", true), tableCell("J+x maximum", true)] }),
            new TableRow({ children: [tableCell("Phase 7", false, true), tableCell("Formation des utilisateurs", false), tableCell("Dans les x jours suivant la mise en production", false)] }),
          ],
        }),
        spacer(),
        para("Toute modification de planning devra être validée par le maître d'ouvrage.", { italic: true }),

        spacer(),

        // ── 9. RECETTE ────────────────────────────────────────────────────
        heading1("9. Recette"),
        para(
          "Une phase de recette sera organisée avant la mise en production. Le prestataire devra :"
        ),
        bullet("Fournir un environnement de préproduction ;"),
        bullet("Corriger les anomalies identifiées dans les délais convenus ;"),
        bullet("Obtenir la validation écrite du maître d'ouvrage avant mise en production."),

        spacer(),

        // ── 10. MAINTENANCE ───────────────────────────────────────────────
        heading1("10. Maintenance et support"),

        heading2("10.1 – Maintenance corrective et évolutive"),
        para(
          "Le prestataire devra assurer la maintenance du site sous la forme d'un contrat mensuel comprenant :"
        ),
        bullet("Mises à jour de sécurité ;"),
        bullet("Corrections d'anomalies ;"),
        bullet("Surveillance du bon fonctionnement ;"),
        bullet("Sauvegardes régulières ;"),
        bullet("Assistance technique."),

        heading2("10.2 – Engagements de service (SLA)"),
        para("Le prestataire s'engage à :"),
        bullet("Accuser réception de toute demande sous (à définir avec Mme TRAN) heures ouvrées ;"),
        bullet("Prendre en charge les incidents sous (à définir avec Mme TRAN) jour ouvré ;"),
        bullet("Informer régulièrement le client de l'avancement des corrections."),

        spacer(),

        // ── 11. PROPRIÉTÉ INTELLECTUELLE ──────────────────────────────────
        heading1("11. Propriété intellectuelle"),
        para(
          "À la réception définitive du projet et au règlement complet des prestations, l'ensemble des droits " +
          "relatifs au site internet, aux développements spécifiques et aux contenus réalisés dans le cadre du " +
          "marché sera cédé au maître d'ouvrage."
        ),
        para(
          "Le client disposera de l'intégralité des accès, codes sources et éléments nécessaires à l'exploitation du site."
        ),

        spacer(2),
        new Paragraph({
          children: [
            new TextRun({
              text: "Document établi en Juin 2026 — Version 1.1",
              size: 18,
              color: "888888",
              italics: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { before: 400 },
        }),
      ],
    },
  ],
});

// ─── Export ──────────────────────────────────────────────────────────────────

const buffer = await Packer.toBuffer(doc);
writeFileSync("C.docx", buffer);
console.log("✅ C.docx généré avec succès.");
