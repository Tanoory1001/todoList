const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo")

todoButton.addEventListener("click",tDB);
function tDB(firstRT){
    firstRT.preventDefault();
    
    const tDBDiv=document.createElement("div");
    tDBDiv.classList.add("todo");

    const divList=document.createElement("li");
    divList.innerText=todoInput.value;

    saveInformation(todoInput.value);

    divList.classList.add("todo-item");
    tDBDiv.appendChild(divList);
    todoInput.value="";

    const button1=document.createElement("button");
    button1.innerHTML="<i class='fas fa-check'><i/>"
    button1.classList.add("complete-btn");
    tDBDiv.appendChild(button1);

    const button2=document.createElement("button");
    button2.innerHTML="<i class='fas fa-trash'><i/>"
    button2.classList.add("trash-btn");
    tDBDiv.appendChild(button2);

    todoList.appendChild(tDBDiv);
};

function saveInformation(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    } else {
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
};

todoList.addEventListener("click",removecchecktodo);
function removecchecktodo(event){
    const item=event.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        removeLocalTodo(todo)
        todo.remove();
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed")
    }
};

function removeLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    } else {
        todos=JSON.parse(localStorage.getItem("todos"));
    };
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos", JSON.stringify(todos));
};

filterOption.addEventListener("click",filterTodo);
function filterTodo(gama){
const todos=todoList.childNodes;
todos.forEach(function(todo){
    switch(gama.target.value){
        case "all":
        todo.style.display = "flex"
        break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display = "flex";
            } else{
                todo.style.display="none";
            }
        break;
        case "uncompleted":
            if(todo.classList.contains("completed")){
                todo.style.display = "none";
            } else{
                todo.style.display="flex";
            }
        break;
    }
})
};
document.addEventListener("DOMContentLoaded",getTodos);
function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    } else {
        todos=JSON.parse(localStorage.getItem("todos"));
    };
    todos.forEach(function(todo){
    
    const tDBDiv=document.createElement("div");
    tDBDiv.classList.add("todo");

    const divList=document.createElement("li");
    divList.innerText=todo;

    saveInformation(todoInput.value);

    divList.classList.add("todo-item");
    tDBDiv.appendChild(divList);
    todoInput.value="";

    const button1=document.createElement("button");
    button1.innerHTML="<i class='fas fa-check'><i/>"
    button1.classList.add("complete-btn");
    tDBDiv.appendChild(button1);

    const button2=document.createElement("button");
    button2.innerHTML="<i class='fas fa-trash'><i/>"
    button2.classList.add("trash-btn");
    tDBDiv.appendChild(button2);

    todoList.appendChild(tDBDiv);
    })
}
