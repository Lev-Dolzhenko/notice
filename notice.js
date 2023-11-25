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

document.querySelector('.set-notices').addEventListener('click', function (event) {
    if (event.target.className === 'image-edit') {
        let clickedEditButton = event.target;
        let parentContainer = clickedEditButton.closest('.set-notices__item'); // Находим контейнер с помощью closest
        let titleInput = parentContainer.querySelector('h3'); // Находим заголовок в контейнере
        let descriptionInput = parentContainer.querySelector('.description'); // Находим описание в контейнере
        let clickedCheckButton = parentContainer.querySelector('.image-check');
        console.log('Click')
        // let flag = false;
        // if (flag) {
        //     clickedCheckButton.classList.remove('none')
        //     clickedEditButton.classList.add('none')
        //     titleInput.removeAttribute('contentEditable');
        //     descriptionInput.removeAttribute('contentEditable');
        // } else {
        //     clickedCheckButton.classList.add('none')
        //     clickedEditButton.classList.remove('none')
        //     titleInput.setAttribute('contentEditable', true);
        //     descriptionInput.setAttribute('contentEditable', true);
        // }
        // flag = !flag
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
    currentDate.textContent = formattedDate;
    let executeDate = document.createElement('p');
    executeDate.textContent = date;
    containerDate.appendChild(currentDate);
    containerDate.appendChild(executeDate);
    containerNote.appendChild(containerDate);
    let imageEdit = document.createElement('img');
    imageEdit.classList.add('image-edit')
    imageEdit.src = '/img/icon-edit.png';
    containerNote.appendChild(imageEdit)
    let imageCheck = document.createElement('img');
    imageCheck.classList.add('image-check')
    imageCheck.src = '/img/icon-check.png';
    imageCheck.classList.add('none')
    containerNote.appendChild(imageCheck)

    listOfNoteses.appendChild(containerNote)
}









