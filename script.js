const input = document.querySelector('input');
const addToDoBtn = document.querySelector('form button');
const toDos = document.querySelector('.todos');

function addToDo(text) {
    console.log(text)
    // create li
    const newLi = document.createElement('li');
    newLi.classList.add('todo')
    // create span
    const newSpan = document.createElement('span');
    newSpan.innerHTML = text;
    newLi.appendChild(newSpan)
    // create check icon
    const squareIcon = document.createElement('i');
    squareIcon.classList.add('fas', 'fa-square', 'first-icon');
    newLi.appendChild(squareIcon)
    // create trash icon
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash');
    newLi.appendChild(trashIcon)


    toDos.appendChild(newLi)
    input.value = ''
}

addToDoBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const text = input.value;
    if (!text) return;
    addToDo(text)
})

toDos.addEventListener('click', function handleClick(event) {
    console.log(event.target)
    const selectedElement = event.target
    if (selectedElement.classList.contains('fa-square')) {
        selectedElement.parentElement.classList.add('completed')
       selectedElement.classList.replace('fa-square', 'fa-check-square') 
    }
    else if (selectedElement.classList.contains('fa-check-square')) {
        selectedElement.parentElement.classList.remove('completed')
       selectedElement.classList.replace('fa-check-square', 'fa-square') 
    }
    else if(selectedElement.classList.contains('fa-trash')) {
        if(confirm('are you sure that you want to delete this todo?')) {
            selectedElement.parentElement.remove()
        }
    }
})


