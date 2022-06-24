import projects from './projects.js';

const myProjectsDiv = document.getElementById('my-projects');

function createProjectContainer() {
    const container = document.createElement('div');

    container.className = 'col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center d-flex';
    return container;
}

function createCard(project) {
    const card = document.createElement('div');
    card.className = "card";
    card.style = "width: 18rem;"
    const img = document.createElement('img');
    card.appendChild(img);
    img.className = "card-img-top";
    img.src = project.imgSrc;
    img.alt = project.imgAlt;
    img.style = "height: auto; width: auto;";
    const cardBody = document.createElement('div');
    card.appendChild(cardBody);
    cardBody.className = "card-body";
    const cardTitle = document.createElement('h5');
    cardBody.appendChild(cardTitle);
    cardTitle.className = "card-title";
    cardTitle.innerHTML = project.title;
    const pText = document.createElement('p');
    pText.className = "card-text";
    pText.innerHTML = project.desc;
    cardBody.appendChild(pText);
    card.appendChild(cardBody);
    const divHref = document.createElement('div')
    divHref.className = "align-items-center p-3";
    if (!project.isBtnDisabled) {
        const aGitHub = document.createElement('a')
        aGitHub.style = "display: block";
        aGitHub.target = "_blank";
        aGitHub.href = project.github;
        aGitHub.className = "btn btn-primary";
        aGitHub.innerHTML = "GitHub";
        divHref.appendChild(aGitHub);
    }
    card.appendChild(divHref);

    return card;
}

function prepareProjectContainer(mainContainer, project) {
    const card = createCard(project);
    mainContainer.appendChild(card);
}

for (const project of projects) {
    const mainContainer = createProjectContainer();
    prepareProjectContainer(mainContainer, project);
    myProjectsDiv.appendChild(mainContainer);
}