function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  function createNewToDo() {
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: id
    });

    id++;

    console.log(toDos);

    NEW_TODO_TEXT.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const TODO_LIST = document.getElementById('toDoList');
    TODO_LIST.textContent = '';

    toDos.forEach(function(toDo) {
      const NEW_LI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";

      const DELETE_BTN = document.createElement('button');
      DELETE_BTN.textContent = "Delete!";

      DELETE_BTN.addEventListener('click', event => {
        toDos = toDos.filter(function(item) {
          return item.id !== toDo.id;
        })

        renderTheUI();
      });

      NEW_LI.textContent = toDo.title;

      TODO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(DELETE_BTN);
    });
  }

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
}

window.onload = function() {
  onReady();
};
