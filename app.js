function onReady() {
    let toDos = []; // state is an array of to-dos
    const addToDoForm = document.getElementById('addToDoForm'); // used to call the createNewToDo() function
    let id = 0;
    const submitButton = document.getElementById('submitButton');

    function createNewToDo() { // change state by adding new to-dos. this function updates array of to-dos
        let newToDoText = document.getElementById('newToDoText'); //access the text input
        let deleteButton = document.createElement('deleteButton');
        if (!newToDoText.value) {
            return; // prevents submitting empty to-dos
        }

        toDos.push({ //add new to-do to the toDos array by using push()
            title: newToDoText.value,
            complete: false,
            id: ++id
        });
        newToDoText.value = ''; //clear text field for user
    }

    // Delete to-do item
    function deleteToDo(id) {
      toDos = toDos.filter(item => item.id !== id);
    }

    function renderTheUI() {
        let toDoList = document.getElementById('toDoList'); // access <ul> in HTML

        toDoList.textContent = ''; // set newLi to new string before forEach function

        toDos.forEach(function(toDo) { // applies each function to each item in array - render each to-do as a li in the ul
            let newLi = document.createElement('li'); // creates the li
            let checkbox = document.createElement('input'); // creates checkbox
            checkbox.type = "checkbox";


            newLi.textContent = toDo.title; // adds the toDo's title text next to newLi

            toDoList.appendChild(newLi); // updates the DOM
            newLi.appendChild(checkbox); // updates the DOM

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            newLi.appendChild(deleteButton);

            deleteButton.addEventListener('click', event => {
                deleteToDo(toDo.id);
                renderTheUI();
            });
        });
    }

    addToDoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        createNewToDo();
        newToDoText = '';
        renderTheUI();
    });

    renderTheUI();

}

// event that detects the page load
window.onload = function() {
    onReady();
};
