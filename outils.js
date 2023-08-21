const outilsData = [
    {
        imgSrc: "images/outils/Vscode.webp",
        alt: "Logo de VsCode",
        name: "Visual Studio Code",
        stars: 5
    },
    {
        imgSrc: "images/outils/Github.webp",
        alt: "Logo de Github",
        name: "Git / Github",
        stars: 4
    },
    {
        imgSrc: "images/outils/Figma.webp",
        alt: "Logo de Figma",
        name: "Figma",
        stars: 3
    }
];

function addTools() {

    const container = document.getElementById("container_articles_outils");
    container.innerHTML = outilsData.map(outil => `
        <article class="article_outil">
        <img src="${outil.imgSrc}" alt="${outil.alt}">
        <div class="texte_article_outil">
            <div class="descriptif_article_outil">
                <h3>${outil.name}</h3>
            </div>
            <div class="star_article_outil">
                ${Array.from({ length: 5 }, (_, index) => `
                    <i class="fa-solid fa-star${index < outil.stars ? '' : '-grise'}"></i>
                `).join('')}
            </div>
        </div>
        </article>
    `).join('');
}

addTools()