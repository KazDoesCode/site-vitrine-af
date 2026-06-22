# Documentation — Accueil Formalités

Site vitrine professionnel pour un cabinet d'accompagnement administratif des étrangers en France.

**Stack : Astro 4 + React 18 (formulaire uniquement) + Tailwind CSS 3 + TypeScript**

---

## Table des matières

1. [Démarrage rapide](#1-démarrage-rapide)
2. [Structure du projet](#2-structure-du-projet)
3. [Configuration centrale](#3-configuration-centrale)
4. [Pages](#4-pages)
5. [Composants](#5-composants)
6. [Internationalisation (i18n)](#6-internationalisation-i18n)
7. [Design system](#7-design-system)
8. [SEO](#8-seo)
9. [Formulaire de contact](#9-formulaire-de-contact)
10. [Déploiement](#10-déploiement)
11. [Évolutions futures](#11-évolutions-futures)

---

## 1. Démarrage rapide

```bash
bun install
bun dev
# → http://localhost:4321
```

```bash
bun run build    # génère le site statique dans dist/
bun run preview  # prévisualise le build
```

> **Important** : Ce projet utilise **Bun** exclusivement. N'utilisez pas npm ou yarn.

---

## 2. Structure du projet

```
public/
  images/                    Images et logo (remplaçables sans toucher au code)
    logo2.png                Logo actuel du site
    3.jpg                    Image principale (section hero)
    1.jpg                    Image de la section À propos
    2.jpg                    Image service "Titre de séjour"
    service-renouvellement.jpg
    service-travail.jpg
    service-famille.jpg
    service-accompagnement.jpg
    passport.png             Image service "Naturalisation"
  fonts/                     Police Marianne auto-hébergée (woff2)
    Marianne-Light.woff2
    Marianne-Regular.woff2
    Marianne-Medium.woff2
    Marianne-Bold.woff2
  robots.txt                 Indexation autorisée

src/
  config/
    site.ts                  ⭐ Configuration centrale — tout le contenu éditorial
    i18n.ts                  ⭐ Traductions 4 langues + fonctions utilitaires

  layouts/
    BaseLayout.astro         Layout global : <html>, <head>, Header, Footer, WhatsApp

  components/
    Header.astro             Navigation + menu mobile + sélecteur de langue
    Footer.astro             Pied de page + liens légaux
    WhatsAppButton.astro     Bouton flottant WhatsApp avec texte visible
    ContactForm.tsx          Formulaire de contact (seul composant React)

  pages/
    index.astro              Accueil FR          →  /
    services.astro           Services FR         →  /services
    a-propos.astro           À propos FR         →  /a-propos
    contact.astro            Contact FR          →  /contact
    rendez-vous.astro        Rendez-vous FR      →  /rendez-vous
    mentions-legales.astro   Mentions légales FR →  /mentions-legales
    politique-de-confidentialite.astro  RGPD FR  →  /politique-de-confidentialite
    politique-de-cookies.astro          Cookies  →  /politique-de-cookies

    en/
      index.astro / services.astro / a-propos.astro / contact.astro
      appointment.astro / mentions-legales.astro
      politique-de-confidentialite.astro / politique-de-cookies.astro

    es/
      index.astro / services.astro / a-propos.astro / contact.astro
      cita.astro / mentions-legales.astro
      politique-de-confidentialite.astro / politique-de-cookies.astro

    ar/
      index.astro / services.astro / a-propos.astro / contact.astro
      maweid.astro / mentions-legales.astro
      politique-de-confidentialite.astro / politique-de-cookies.astro

  styles/
    global.css               Tailwind + utilitaires (.tricolor-bar, .btn-primary, .btn-secondary, .card-service)

astro.config.ts              Config Astro (react, tailwind, URL du site)
tailwind.config.ts           Couleurs et polices personnalisées
tsconfig.json                TypeScript strict + alias @/
```

---

## 3. Configuration centrale

**Tout le contenu éditorial est dans `src/config/site.ts`.** Aucune modification de composant n'est nécessaire pour faire vivre le site.

### Ce qu'on peut changer dans `site.ts`

| Export | Contenu |
|---|---|
| `images` | Chemins logo, hero, about, 6 images de services |
| `company` | Nom, consultant, slogan, tagline, description |
| `contact` | Téléphone, email, numéro WhatsApp, message par défaut |
| `agencies` | Tableau d'agences (ville, adresse, coordonnées Maps) |
| `services` | Tableau des services (slug, titre, résumé, image) |
| `values` | Tableau des 4 valeurs du cabinet |
| `stats` | Chiffres clés affichés dans le hero |
| `googleCalendarAppointmentUrl` | URL de la page de réservation Google Calendar |
| `siteUrl` | URL de production — **à mettre à jour avant déploiement** |
| `seo` | Titre et description par défaut |

### Exemples de modifications courantes

**Changer le téléphone :**
```ts
export const contact = {
  phone: "+33600000000",
  phoneDisplay: "06 00 00 00 00",
  whatsapp: "33600000000",
};
```

**Ajouter une agence :**
```ts
export const agencies = [
  { city: "Paris", address: "91 rue du Faubourg Saint-Denis, 75010 Paris", mapsQuery: "91+rue+du+Faubourg+Saint-Denis,+75010+Paris" },
  { city: "Lyon", address: "10 rue de la République, 69001 Lyon", mapsQuery: "10+rue+de+la+République,+69001+Lyon" },
];
```

**Ajouter un service :**
```ts
export const services = [
  // ...
  {
    slug: "visa-long-sejour",
    title: "Visa long séjour",
    summary: "...",
    image: "/images/service-visa.jpg",
  },
];
```
Déposer ensuite l'image dans `public/images/` et ajouter le titre/résumé traduit dans chaque locale de `i18n.ts` → `servicesPage.servicesList`.

---

## 4. Pages

### FR (locale par défaut, sans préfixe d'URL)

| Page | Fichier | URL |
|---|---|---|
| Accueil | `src/pages/index.astro` | `/` |
| Services | `src/pages/services.astro` | `/services` |
| À propos | `src/pages/a-propos.astro` | `/a-propos` |
| Contact | `src/pages/contact.astro` | `/contact` |
| Rendez-vous | `src/pages/rendez-vous.astro` | `/rendez-vous` |
| Mentions légales | `src/pages/mentions-legales.astro` | `/mentions-legales` |
| Politique de confidentialité | `src/pages/politique-de-confidentialite.astro` | `/politique-de-confidentialite` |
| Politique de cookies | `src/pages/politique-de-cookies.astro` | `/politique-de-cookies` |

### EN / ES / AR (sous-dossier `/en/`, `/es/`, `/ar/`)

Chaque locale dispose des 8 pages équivalentes. La page rendez-vous a un slug localisé :

| Locale | Slug rendez-vous |
|---|---|
| `fr` | `/rendez-vous` |
| `en` | `/en/appointment` |
| `es` | `/es/cita` |
| `ar` | `/ar/maweid` |

---

## 5. Composants

### `Header.astro`
Navigation sticky avec lien actif automatique. Menu hamburger mobile géré par un `<script>` vanilla. Sélecteur de langue intégré (desktop = dropdown au survol, mobile = boutons). Le lien rendez-vous est géré via un dictionnaire `appointmentSlug` dans le composant pour pointer vers le bon slug selon la locale.

### `Footer.astro`
4 colonnes : identité · navigation · contact/agences. Liens vers `/mentions-legales`, `/politique-de-confidentialite` et `/politique-de-cookies`. Affiche le slogan du cabinet.

### `WhatsAppButton.astro`
Bouton fixe bas-droite avec icône WhatsApp + texte "WhatsApp" visible. Numéro et message configurables dans `contact.whatsapp` et `contact.whatsappMessage` dans `site.ts`. Le message d'accueil s'adapte à la langue (clé `tr.whatsapp` dans `i18n.ts`).

### `ContactForm.tsx`
Seul composant React du site — nécessaire pour l'état interactif (validation Zod, envoi, retours visuels). Utilisé avec la directive `client:load` dans les pages `contact.astro`. Inclut un sélecteur d'indicatif téléphonique (+33 pays). **Simule actuellement l'envoi** (TODO à remplacer par un vrai appel API).

---

## 6. Internationalisation (i18n)

### Langues disponibles

| Locale | Langue | URL | Direction |
|---|---|---|---|
| `fr` | Français | `/` (racine) | LTR |
| `en` | English | `/en/` | LTR |
| `es` | Español | `/es/` | LTR |
| `ar` | العربية | `/ar/` | RTL (automatique) |

### Architecture

Toutes les traductions sont centralisées dans `src/config/i18n.ts` :

```ts
// Lire les traductions d'une locale
import { t } from "@/config/i18n";
const tr = t("fr"); // objet avec toutes les chaînes traduites

// Générer un chemin avec préfixe de locale
import { localePath } from "@/config/i18n";
localePath("en", "/contact") // → "/en/contact"
localePath("fr", "/contact") // → "/contact"

// Détecter si une locale est RTL
import { isRTL } from "@/config/i18n";
isRTL("ar") // → true
```

### Règle absolue

**Aucune chaîne de texte visible par l'utilisateur ne doit être écrite en dur dans un composant ou une page.** Tout passe par `tr.<section>.<clé>` depuis `i18n.ts`.

### Modifier une traduction

Ouvrir `src/config/i18n.ts`, trouver la section de la locale concernée et modifier la valeur de la clé souhaitée.

### Ajouter une langue

1. Ajouter la locale dans `src/config/site.ts` → `locales` et `localeLabels`
2. Ajouter un bloc de traductions dans `src/config/i18n.ts` → `translations`
3. Créer le sous-dossier `src/pages/xx/` avec les 8 pages
4. Ajouter le slug rendez-vous dans `appointmentSlug` de `Header.astro`

### Gestion du RTL

La direction est appliquée automatiquement : `BaseLayout.astro` lit `isRTL(locale)` et pose `dir="rtl"` sur `<html>`. Tailwind 3 supporte les variantes `rtl:` pour les ajustements spécifiques (ex. `rtl:rotate-180` sur les flèches SVG).

---

## 7. Design system

### Couleurs (`tailwind.config.ts`)

| Token Tailwind | Couleur | Usage |
|---|---|---|
| `primary` | Bleu institutionnel `#1e3a5f` | Titres, nav, header/footer |
| `primary-dark` | Bleu foncé `#152c4a` | Hover sur primary |
| `accent` | Rouge République `#c0392b` | Boutons CTA, éléments forts |
| `accent-dark` | Rouge foncé `#a93226` | Hover sur accent |
| `secondary` | Bleu très clair `#f4f6fa` | Fonds de sections alternées |

### Typographie

La police **Marianne** (Système de Design de l'État français) est auto-hébergée dans `public/fonts/` et chargée via `@font-face` dans `src/styles/global.css`. Elle est utilisée pour tous les textes, avec `font-serif` (défini dans `tailwind.config.ts`) pour les titres.

| Graisse | Fichier |
|---|---|
| Light (300) | `Marianne-Light.woff2` |
| Regular (400) | `Marianne-Regular.woff2` |
| Medium (500) | `Marianne-Medium.woff2` |
| Bold (700) | `Marianne-Bold.woff2` |

Les graisses Regular, Medium et Bold sont préchargées (`<link rel="preload">`) dans `BaseLayout.astro` pour éviter le FOUT.

### Classes utilitaires (`src/styles/global.css`)

| Classe | Usage |
|---|---|
| `.tricolor-bar` | Bande décorative 3px bleu/blanc/rouge (header, footer, hero) |
| `.btn-primary` | Bouton rouge CTA avec hover, shadow et focus RGAA |
| `.btn-secondary` | Bouton contour bleu avec hover inversé |
| `.card-service` | Carte service avec shadow et hover élévation |

---

## 8. SEO

Toutes les métadonnées sont gérées dans `src/layouts/BaseLayout.astro` :

- `<html lang>` et `dir` corrects selon la locale
- `<title>`, meta description, canonical par page
- Balises `hreflang` pour les 4 locales (SEO multilingue)
- Open Graph complet (og:title, og:description, og:image, og:url, og:locale)
- Twitter Card `summary_large_image`
- Favicon logo PNG

**Personnalisation par page** : passer `title`, `description`, `ogImage` en props du layout :
```astro
<BaseLayout
  title="Tarifs — Accueil Formalités"
  description="Nos honoraires transparents..."
  locale="fr"
>
```

**Avant mise en production**, vérifier la cohérence de l'URL à 3 endroits :
- `siteUrl` dans `src/config/site.ts`
- `site` dans `astro.config.ts`
- URL dans `public/robots.txt`

> Note : `@astrojs/sitemap` a été retiré en raison d'un bug de compatibilité avec cette version d'Astro. Le sitemap peut être généré manuellement ou avec une autre solution.

---

## 9. Formulaire de contact

Le formulaire (`src/components/ContactForm.tsx`) valide les données avec **Zod** côté client. Il affiche les erreurs par champ, un sélecteur d'indicatif téléphonique et un retour visuel d'envoi.

**Il simule actuellement un succès** (`await new Promise(r => setTimeout(r, 800))`) — brancher à un vrai service avant mise en production.

### Brancher Resend (recommandé)

1. Passer `output: "hybrid"` dans `astro.config.ts`
2. Créer `src/pages/api/contact.ts` :

```ts
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  await resend.emails.send({
    from: "site@accueilformalites.fr",
    to: "contact@accueilformalites.fr",
    subject: `[Contact] ${body.subject}`,
    text: `De : ${body.name} <${body.email}>\n\n${body.message}`,
  });
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
```

3. Dans `ContactForm.tsx`, remplacer la simulation par un vrai `fetch("/api/contact", { method: "POST", ... })`
4. Ajouter la variable `RESEND_API_KEY` sur votre hébergeur

---

## 10. Accessibilité (RGAA)

Le site est conçu pour être **partiellement conforme au RGAA 4.1** et à **WCAG 2.1 niveau AA**.

| Critère RGAA | Mesure technique |
|---|---|
| **1.1** Images avec alternative textuelle | `alt` descriptif sur toutes les images |
| **1.2** Images décoratives | `aria-hidden="true"` sur les SVG décoratifs |
| **3.3** Contraste des couleurs | Ratio ≥ 4.5:1 pour le texte (`#1e3a5f` sur blanc) |
| **6.1** Liens avec intitulé pertinent | Libellés descriptifs, `aria-label` sur icônes sans texte |
| **7.1** Scripts accessibles | Menu mobile avec `aria-expanded`, `aria-controls` |
| **8.1** `lang` correct | `lang` et `dir` définis sur `<html>` selon la locale |
| **8.5** Titre de page unique | `<title>` distinct et descriptif par page |
| **9.1** Structure de page | `<header>`, `<main id="contenu-principal">`, `<footer role="contentinfo">` |
| **9.2** Lien d'évitement | Lien "Aller au contenu principal" visible au focus clavier |
| **12.1** Liens de navigation | `<nav aria-label>` distincts (navigation principale, mobile, footer) |
| **10.7** Focus visible | `:focus-visible` avec contour 3px `#1e3a5f` sur tous les éléments interactifs |

---

## 11. Déploiement

Le site génère du **HTML statique** (`output: "static"`). Déployable partout sans serveur.

### Netlify / Vercel (recommandé)
```bash
bun run build   # génère dist/
# pointer le dossier dist/ comme dossier de publication
```

### Cloudflare Pages
Même principe : dossier de publication `dist/`.

### Variables d'environnement
Aucune en mode statique. En mode hybride (formulaire réel), ajouter `RESEND_API_KEY`.

---

## 12. Évolutions futures

### Brancher le formulaire de contact
Voir section 9. Nécessite `output: "hybrid"` dans `astro.config.ts` et un service d'envoi (Resend, SendGrid…).

### Blog SEO
Créer `src/pages/blog/index.astro` et `src/pages/blog/[slug].astro` avec les collections de contenu Astro (`src/content/blog/`).

### Analytics
Ajouter le script dans `src/layouts/BaseLayout.astro` (Plausible, Matomo, ou Google Analytics avec consentement RGPD via bannière cookies).

### Sitemap XML
Générer manuellement ou via un plugin alternatif une fois la compatibilité corrigée dans une future version d'Astro.

### Ajouter une page
1. Créer `src/pages/ma-page.astro` (et les 3 équivalents EN/ES/AR)
2. Ajouter le lien dans `src/components/Header.astro` (tableau `nav`)
3. Ajouter le lien dans `src/components/Footer.astro` si nécessaire
4. Ajouter les traductions correspondantes dans `i18n.ts`

Voir aussi :
- `GUIDE-MODIFICATIONS.md` — guide pas à pas pour les modifications courantes (logo, textes, couleurs, nouvelle page)
- `DOCUMENTATION-UTILISATEUR.md` — guide destiné aux non-développeurs (sans code)
