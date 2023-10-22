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
    // Si un ou plusieurs champs sont vides
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    showError(); // Montrer le message d'erreur
  } else {
    // Sinon, afficher le nouveau commentaire
    newComment();
  }
  e.preventDefault();
});

function showError() {
  errorMessage.style.display = "block";
}

function newComment() {}
