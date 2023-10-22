// Récupération des éléments du DOM

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");
const commentList = document.getElementById("comment-list");

// Évènement submit

form.addEventListener("submit", (e) => {
  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    showError(); // Montrer le message d'erreur
  }
  e.preventDefault();
});

function showError() {
  errorMessage.style.display = "block";
}
