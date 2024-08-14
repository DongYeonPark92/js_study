const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDo = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDo));
}

function deleteTodo(event) {
    const deleteList = event.target.parentElement;
    deleteList.remove();
    toDo = toDo.filter((toDo) => toDo.id !== parseInt(deleteList.id));
    saveToDo();
}
function paintToDo(newToDoList) {
    const li = document.createElement("li");
    li.id = newToDoList.id;
    const span = document.createElement("span");
    span.innerText = newToDoList.text;
    const button = document.createElement("button");
    button.classList.add("todo-button");
    button.innerText = "💯"
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoList = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDoList
    }
    toDo.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("This is the turn of", item)
}
const savedTodo = localStorage.getItem(TODOS_KEY);
console.log(savedTodo);

if (savedTodo !== null) {
    const parsedToDos = JSON.parse(savedTodo);
    toDo = parsedToDos;
    parsedToDos.forEach(paintToDo);
}   
