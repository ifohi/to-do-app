function onReady() {
    const toDos = []; // state is an array of to-dos
    const addToDoForm = document.getElementById('addToDoForm'); // used to call the createNewToDo() function
    let id = 0;
    const submitButton = document.getElementById('submitButton');


    function renderTheUI() {
        const toDoList = document.getElementById('toDoList'); // access <ul> in HTML

        toDoList.textContent = ''; // set newLi to new string before forEach function

        toDos.forEach(function(toDo) { // applies each function to each item in array - render each to-do as a li in the ul
            const newLi = document.createElement('li'); // creating the li
            const checkbox = document.createElement('input'); // creating checkbox
            checkbox.type = "checkbox";

            newLi.textContent = toDo.title; // adds the toDo's title text next to newLi

            toDoList.appendChild(newLi); // updates the DOM
            newLi.appendChild(checkbox); // updates the DOM
        });
    }

    function createNewToDo() { // change state by adding new to-dos. this function updates array of to-dos
        const newToDoText = document.getElementById('newToDoText'); //access the text input
        const deleteButton = document.createElement('deleteButton');
        if (!newToDoText.value) {
            return; // prevents from submitting empty to-dos
        }

        toDos.push({ //add new to-do to the toDos array by using push()
            title: newToDoText.value,
            complete: false,
            id: ++id
        });
        newToDoText.value = ''; //clear text field for user
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList'); // call renderTheUI each time state changes (adds a new to-do)
        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
            const newLi = document.createElement('li'); // creates new li
            const checkbox = document.createElement('input'); // to-dos title text next to li
            const deleteButton = document.createElement('input'); // text input linked to "delete" text

            checkbox.type = "checkbox";


            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);


            deleteButton.addEventListener('click', event => {
                event.preventDefault();

                toDoList.removeChild(newLi) // deletes html elements

                //todos.filter
                const toRemoveId = toDo.id;
                const filteredTodos = toDos.filter(toDo => toDo.id !== toRemoveId);
                todos = filteredTodos; // new array after deletion

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
