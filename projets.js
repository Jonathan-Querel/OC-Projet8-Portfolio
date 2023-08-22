const projetsData = [
  {
    link: "https://github.com/Jonathan-Querel/OC-Projet2-HTML-CSS",
    imgSrc: "images/projets/Booki.webp",
    alt: "Booki",
    name: "Booki",
    description:
      "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
    explication:
      "Ce premier projet technique de la formation permettant de créer une page web statique et responsive. Il m'a permis d'apprendre les langages HTML et CSS, mais également à me familiariser avec les outils tels que VsCode, GitHub et Figma.",
    competences: [
      "Installer un environnement de développement front-end",
      "Intégrer du contenu conformément à une maquette avec HTML & CSS",
      "Implémenter une interface responsive avec HTML & CSS",
      "Versionner son projet avec Git et Github",
    ],
  },
  {
    link: "https://github.com/Jonathan-Querel/OC-Projet3-JavaScript",
    imgSrc: "images/projets/Sophiebluel.webp",
    alt: "Sophie Bluel, architecte d'intérieur",
    name: "Sophie Bluel",
    description: "Création d'une page web dynamique avec JavaScript",
    explication:
      "Un projet qui m'a permis de m'initié à JavaScript. En partant d'une page statique, j'ai du mettre en place la connexion de l'utilisatrice, et l'accès à ses projets via une modale. Projet plus complexe qui m'a demandé des recherches approfondis sur Internet pour pouvoir le mener à bien et réussir à implémenter les modales.",
    competences: [
      "Manipuler les éléments du DOM avec JavaScript",
      "Gérer les évènements utilisateurs avec JavaScript",
      "Récupérer les données utilisateurs via des formulaires",
    ],
  },
  {
    link: "https://github.com/Jonathan-Querel/OC-Projet5-Debugger-et-optimiser-un-site",
    imgSrc: "images/projets/Ninacarducci.webp",
    alt: "Nina Carducci, photographe d'intérieur",
    name: "Nina Carducci",
    description: "Optimisation et débug d'un site de photographe",
    explication:
      "Ce projet différent des autres m'a demandé de la réflexion et l'étude du code pour pouvoir corriger certains bugs de modale et de filtres. J'ai du réalisé également l'optimisation du code pour améliorer les notes de performances, l'accessibilité et le référencement du site.",
    competences: [
      "Optimiser les performances, le référencement et l'accessibilité d'un site web",
      "Débugger un site web grâce aux Chrome DevTools",
      "Rédiger un cahier de recette pour tester un site",
    ],
  },
  {
    link: "https://github.com/Jonathan-Querel/OC-Projet6-React",
    imgSrc: "images/projets/Kasa.webp",
    alt: "Kasa",
    name: "Kasa",
    description:
      "Création d'une application web de location immobilière avec React",
    explication:
      "Ce projet m'a permis de découvrir le nouveau langage React. J'ai du coder l'application en React.Js pour obtenir un résultat fonctionnel, responsive et conforme à la maquette. Après avoir initialisé l'application avec Create React App et installé React Router j'ai pu crée la logique de routage avant de passer aux différentes pages de l'application.",
    competences: [
      "Développer des éléments de l'interface d'un site web grâce à des composants React",
      "Initialiser une application avec Create React App",
      "Configurer la navigation entre les pages de l'application avec React Router",
    ],
  },
];

function addProjects() {
  const container = document.getElementById("container_activites_projets");

  container.innerHTML = projetsData
    .map(
      (projet) => `
        <article class="activite_projet">
            <a href="${projet.link}" target="_blank" title="${projet.name}">
                <img src="${projet.imgSrc}" alt="${projet.alt}">
                <div class="titre_projet">
                    <h3>${projet.name}</h3>
                    <div class="modale_globale">
                        <a href="#modale${projet.name.toLowerCase()}" onclick="toggleModal('modale${projet.name.toLowerCase()}')"
                            id="modaledescription">Description</a>
                        <div id="modale${projet.name.toLowerCase()}" class="modal">
                            <a href="#modale${projet.name.toLowerCase()}" onclick="toggleModal('modale${projet.name.toLowerCase()}')" id="modalea">X</a>
                            <h4 id="modaleh4">${projet.name}</h4>
                            <p id="modalep">${projet.description}</p>
                            <p id="modalecompetences">Description</p>
                            <p id="modalep">${projet.explication}</p>
                            <p id="modalecompetences">Compétences</p>
                            <ul id="modaleul">
                                ${projet.competences
                                  .map((comp) => `<li>${comp}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    `
    )
    .join("");
}

addProjects();
