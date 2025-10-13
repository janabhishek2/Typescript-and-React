const inputEl = document.getElementById("input-element");

// type narrowing
if(!inputEl) {
    throw new Error("input element not found !!");
}

inputEl.value = 1234;