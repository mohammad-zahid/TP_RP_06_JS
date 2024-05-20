document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      addTodo(todoInput.value);
      todoInput.value = '';
  });

  function addTodo(task) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');

      const taskText = document.createElement('span');
      taskText.textContent = task;

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '&times;';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
          todoList.removeChild(todoItem);
      });

      todoItem.appendChild(taskText);
      todoItem.appendChild(deleteBtn);
      todoList.appendChild(todoItem);
  }
});
