document.addEventListener("DOMContentLoaded", function () 
{
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (emailInput.value.trim() === "") 
        {
            emailInput.classList.add("red-border");

        } 
        else 
        {
            emailInput.classList.remove("red-border");
        }

        if (passwordInput.value.trim() === "") 
        {
            passwordInput.classList.add("red-border");
        } 
        else 
        {
            passwordInput.classList.remove("red-border");
        }
    });

    emailInput.addEventListener("input", function () 
    {
        emailInput.classList.remove("red-border");
    });

    passwordInput.addEventListener("input", function () 
    {
        passwordInput.classList.remove("red-border");
    });
});
