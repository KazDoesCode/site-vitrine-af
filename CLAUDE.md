# Accueil Formalités — site vitrine

Site vitrine pour un cabinet d'accompagnement administratif des étrangers en France (Jelly Tran, Paris 10e).

**Stack** : Astro 4 (`output: "static"`) + React 18 (uniquement pour le formulaire de contact) + Tailwind CSS 3 + TypeScript strict. Gestionnaire de paquets **Bun** exclusivement — ne pas utiliser npm/yarn.

```bash
bun install
bun dev       # http://localhost:4321
bun run build    # génère dist/
bun run preview
```

## Architecture

- `src/config/site.ts` — **source unique de vérité pour tout le contenu éditorial** : coordonnées, agences, services, valeurs, stats, SEO par défaut. Toute modification de contenu doit passer par ce fichier, jamais en dur dans un composant/page.
- `src/config/i18n.ts` — toutes les traductions + helpers `t(locale)`, `localePath(locale, path)`, `isRTL(locale)`.
- `src/layouts/BaseLayout.astro` — `<html lang/dir>`, meta SEO (title/description/canonical/hreflang/OG/Twitter), charge Header/Footer/WhatsAppButton et les polices Google Fonts (Cormorant Garamond pour les titres, Inter pour le corps).
- `src/components/` — `Header.astro` (nav + menu mobile + sélecteur de langue), `Footer.astro`, `WhatsAppButton.astro`, et `ContactForm.tsx` (seul composant React du site, monté avec `client:load`).
- `src/pages/` — pages FR à la racine (`/`, `/services`, `/a-propos`, `/contact`, `/mentions-legales`, `/politique-de-confidentialite`, `/politique-de-cookies`). Chacune a un équivalent dans `src/pages/en/`, `src/pages/es/`, `src/pages/ar/`.
- `src/styles/global.css` — Tailwind + utilitaire `.tricolor-bar` (bande bleu/blanc/rouge dans header/footer).
- `tsconfig.json` définit l'alias `@/*` → `src/*`.

## i18n

4 locales : `fr` (racine, défaut), `en` (`/en/`), `es` (`/es/`), `ar` (`/ar/`, RTL automatique via `isRTL()`). Pour ajouter une langue : déclarer dans `site.ts` (`locales`, `localeLabels`), ajouter un bloc de traductions dans `i18n.ts`, créer le sous-dossier `src/pages/xx/` avec les 7 pages.

## État réel à connaître

- **Une seule agence est configurée actuellement** (`agencies` dans `site.ts` ne contient que Paris), bien que le composant Footer soit prévu pour en lister plusieurs.
- **Le formulaire de contact simule l'envoi** (`ContactForm.tsx:48`, `await new Promise(...)`) — aucun backend réel n'est branché. Pour le brancher : passer `output: "hybrid"` dans `astro.config.ts`, créer `src/pages/api/contact.ts`, remplacer le `TODO` dans `handleSubmit`.
- **`@astrojs/sitemap` est en dépendance mais désactivé** dans `astro.config.ts` (bug de compatibilité avec cette version d'Astro) — ne pas le réactiver sans vérifier la compatibilité.
- Les clés d'images dans `site.ts` (`images.services.titreSejour`, etc.) pointent vers des fichiers `public/images/` dont certains noms sont génériques (`1.jpg`, `2.jpg`, `3.jpg`, `passport.png`) plutôt que descriptifs — vérifier le fichier réel avant de le remplacer.
- `scripts/generate-cdc.ts` génère `C.docx` (cahier des charges) — dépendance `docx` utilisée uniquement par ce script, pas par le site.

## Avant déploiement

Vérifier la cohérence de l'URL de production à 3 endroits : `siteUrl` dans `src/config/site.ts`, `site` dans `astro.config.ts`, et `public/robots.txt`.

## Documentation complémentaire

- [DOCUMENTATION.md](DOCUMENTATION.md) — référence technique détaillée (composants, design system, accessibilité RGAA, SEO)
- [GUIDE-MODIFICATIONS.md](GUIDE-MODIFICATIONS.md) — pas-à-pas pour modifications courantes (logo, textes, couleurs, nouvelle page)
- [DOCUMENTATION-UTILISATEUR.md](DOCUMENTATION-UTILISATEUR.md) — guide pour un éditeur non-développeur
