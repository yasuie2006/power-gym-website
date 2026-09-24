const form = document.getElementById("joinForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const plan = document.getElementById("plan").value;

    message.textContent =
        "Thank you, " + name + "! You selected the " + plan + " membership.";

    form.reset();

});