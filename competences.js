const competencesData = [
    {
        imgSrc: "images/competences/Html.webp",
        alt: "Logo HTML5",
        name: "HTML",
        stars: 5
    },
    {
        imgSrc: "images/competences/Css.webp",
        alt: "Logo CSS",
        name: "CSS",
        stars: 5
    },
    {
        imgSrc: "images/competences/JavaScript.webp",
        alt: "Logo JavaScript",
        name: "JavaScript",
        stars: 3
    },
    {
        imgSrc: "images/competences/ReactJS.webp",
        alt: "Logo React.js",
        name: "React.js",
        stars: 3
    },
    {
        imgSrc: "images/competences/NodeJS.webp",
        alt: "Logo Node.js",
        name: "Node.js",
        stars: 2
    },
    {
        imgSrc: "images/competences/MongoDB.webp",
        alt: "Logo MongoDB",
        name: "MongoDB",
        stars: 2
    }
];

function addCompetences() {
    const container = document.getElementById("container_articles_competences");

    container.innerHTML = competencesData.map(competence => `
        <article class="article_competence">
            <img src="${competence.imgSrc}" alt="${competence.alt}">
            <div class="description_article_competence">
                <div class="texte_article_competence">
                    <h3>${competence.name}</h3>
                </div>
                <div class="star_article">
                    ${Array.from({ length: 5 }, (_, index) => `
                        <i class="fa-solid fa-star${index < competence.stars ? '' : '-grise'}"></i>
                    `).join('')}
                </div>
            </div>
        </article>
    `).join('');
}


addCompetences()