# Angular 16 / Bootstrap 5 & CRUD REST API

<table>
<tr>
<td>

Ce repository s'appuie sur une application de démonstration développée par <a href="https://www.ganatan.com/en">www.ganatan.com</a>
Cette base permet d'établir un contexte pour la réalisation de ce test technique.

</td>
</tr>
</table>

# [Live Demo](#live-demo)
Une démo live de l'application est disponible à l'adresse  :  https://angular.ganatan.com/

<p align="center">
  <p align="center">
    <a href="https://angular.ganatan.com/">
      <img src="https://media.giphy.com/media/9BuBBLc7keCgRojp92/giphy.gif" alt="Angular 14 Example 
      Application"/>
    </a>
  </p>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Front-end](#front-end)
-

### Front-end : Ce qui est inclus
> Dependencies
- [x] Angular : 16.2.9
- [x] Angular CLI : 16.2.6
- [x] Angular Universal : 16.2.0
- [x] Bootstrap : 5.3.2
- [x] Fontawesome : 6.4.2

> Features
- [x] Routing
- [x] Lazy Loading
- [x] Server Side Rendering
- [x] Progressive Web App
- [x] Responsive Layout
- [x] Search Engine Optimization (SEO)
- [x] Components
- [x] Services
- [x] Reactive Form
- [x] Template Driven Forms
- [x] Search / Grid / Pagination

## Quick start

```bash
# select a repo from github or gitlab

# download the example or clone the repo from gitlab
git clone https://github.com/advizeo-cbo/fixme-dataviz.git

# change directory
cd angular-app
cd frontend

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200)


## Test technique

L'ensemble des exercices concerneront la page services de l'application. 
Pour l'atteindre, accédez à la page d'accueil de l'application [http://localhost:4200](http://localhost:4200), 
cliquez sur "Landing Page", puis sur "Service".

La page vous présente le top 10 des musiques de l'année avec la possibilité 
de changer l'année concernée et de visualiser les vidéos Youtube de chacun des 
chansons. Vous allez devoir opérer quelques changements dans cette page.

Il est conseillé de lire l'énoncé de l'ensemble des exercices avant de se lancer 
dans l'implémentation.


### Exercice 1

Bug : Lorsque je selectionne 2023, je vois beaucoup plus que 10 chansons. 
Il faudrait que je ne vois que le Top 10.

Tests d'acceptance :
+ Quelque soit l'année selectionnée, je ne vois que les chansons du top 1 à 10 triée par ordre de top croissant.


### Exercice 2

User Story : En tant qu'utilisateur, je voudrais voir dans la liste 
quelle chanson est selectionnée.

Tests d'acceptance :
+ La ligne du tableau correspondant à la chanson selectionnée doit être 
sur fond jaune et le texte doit être en gras.

+ Quand je clique sur une autre ligne, la nouvelle ligne est selectionnée visuellement 
et l'ancienne ne l'est plus

### Exercice 3

User Story : Lorsque je suis sur 2023, je veux suivre l'évolution du top 10 qui varie toutes les 5 secondes

Note : une méthode permet de récupérer un observable des listes des 
chansons mises à jour toutes les 5 secondes

Tests d'acceptance :
+ Lorsque je suis sur 2023, je dois voir la liste se mettre à jour toutes les 5 secondes

+ Lorsque la liste se met à jour, je dois rester sur la meme chanson selectionnée (même si la chanson ne fait plus parti du TOP 10)

+ Si la chanson reste dans la liste, elle doit restée selectionnée en jaune

+ Au dessus de la vidéo, la position de la chanson doit se rafraichir


