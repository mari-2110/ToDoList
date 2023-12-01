const inputField = document.querySelector('#inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

toDoContainer.style.display = 'none';

inputField.addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
        toDoContainer.appendChild(item);
    }
})

btn.addEventListener("click", () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    
    toDoContainer.appendChild(item);

    toDoContainer.style.display = 'block';

    item.addEventListener('click', function() {
        item.classList.add('toDoCompleted');
    })
    
    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
        
    })

    
})
toDoContainer.style.display = 'none';












