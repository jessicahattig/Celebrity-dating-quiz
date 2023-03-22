// User Interface Logic

function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("bradpitt").setAttribute("class", "hidden");
  document.getElementById("superman").setAttribute("class", "hidden");
  document.getElementById("jimmycarter").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (age && height) {
      if (age >= 35 && height >= 60) {
        document.getElementById("bradpitt").removeAttribute("class");
        document.getElementById("jimmycarter").removeAttribute("class");
      } else if (age >= 90 || height >= 72) {
        document.getElementById("bradpitt").removeAttribute("class");
        document.getElementById("jimmycarter").removeAttribute("class");
        document.getElementById("superman").removeAttribute("class");
      } else if (age >= 50) {
        document.getElementById("bradpitt").removeAttribute("class");
        document.getElementById("superman").removeAttribute("class")
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
      } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};