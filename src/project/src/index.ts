const todoInput = document.getElementById("todoInput")! as HTMLInputElement;
const todoList = document.getElementById("todoList")! as HTMLUListElement
const formEl = document.querySelector("form")!;

interface Todo {
    text: string;
    checked: boolean
};

const todos: Todo[] = [];

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
    
    // append checkbox to li
    li.append(checkbox);

    return li;

}

formEl.addEventListener("submit", handleSubmit);


