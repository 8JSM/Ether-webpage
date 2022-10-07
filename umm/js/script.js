const idInput = document.querySelector("#username");
const passwordInput = document.querySelector("#assword");
const button = document.querySelector("#btn waves-effect waves-light");
const form = document.querySelector("#login-form");


function formSubmit(event) {
    event.preventDefault;
    const id = idInput.value; 
    localStorage.setItem("username", id);
    form.className.add("hidden");
}

form.addEventListener("submit", formSubmit);

