const projetsData = [
    {
        link: "https://github.com/Jonathan-Querel/OC-Projet2-HTML-CSS",
        imgSrc: "images/projets/Booki.webp",
        alt: "Booki",
        name: "Booki",
        description: "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
        competences: [
            "Installer un environnement de développement front-end",
            "Intégrer du contenu conformément à une maquette avec HTML & CSS",
            "Implémenter une interface responsive avec HTML & CSS",
            "Versionner son projet avec Git et Github"
        ]
    },
    {
        link: "https://github.com/Jonathan-Querel/OC-Projet3-JavaScript",
        imgSrc: "images/projets/Sophiebluel.webp",
        alt: "Sophie Bluel, architecte d'intérieur",
        name: "Sophie Bluel",
        description: "Création d'une page web dynamique avec JavaScript",
        competences: [
            "Manipuler les éléments du DOM avec JavaScript",
            "Gérer les évènements utilisateurs avec JavaScript",
            "Récupérer les données utilisateurs via des formulaires"
        ]
    },
    {
        link: "https://github.com/Jonathan-Querel/OC-Projet5-Debugger-et-optimiser-un-site",
        imgSrc: "images/projets/Ninacarducci.webp",
        alt: "Nina Carducci, photographe d'intérieur",
        name: "Nina Carducci",
        description: "Optimisation et débug d'un site de photographe",
        competences: [
            "Optimiser les performances, le référencement et l'accessibilité d'un site web",
            "Débugger un site web grâce aux Chrome DevTools",
            "Rédiger un cahier de recette pour tester un site"
        ]
    },
    {
        link: "https://github.com/Jonathan-Querel/OC-Projet6-React",
        imgSrc: "images/projets/Kasa.webp",
        alt: "Kasa",
        name: "Kasa",
        description: "Création d'une application web de location immobilière avec React",
        competences: [
            "Développer des éléments de l'interface d'un site web grâce à des composants React",
            "Initialiser une application avec Create React App",
            "Configurer la navigation entre les pages de l'application avec React Router"
        ]
    },
];

function addProjects() {
    const container = document.getElementById("container_activites_projets");

    container.innerHTML = projetsData.map(projet => `
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
                            <p id="modalecompetences">Compétences</p>
                            <ul id="modaleul">
                                ${projet.competences.map(comp => `<li>${comp}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    `).join('');
}

addProjects()