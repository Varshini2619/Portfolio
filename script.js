const professions = ["Web Developer", "UI/UX Designer"];
let index = 0;

function rotateProfession() {
  const professionEl = document.getElementById("profession");
  professionEl.textContent = professions[index];
  index = (index + 1) % professions.length;
}

setInterval(rotateProfession, 2000);
rotateProfession();
