// const allTexts = document.querySelectorAll('.container p');
// const allButtons = document.querySelectorAll('.container button');

// for (let i = 0; i < allButtons.length; i++) {
//     let flag = false;
//     let currButton = allButtons[i]
//     currButton.addEventListener('click', function() {
//         if (flag) {
//             currButton.textContent = 'Edit';
//             allTexts[i].removeAttribute('contentEditable');
//         } else {
//             currButton.textContent = 'Ok'
//             allTexts[i].setAttribute('contentEditable', true);
//         }
//         editMode = !editMode;
//     })
// }

const titleInput = document.querySelector('.create-block__inputs input');
const areaInput = document.querySelector('.create-block__inputs textarea');
const dateInput = document.querySelector('.date-block input');
const listOfNoteses = document.querySelector('.set-notices');
const addButton = document.querySelector('.create-block__button button');

let editMode = false;
document.querySelector('.set-notices').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        let clickedEditButton = event.target;
        let parentContainer = clickedEditButton.closest('.set-notices__item'); // Находим контейнер с помощью closest
        let titleInput = parentContainer.querySelector('h3'); // Находим заголовок в контейнере
        let descriptionInput = parentContainer.querySelector('.description'); // Находим описание в контейнере
        if (editMode) {
            clickedEditButton.textContent = 'Edit'
            titleInput.removeAttribute('contentEditable');
            descriptionInput.removeAttribute('contentEditable');
        } else {
            clickedEditButton.textContent = 'Save'
            titleInput.setAttribute('contentEditable', true);
            descriptionInput.setAttribute('contentEditable', true);
            titleInput.focus();
        }
        editMode = !editMode;
    }
});

addButton.addEventListener('click', function () {
    createNote(titleInput.value, areaInput.value, dateInput.value)
})

function createNote(title, description, date) {
    let containerNote = document.createElement('div');
    containerNote.classList.add('set-notices__item')
    let titleNote = document.createElement('h3');
    titleNote.textContent = title;
    containerNote.appendChild(titleNote);
    let descriptionNote = document.createElement('p');
    descriptionNote.classList.add('description')
    descriptionNote.textContent = description;
    containerNote.appendChild(descriptionNote);

    let containerDate = document.createElement('div');
    containerDate.classList.add('date');
    let currentDate = document.createElement('p');
    let createDate = new Date();
    let day = createDate.getDate();
    let month = createDate.getMonth() + 1;
    let year = createDate.getFullYear();
    let formattedDate = `${year}-${day}-${month}`;
    let currSpan = document.createElement('span');
    currSpan.textContent = ':date created';
    currentDate.textContent = formattedDate;
    currentDate.appendChild(currSpan)
    let executeDate = document.createElement('p');
    let executeSpan = document.createElement('span');
    executeSpan.textContent = ':date execute';
    executeDate.textContent = date;
    executeDate.appendChild(executeSpan);
    containerDate.appendChild(currentDate);
    containerDate.appendChild(executeDate);
    containerNote.appendChild(containerDate);

    let buttonEdit = document.createElement('button');  
    buttonEdit.textContent = 'edit'
    containerNote.appendChild(buttonEdit);
    listOfNoteses.appendChild(containerNote)
}









