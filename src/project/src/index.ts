const todoInput = document.getElementById("todoInput")! as HTMLInputElement;
const todoList = document.getElementById("todoList")! as HTMLUListElement
const formEl = document.querySelector("form")!;

interface Todo {
    text: string;
    checked: boolean
};

let todos: Todo[] = [];

const fetchTodos = () => {
    let lsTodos = localStorage.getItem("todos");
    if(lsTodos) {
        todos = JSON.parse(lsTodos)!;
        todos.forEach((todo) => {
            todoList.append(createTodo(todo));
        })
    }
}

fetchTodos();

const handleCheckBoxCheck = (e: Event, todo: Todo) => {
    if(todo.text) {
        // Update checked state of item
        let item = todos.find((item) => item.text === todo.text);
        if(item) {
            item.checked = todo.checked;
        }

        console.log(todos, item);
        // Update LS
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    
    // Get the input 
    const value = todoInput.value;

    // Create the todo item;
    const todo: Todo = {
        text: value,
        checked: false
    };

    todos.push(todo);

    const li = createTodo(todo);

    // Add to list 
    todoList.appendChild(li);

    // Set localstorage
    localStorage.setItem("todos", JSON.stringify(todos));

    // reset input
    todoInput.value = "";
}

function createTodo(todo: Todo): HTMLLIElement {

    const {
        text,
        checked
    } = todo;

     // create a new <li />
    const li = document.createElement("li") as HTMLLIElement;
    li.textContent = text;

    // Create an unchecked checkbox
    const checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    checkbox.addEventListener("change", (e: Event) => {
        todo.checked = checkbox.checked;
        handleCheckBoxCheck(e, todo);
    })
    
    // append checkbox to li
    li.append(checkbox);

    return li;

}

formEl.addEventListener("submit", handleSubmit);


