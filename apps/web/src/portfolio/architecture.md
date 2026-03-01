# Portfolio Data Architecture

## Objectif

Structurer les donnees du portfolio pour:

- alimenter l'UI homepage (cards courtes)
- ouvrir une fiche detail au clic sur une card
- permettre la publication en mode draft/published/archived

## Collections Firestore

- `profiles`: donnees globales du profil (hero, bio, contact)
- `projects`: cartes projet + contenu detail (sections, galerie, metriques)
- `experiences`: timeline pro
- `studies`: parcours scolaire
- `skills`: stack technique
- `portfolioStats`: chiffres clefs

Tous les documents contiennent un `status` pour separer brouillon et public.

## Strategie Front

- Page d'accueil: charger les collections filtrees avec `profileId` + `status == "published"`
- Cards projet: utiliser `title`, `shortDescription`, `cover`, `stack`, `badge`
- Detail projet (clic): requeter le document projet complet via `slug`

## Types

Les types principaux sont dans `apps/web/src/portfolio/model.ts`.
Le mapping collections/paths Firestore est dans `apps/web/src/portfolio/firestore-schema.ts`.
