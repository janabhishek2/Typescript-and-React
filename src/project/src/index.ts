const todoInput = document.getElementById("todoInput")! as HTMLInputElement;
const todoList = document.getElementById("todoList")! as HTMLUListElement
const formEl = document.querySelector("form")!;

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    
    // Get the input 
    const value = todoInput.value;

    // create a new <li />
    const li = document.createElement("li") as HTMLLIElement;
    li.textContent = value;

    // Create an unchecked checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // append checkbox to li
    li.append(checkbox);

    // Add to list 
    todoList.appendChild(li);

    // reset input
    todoInput.value = "";
}

formEl.addEventListener("submit", handleSubmit);


