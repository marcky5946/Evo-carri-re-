# LANDING PAGE V4 - Brief complet

Rebuild complet de src/app/page.tsx. Tout en style={{}} inline, use client, mobile-first.

## HEADLINE
H1: On te donne le systeme. Tu generes 10 000$/mois+ en services financiers.
Sous-titre: Formation complete. Leads fournis. Outils IA. Tu nas qua closer.
Badge: Recrutement en cours - Places limitees

## SECTION COMMENT CA FONCTIONNE (apres stats)
Titre: Un systeme cle en main. Pas de bullshit.
Sous-titre: Tu ne pars pas de zero. Tout est deja en place.
4 etapes:
01 FORMATION - Tu completes nos 34 modules. En quelques semaines, tu maitrises le produit, le pitch et la vente.
02 LEADS - Notre systeme IA genere des prospects qualifies pour toi. Tu ne perds pas ton temps en prospection froide.
03 CLOSING - Tu prends les appels, tu presentes la solution, tu fermes. Scripts et objections fournis.
04 REVENUS - Commission directe sur chaque vente. Pas de plafond. Plus tu performes, plus tu gagnes.

## RETIRER
- Enlever Montreal et Quebec du badge hero
- Enlever GESTION GRDT INC du footer
- Footer: juste 2026 EVO LIFE

## PREUVE SOCIALE - Parcours de Charles
Photo placeholder circulaire avec initiales CF sur fond bleu
Titre: De zero a conseiller performant
Citation: Quand jai rejoint EVO LIFE, javais aucune experience en finance. Avec la formation et le systeme de leads, jai close mes premieres ventes en moins de 3 semaines. Aujourdhui je gere ma propre equipe.
Nom: Charles F., Conseiller EVO LIFE
Stats: 3 semaines - premieres ventes | 34 modules completes | Equipe en construction

## RECRIRE SECTION PROBLEME
Titre: Tu te demandes surement...
3 cards avec bordure bleue:
- Est-ce que je suis capable? - Oui. 90% de nos conseillers navaient aucune experience en finance. Notre formation te prend par la main.
- Cest quoi mon quotidien? - Tu recois des leads, tu fais des appels, tu presentes des solutions financieres. Simple et structure.
- Cest quoi le catch? - Rien. 100% performance. Pas de frais caches. Si tu ne vends pas, tu ne gagnes pas. Si tu vends, pas de plafond.

## SECTION FILTRE
Titre: Attends. Ce nest PAS pour tout le monde.
Sous-titre: On prefere etre honnetes maintenant plutot que perdre ton temps.
Liste X rouge:
- Tu cherches un revenu garanti sans effort
- Tu nes pas pret a apprendre et te former
- Tu veux un 9 a 5 confortable sans stress
- Tu nes pas a laise de parler aux gens
- Tu veux des resultats sans mettre le travail

Liste check vert: Par contre, si...
- Tu veux un revenu sans plafond base sur tes efforts
- Tu es pret a apprendre un nouveau metier
- Tu veux un systeme qui travaille pour toi
- Tu aimes aider les gens
- Tu es pret a te depasser
Conclusion: Alors tu es probablement fait pour EVO LIFE.

## CTA
Bouton principal partout: Voir si je suis admissible
Bouton footer: Commencer le processus

## PAGE POST-FORMULAIRE (remplace le message succes)
Grand check anime
Titre: Candidature recue!
Sous-titre: Voici ce qui se passe maintenant:
3 etapes:
1. Evaluation - On examine ta candidature dans les 24-48h
2. Appel exploratoire - Si ton profil est retenu, on te contacte pour un appel de 15 minutes
3. Onboarding - Si cest un bon fit, tu commences ta formation immediatement

Section En attendant:
Titre: Voici comment notre systeme aide nos conseillers a generer plus de 10 000$/mois
3 cards:
- Revenus moyens: Nos conseillers actifs generent entre 5K et 15K$/mois apres 3 mois.
- Systeme IA: Tu ne prospectes pas. Notre IA te fournit des leads qualifies chaque semaine.
- Croissance: En 6 mois, tu peux batir ta propre equipe et toucher des overrides.

## ORDRE DES SECTIONS
1. Navbar sticky
2. Hero (headline + video placeholder + CTA)
3. Stats (34 modules, 100% commission, Support IA 24/7)
4. Comment ca fonctionne (4 etapes)
5. Tu te demandes surement (3 questions)
6. Solution EVO LIFE (3 cards avantages)
7. Parcours de Charles (preuve sociale)
8. Comparaison table (EVO vs cabinet traditionnel)
9. Filtre (Pas pour toi si / Par contre si)
10. Formulaire 3 etapes
11. FAQ
12. Footer CTA
13. Footer

## TECH
- use client
- useState pour currentPage (1, 2, 3, success)
- Page success = contenu post-formulaire complet
- style={{}} inline partout
- npm run build doit passer
- git add -A && git commit && git push origin main
