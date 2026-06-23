const btn = document.getElementById("btn")! as HTMLButtonElement;
const todoInput = document.getElementById("todoInput");

function handleClick() {
    const inputVal = (<HTMLButtonElement>todoInput).value;
    console.log(inputVal);
    (<HTMLButtonElement>todoInput).value = "";
}

btn.addEventListener("click", handleClick);

