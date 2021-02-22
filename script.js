// selecting elements and assigning to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');



// functions
let createTask = function(task){
  let listItem = document.createElement('li');
  let checkbox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = task;
  checkbox.type = 'checkbox';

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";

    // checkbox click function
    bindIncompleteItems(listItem,completeTask);
}

let completeTask= function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteTask(listItem,deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
 
let bindCompleteTask = function(taskItem,deleteButtonClick){
  let deleteButton  = taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonClick;
}

let bindIncompleteItems = function(taskItem,checkboxClick){
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

for(let i=0;i<todoUl.children.length;i++){
    bindIncompleteItems(todoUl.children[i],completeTask)
}

for(let i=0;i<completeUl.children.length;i++){
    bindCompleteTask(completeUl.children[i],deleteTask)
}
form.addEventListener('submit', addTask);