const todoInput = document.getElementById("todoInput")! as HTMLInputElement;

const formEl = document.querySelector("form")!;

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const value = todoInput.value;
    console.log(value);

    // Clear input
    todoInput.value = "";
}

formEl.addEventListener("submit", handleSubmit);


