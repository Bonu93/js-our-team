/* 
Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

// members (objects) array 
const members = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO', 
        image : './img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name : 'Angela Caroll',
        role : 'Chief Editor', 
        image : './img/angela-caroll-chief-editor.jpg',
    },

    {
        name : 'Walter Gordon',
        role : 'Office Manager', 
        image : './img/walter-gordon-office-manager.jpg',
    },

    {
        name : 'Angela Lopez',
        role : 'Social Media Manager', 
        image : './img/angela-lopez-social-media-manager.jpg',
    },

    {
        name : 'Scott Estrada',
        role : 'Developer', 
        image : './img/scott-estrada-developer.jpg',
    },

    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer', 
        image : './img/barbara-ramos-graphic-designer.jpg',
    },
];

// dom refs 
const teamContainer = document.querySelector('.team-container');
const addBtn = document.getElementById('addMemberButton');
const addName = document.getElementById('name');
const addRole = document.getElementById('role');
const addImg = document.getElementById('image');

printObjectsInDom(members, teamContainer);

addBtn.addEventListener('click', () => {
    members.push(
        {
            name : addName.value.trim(),
            role : addRole.value.trim(),
            image : addImg.value.trim(),
        },
    )
    printObjectsInDom(members, teamContainer);
})









/* FUNCTIONS */

/**
 * 
 * @param {array} objectsArray 
 * @param {node} container 
 * prints in dom objects from an array 
 */
function printObjectsInDom (objectsArray, container) {
    container.innerHTML = ''
    for (let key in objectsArray) {
        let member = objectsArray[key];
        container.innerHTML += `
        <div class="team-card">
        <div class="card-image">
          <img
            src="${member.image}"
            alt="${member.name}"
          />
        </div>
        <div class="card-text">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
      </div>`
    }
}