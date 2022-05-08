const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo (event) {
    // console.log(e.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click" , deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


// function sayHello (item) {
//     console.log("this is the turn of" , item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
// just string
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach(paintToDo);
}