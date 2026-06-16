# Documentation utilisateur — Accueil Formalités

Ce document est destiné à la personne qui gère le site au quotidien, **sans connaissance en développement web**.

---

## Sommaire

1. [Ce que je peux faire facilement](#1-ce-que-je-peux-faire-facilement)
2. [Modifier les informations de contact](#2-modifier-les-informations-de-contact)
3. [Changer le logo](#3-changer-le-logo)
4. [Modifier les images](#4-modifier-les-images)
5. [Modifier les textes du site](#5-modifier-les-textes-du-site)
6. [Modifier une traduction](#6-modifier-une-traduction)
7. [Mettre à jour les pages légales](#7-mettre-à-jour-les-pages-légales)
8. [Vérifier que le site fonctionne](#8-vérifier-que-le-site-fonctionne)
9. [Ce qu'il faut demander à un développeur](#9-ce-quil-faut-demander-à-un-développeur)
10. [Glossaire](#10-glossaire)

---

## 1. Ce que je peux faire facilement

Toutes les modifications suivantes nécessitent d'éditer **un seul fichier** : `src/config/site.ts`

✅ Changer le numéro de téléphone  
✅ Changer l'adresse e-mail  
✅ Changer le numéro WhatsApp  
✅ Modifier le slogan ou la description du cabinet  
✅ Ajouter ou modifier une agence  
✅ Mettre à jour les chiffres clés (années d'expérience, nombre de dossiers…)  
✅ Changer le logo (déposer le fichier + mettre à jour le chemin)  
✅ Remplacer les images (déposer le fichier dans `public/images/`)

---

## 2. Modifier les informations de contact

**Fichier à ouvrir :** `src/config/site.ts`

Cherchez ce bloc (lignes ~37-44) :

```
export const contact = {
  phone: "+33671661201",
  phoneDisplay: "06 71 66 12 01",
  email: "contact@accueilformalites.fr",
  whatsapp: "33671661201",
  whatsappMessage: "Bonjour, je souhaite des informations sur vos services.",
};
```

- **Changer le téléphone** : modifiez `phone` (format international) et `phoneDisplay` (format affiché)
- **Changer l'e-mail** : modifiez `email`
- **Changer le WhatsApp** : modifiez `whatsapp` (format international sans + ni espaces)
- **Changer le message WhatsApp par défaut** : modifiez `whatsappMessage`

**Après modification** : demandez à votre développeur de faire un déploiement, ou suivez la procédure décrite en section 8.

---

## 3. Changer le logo

1. **Préparez votre image** : format PNG ou SVG, fond transparent, environ 200 px de hauteur.

2. **Déposez-la** dans le dossier `public/images/` sur votre ordinateur (ou serveur).  
   Exemple : vous pouvez la nommer `logo-nouveau.png`.

3. **Ouvrez** `src/config/site.ts` et cherchez :
   ```
   export const images = {
     logo: "/images/logo2.png",
   ```
   Remplacez `logo2.png` par le nom de votre nouveau fichier.

4. Sauvegardez et déployez (section 8).

---

## 4. Modifier les images

Toutes les images sont dans le dossier `public/images/`.

| Image | Nom du fichier | Taille recommandée |
|---|---|---|
| Grande image d'accueil (hero) | `hero.jpg` | 1400×900 px minimum |
| Photo "À propos" | `about.jpg` | 1200×800 px minimum |
| Service titre de séjour | `service-titre-sejour.jpg` | 900×600 px |
| Service renouvellement | `service-renouvellement.jpg` | 900×600 px |
| Service travail | `service-travail.jpg` | 900×600 px |
| Service naturalisation | `service-naturalisation.jpg` | 900×600 px |
| Service famille | `service-famille.jpg` | 900×600 px |
| Service accompagnement | `service-accompagnement.jpg` | 900×600 px |

**Procédure** :
1. Préparez votre nouvelle image aux dimensions recommandées.
2. Donnez-lui exactement le même nom que le fichier à remplacer.
3. Copiez-la dans `public/images/` (l'ancienne sera écrasée).
4. Déployez.

> **Conseil qualité** : compressez vos images avant de les mettre en ligne (outil gratuit : [squoosh.app](https://squoosh.app)). Visez moins de 300 Ko par image.

---

## 5. Modifier les textes du site

### Textes principaux

**Fichier :** `src/config/site.ts`

```
export const company = {
  name: "Accueil Formalités",       ← Nom du cabinet (header, footer, SEO)
  consultant: "Jelly Tran",         ← Nom affiché dans le header
  slogan: "Faire de vos démarches un succès",  ← Slogan (footer)
  tagline: "Cabinet spécialisé...", ← Sous-titre
};
```

### Chiffres clés (page d'accueil)

```
export const stats = [
  { label: "Expérience", value: "+10 ans" },
  { label: "Dossiers traités", value: "+2 500" },
  { label: "Satisfaction", value: "98%" },
];
```

Modifiez les valeurs `value` pour mettre à jour les chiffres affichés.

### Textes de l'interface (boutons, titres de sections, messages)

Ces textes sont dans `src/config/i18n.ts`. Cherchez le bloc `fr:` pour le français.

**Exemple** — changer le titre du hero :
```
hero: {
  title: "Votre nouveau titre ici",
```

---

## 6. Modifier une traduction

**Fichier :** `src/config/i18n.ts`

Ce fichier contient les textes dans les 4 langues. Chaque langue est séparée par un commentaire :

```
// === FRENCH ===     → recherchez "fr:"
// === ENGLISH ===    → recherchez "en:"
// === SPANISH ===    → recherchez "es:"
// === ARABIC ===     → recherchez "ar:"
```

**Étapes** :
1. Ouvrez le fichier
2. Utilisez la fonction "Rechercher" (Ctrl+F ou ⌘+F) pour trouver le texte à modifier
3. Modifiez uniquement le texte entre les guillemets `"..."`, sans toucher aux noms des clés
4. Sauvegardez

> ⚠️ **Attention** : ne supprimez aucune ligne ni aucune virgule — cela peut casser le site.

---

## 7. Mettre à jour les pages légales

Les pages légales sont des fichiers Astro simples. Chaque fichier correspond à une langue :

| Page | Fichier FR |
|---|---|
| Mentions légales | `src/pages/mentions-legales.astro` |
| Politique de confidentialité | `src/pages/politique-de-confidentialite.astro` |
| Politique de cookies | `src/pages/politique-de-cookies.astro` |

Pour modifier le contenu, ouvrez le fichier et cherchez le texte à changer entre les balises HTML.

### Informations à personnaliser avant mise en ligne

**Dans les Mentions légales** (`mentions-legales.astro`) :
- Section "Hébergement" : remplacez le texte explicatif par le nom et les coordonnées réelles de votre hébergeur (OVH, Ionos, Vercel, Netlify…)

**Dans la Politique de confidentialité** (`politique-de-confidentialite.astro`) :
- Vérifiez que les durées de conservation correspondent à votre pratique réelle
- Ajoutez les coordonnées de votre DPO si vous en avez un

**Dans la Politique de cookies** (`politique-de-cookies.astro`) :
- Si vous ajoutez un outil de statistiques (Google Analytics…), mettez à jour la section 2.2

---

## 8. Vérifier que le site fonctionne

### En local (sur votre ordinateur)

Ouvrez un terminal et tapez :

```bash
bun dev
```

Puis ouvrez http://localhost:4321 dans votre navigateur.

### Avant de mettre en ligne

```bash
bun run build
bun run preview
```

Vérifiez :
- [ ] La page d'accueil s'affiche correctement
- [ ] Le logo est bien visible
- [ ] Les 4 langues fonctionnent (FR/EN/ES/AR)
- [ ] Le formulaire de contact s'affiche
- [ ] Le bouton WhatsApp est visible en bas à droite
- [ ] Les pages légales sont accessibles depuis le footer
- [ ] La carte Google Maps s'affiche sur /contact

---

## 9. Ce qu'il faut demander à un développeur

Les actions suivantes nécessitent une intervention technique :

| Besoin | Complexité |
|---|---|
| Brancher le vrai formulaire de contact (envoi d'e-mails) | Moyenne |
| Ajouter Google Analytics ou Matomo (avec bannière cookies) | Moyenne |
| Ajouter une nouvelle page | Faible |
| Ajouter une nouvelle langue | Moyenne |
| Changer les polices de caractères | Faible |
| Changer les couleurs du site | Faible |
| Créer un blog | Élevée |
| Ajouter un espace client | Élevée |

---

## 10. Glossaire

| Terme | Définition simple |
|---|---|
| **Astro** | Le logiciel qui génère le site web. C'est comme un moteur sous le capot. |
| **Tailwind** | Système de mise en page et de couleurs. |
| **Bun** | Commande utilisée pour démarrer et construire le site. Équivalent de "npm" mais plus rapide. |
| **Locale** | La langue et la région. `fr` = français, `en` = anglais, etc. |
| **Build** | La commande qui crée les fichiers finaux du site prêts à être mis en ligne. |
| **dist/** | Le dossier contenant le site final après un build. C'est ce dossier qu'on met sur le serveur. |
| **public/** | Dossier pour les images, logos et fichiers statiques (pas besoin de coder). |
| **src/** | Dossier contenant le code source du site. |
| **RGAA** | Référentiel Général d'Amélioration de l'Accessibilité — normes pour rendre le site utilisable par tous, y compris les personnes handicapées. |
| **RGPD** | Règlement Général sur la Protection des Données — loi européenne sur la protection des données personnelles. |
| **Cookie** | Petit fichier déposé dans le navigateur du visiteur pour mémoriser des informations. |
