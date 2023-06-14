let taskInput = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  let taskText = taskInput.value;
  if (taskText !== '') {
    let taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span class="task-text">${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskItem.querySelector('.checkbox').addEventListener('change', toggleTaskStatus);
    taskItem.querySelector('.delete-button').addEventListener('click', deleteTask);
  }
}

function toggleTaskStatus() {
  let taskText = this.nextElementSibling;
  if (this.checked) {
    taskText.classList.add('completed');
  } else {
    taskText.classList.remove('completed');
  }
}

function deleteTask() {
  let taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}

