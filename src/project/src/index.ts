const btn = document.getElementById("btn")! as HTMLButtonElement;
const todoInput = document.getElementById("todoInput");

function handleClick() {
    const inputVal = (<HTMLInputElement>todoInput).value;
    console.log(inputVal);
    (<HTMLInputElement>todoInput).value = "";
}

btn.addEventListener("click", handleClick);

