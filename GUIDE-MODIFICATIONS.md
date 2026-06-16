# Guide de modifications — Accueil Formalités

Ce guide explique comment effectuer les modifications les plus courantes sur le site, étape par étape, sans connaissances techniques avancées.

---

## Sommaire

1. [Remplacer le logo](#1-remplacer-le-logo)
2. [Remplacer une image](#2-remplacer-une-image)
3. [Modifier les coordonnées (téléphone, email, adresse)](#3-modifier-les-coordonnées)
4. [Modifier les textes du site](#4-modifier-les-textes-du-site)
5. [Modifier les textes dans une autre langue](#5-modifier-les-textes-dans-une-autre-langue)
6. [Changer les couleurs du site](#6-changer-les-couleurs-du-site)
7. [Modifier les chiffres clés (hero)](#7-modifier-les-chiffres-clés)
8. [Ajouter ou modifier un service](#8-ajouter-ou-modifier-un-service)
9. [Ajouter une agence](#9-ajouter-une-agence)
10. [Ajouter une nouvelle page](#10-ajouter-une-nouvelle-page)
11. [Mettre à jour les pages légales](#11-mettre-à-jour-les-pages-légales)
12. [Déployer les modifications](#12-déployer-les-modifications)

---

## 1. Remplacer le logo

**Fichier concerné :** `public/images/`

### Étapes

1. Préparez votre nouveau logo au format **PNG** ou **SVG** (fond transparent recommandé). Hauteur idéale : entre 80 et 120 px.

2. Copiez le fichier dans `public/images/` en le nommant `logo2.png` (ou tout autre nom).

3. Ouvrez `src/config/site.ts` et mettez à jour la ligne :
   ```ts
   export const images = {
     logo: "/images/votre-nouveau-logo.png",
     // ...
   };
   ```

4. Le logo est automatiquement mis à jour dans le header et le favicon du site.

> **Astuce** : Gardez toujours l'ancien logo sous un autre nom (ex. `logo-old.png`) avant de remplacer, pour pouvoir revenir en arrière si besoin.

---

## 2. Remplacer une image

**Dossier :** `public/images/`

### Image hero (grande image d'accueil)

1. Préparez votre image : **largeur minimale 1400 px**, format JPG ou WebP.
2. Nommez-la `hero.jpg` (ou un autre nom) et copiez-la dans `public/images/`.
3. Mettez à jour dans `src/config/site.ts` :
   ```ts
   export const images = {
     hero: "/images/hero.jpg",
     // ...
   };
   ```

### Image "À propos"

Même principe, avec `about.jpg` et la clé `images.about`.

### Images de services

Chaque service a sa propre image. Dans `src/config/site.ts` :
```ts
export const images = {
  services: {
    titreSejour:  "/images/service-titre-sejour.jpg",
    renouvellement: "/images/service-renouvellement.jpg",
    travail:      "/images/service-travail.jpg",
    naturalisation: "/images/service-naturalisation.jpg",
    famille:      "/images/service-famille.jpg",
    accompagnement: "/images/service-accompagnement.jpg",
  },
};
```

Remplacez les fichiers correspondants dans `public/images/` et mettez à jour le chemin si vous changez le nom du fichier.

> **Format recommandé** : JPG 900×600 px minimum, compressé à moins de 300 Ko.

---

## 3. Modifier les coordonnées

**Fichier :** `src/config/site.ts`

Toutes les coordonnées sont centralisées ici :

```ts
export const contact = {
  phone: "+33671661201",         // Format international (pour liens tel:)
  phoneDisplay: "06 71 66 12 01", // Format affiché à l'écran
  email: "contact@accueilformalites.fr",
  whatsapp: "33671661201",       // Sans + ni espaces
  whatsappMessage: "Bonjour, je souhaite des informations sur vos services.",
};
```

### Modifier l'adresse

```ts
export const agencies = [
  {
    city: "Paris",
    address: "91 rue du Faubourg Saint-Denis, 75010 Paris",
    mapsQuery: "91+rue+du+Faubourg+Saint-Denis,+75010+Paris",
    // ↑ Remplacez les espaces par des + dans mapsQuery
  },
];
```

> **Important** : `mapsQuery` est utilisé pour l'iframe Google Maps. Remplacez les espaces par `+` et les virgules par `%2C` ou laissez-les telles quelles.

---

## 4. Modifier les textes du site

Les textes de contenu sont dans **deux endroits** selon leur nature.

### Textes généraux (nom, slogan, valeurs)

**Fichier :** `src/config/site.ts`

```ts
export const company = {
  name: "Accueil Formalités",
  consultant: "Jelly Tran",   // Affiché dans le header et le footer
  slogan: "Faire de vos démarches un succès",
  tagline: "Cabinet spécialisé dans l'accompagnement administratif des étrangers en France.",
  description: "Notre équipe accompagne les particuliers...",
};
```

### Textes de l'interface (boutons, titres de sections, messages)

**Fichier :** `src/config/i18n.ts` — section `fr` (français)

Cherchez la clé correspondante et modifiez sa valeur. Exemple pour le titre du hero :
```ts
hero: {
  eyebrow: "Cabinet spécialisé",
  title: "Votre nouveau titre ici",
  description: "Votre nouvelle description...",
  // ...
},
```

---

## 5. Modifier les textes dans une autre langue

**Fichier :** `src/config/i18n.ts`

Le fichier contient 4 sections, une par langue, séparées par des commentaires :
- `// === FRENCH ===`
- `// === ENGLISH ===`
- `// === SPANISH ===`
- `// === ARABIC ===`

### Étapes

1. Ouvrez `src/config/i18n.ts`
2. Cherchez le commentaire de la langue souhaitée (ex. `// === ENGLISH ===`)
3. Modifiez la valeur de la clé correspondante

> **Conseil** : Utilisez la version FR comme référence pour retrouver la bonne clé, puis allez modifier la même clé dans la langue cible.

### Exemple

Pour changer la description du hero en espagnol :
```ts
// === SPANISH ===
es: {
  hero: {
    description: "Votre nouvelle description en espagnol...",
  },
  // ...
}
```

---

## 6. Changer les couleurs du site

**Fichier :** `tailwind.config.ts`

```ts
theme: {
  extend: {
    colors: {
      primary: "#1e3a5f",       // Bleu principal (titres, header, footer)
      "primary-dark": "#152c4a",// Bleu foncé (survol)
      accent: "#c0392b",        // Rouge (boutons CTA, éléments forts)
      "accent-dark": "#a93226", // Rouge foncé (survol)
      secondary: "#f4f6fa",     // Fond bleu très clair (sections alternées)
    },
  },
},
```

Remplacez les codes hexadécimaux par vos nouvelles couleurs. Les changements s'appliquent automatiquement à tout le site.

> **Attention** : Les couleurs `primary` et `accent` sont utilisées dans des centaines d'endroits. Testez toujours visuellement après un changement de couleur.

---

## 7. Modifier les chiffres clés

**Fichier :** `src/config/site.ts`

```ts
export const stats = [
  { label: "Expérience", value: "+10 ans" },
  { label: "Dossiers traités", value: "+2 500" },
  { label: "Satisfaction", value: "98%" },
];
```

Modifiez `value` et/ou `label`. Ces chiffres apparaissent dans la section hero de la page d'accueil.

> **Note** : Les labels (Expérience, Dossiers traités…) ne sont pas traduits automatiquement — si vous avez besoin de les traduire, modifiez-les aussi dans `src/config/i18n.ts` (clé `stats`).

---

## 8. Ajouter ou modifier un service

### Modifier un service existant

**Fichier :** `src/config/site.ts`, tableau `services` :

```ts
export const services = [
  {
    slug: "titre-de-sejour",       // Identifiant URL (ne pas changer si déjà en ligne)
    title: "Titre de séjour",      // Titre affiché
    summary: "Description courte du service...",
    image: images.services.titreSejour,
  },
  // ...
];
```

### Ajouter un nouveau service

1. Dans `src/config/site.ts`, ajoutez l'image du service :
   ```ts
   export const images = {
     services: {
       // ...
       monNouveauService: "/images/service-mon-service.jpg",
     },
   };
   ```

2. Copiez l'image dans `public/images/`.

3. Ajoutez le service dans le tableau `services` :
   ```ts
   {
     slug: "mon-nouveau-service",
     title: "Mon nouveau service",
     summary: "Description en français...",
     image: images.services.monNouveauService,
   },
   ```

4. Traduisez le titre et la description dans `src/config/i18n.ts` si nécessaire (les services sont affichés avec les données de `site.ts`, donc la traduction complète nécessite d'adapter les pages de services).

---

## 9. Ajouter une agence

**Fichier :** `src/config/site.ts`

```ts
export const agencies = [
  {
    city: "Paris",
    address: "91 rue du Faubourg Saint-Denis, 75010 Paris",
    mapsQuery: "91+rue+du+Faubourg+Saint-Denis,+75010+Paris",
  },
  // Ajoutez ici :
  {
    city: "Lyon",
    address: "10 rue de la République, 69001 Lyon",
    mapsQuery: "10+rue+de+la+République,+69001+Lyon",
  },
];
```

La nouvelle agence apparaît automatiquement sur la page `/contact` (coordonnées + carte Google Maps).

---

## 10. Ajouter une nouvelle page

### Étapes

1. **Créez le fichier FR** : `src/pages/ma-page.astro`

   ```astro
   ---
   import BaseLayout from "@/layouts/BaseLayout.astro";
   import { company } from "@/config/site";
   import { t } from "@/config/i18n";

   const locale = "fr";
   const tr = t(locale);
   ---

   <BaseLayout title={`Ma page — ${company.name}`} description="Description SEO..." locale={locale}>
     <section class="bg-secondary py-16">
       <div class="mx-auto max-w-7xl px-4 sm:px-6">
         <h1 class="font-serif text-3xl text-primary">Titre de ma page</h1>
       </div>
     </section>

     <section class="py-20">
       <div class="mx-auto max-w-7xl px-4 sm:px-6">
         <p>Contenu de la page...</p>
       </div>
     </section>
   </BaseLayout>
   ```

2. **Créez les versions traduites** dans `src/pages/en/ma-page.astro`, `src/pages/es/ma-page.astro`, `src/pages/ar/ma-page.astro` avec `locale = "en"` etc.

3. **Ajoutez le lien dans la navigation** (`src/components/Header.astro`) :
   ```ts
   const nav = [
     // ...
     { href: localePath(locale, "/ma-page"), label: "Ma page" },
   ];
   ```
   > Pour une traduction du libellé du lien, ajoutez une clé dans `i18n.ts` sous `nav`.

4. **Ajoutez le lien dans le footer** si nécessaire (`src/components/Footer.astro`).

---

## 11. Mettre à jour les pages légales

Les pages légales (Mentions légales et Politique de confidentialité) sont des fichiers Astro statiques. Elles se trouvent dans :

| Langue | Mentions légales | Politique de confidentialité |
|---|---|---|
| FR | `src/pages/mentions-legales.astro` | `src/pages/politique-de-confidentialite.astro` |
| EN | `src/pages/en/mentions-legales.astro` | `src/pages/en/politique-de-confidentialite.astro` |
| ES | `src/pages/es/mentions-legales.astro` | `src/pages/es/politique-de-confidentialite.astro` |
| AR | `src/pages/ar/mentions-legales.astro` | `src/pages/ar/politique-de-confidentialite.astro` |

### Ce qu'il faut personnaliser avant mise en ligne

1. **Hébergeur** : cherchez le commentaire `hébergeur à renseigner` dans les fichiers et remplacez par les vraies coordonnées de votre hébergeur (nom, adresse, numéro SIREN ou équivalent).

2. **Date de mise à jour** : en bas de chaque fichier, mettez à jour la date :
   ```astro
   <p class="text-sm text-gray-500 mt-12">Dernière mise à jour : janvier 2027.</p>
   ```

3. **Si vous utilisez des cookies tiers** (Google Analytics, Meta Pixel, etc.) : mettez à jour la section "Cookies" pour le mentionner explicitement et prévoir une bannière de consentement.

4. **DPO (Délégué à la Protection des Données)** : si votre activité le requiert, ajoutez les coordonnées du DPO dans la Politique de confidentialité.

> **Rappel RGPD** : Ces pages doivent être accessibles depuis toutes les pages du site (c'est déjà le cas via le footer). En cas de doute sur vos obligations, consultez un juriste ou le site de la [CNIL](https://www.cnil.fr).

---

## 12. Déployer les modifications

### Tester en local d'abord

```bash
bun dev
# Ouvrez http://localhost:4321 dans votre navigateur
```

### Builder et vérifier

```bash
bun run build
bun run preview
# Vérifiez que tout fonctionne sur http://localhost:4321
```

### Déployer

Si vous utilisez **Vercel** ou **Netlify** avec déploiement automatique (Git push) :
```bash
git add .
git commit -m "Description de vos modifications"
git push
```
Le déploiement se déclenche automatiquement.

Si vous déployez manuellement, envoyez le contenu du dossier `dist/` sur votre serveur ou hébergeur.

---

## Récapitulatif des fichiers clés

| Que modifier | Fichier |
|---|---|
| Logo, images | `public/images/` + `src/config/site.ts` |
| Coordonnées, services, valeurs | `src/config/site.ts` |
| Textes FR | `src/config/i18n.ts` section `fr` |
| Textes EN | `src/config/i18n.ts` section `en` |
| Textes ES | `src/config/i18n.ts` section `es` |
| Textes AR | `src/config/i18n.ts` section `ar` |
| Couleurs | `tailwind.config.ts` |
| Polices | `tailwind.config.ts` + `src/layouts/BaseLayout.astro` |
| Navigation | `src/components/Header.astro` |
| Pied de page | `src/components/Footer.astro` |
| Pages légales | `src/pages/mentions-legales.astro` et `politique-de-confidentialite.astro` |
| Formulaire de contact | `src/components/ContactForm.tsx` |
