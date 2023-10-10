const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please, fill all gaps!");
    }
    console.log({Email: email.value, Password: password.value})
    form.reset();
});