const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDo = [];

function saveToDo() {
    localStorage.setItem("todo", JSON.stringify(toDo));
}

function deleteTodo(event) {
    const deleteList = event.target.parentElement;
    deleteList.remove(deleteList);
}
function paintToDo(newToDoList) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDoList;
    const button = document.createElement("button");
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
    toDo.push(newToDoList);
    paintToDo(newToDoList);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);