function changeImage(containerId, largeImagePath, description) {
  var largeImage = document.getElementById("largeImage" + containerId);
  var popisobr = document.getElementById("popisobr" + containerId);
  var largeImageContainer = document.getElementById(
    "largeImageContainer" + containerId
  );

  largeImage.src = largeImagePath;
  popisobr.innerHTML = description;
  largeImageContainer.style.display = "block";
}

function ukazUdaje(event) {
  event.preventDefault();

  var name = document.getElementById("uname").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  var popup = document.getElementById("popup");
  var priestor = document.getElementById("priestor");

  popup.innerHTML =
    "<p><strong>Děkujeme za váš input</strong></p>" +
    "<p>Jméno a Příjmení :" +
    name +
    "</p>" +
    "<p>Email : " +
    email +
    "</p>" +
    "<p>Vaše poznámka : " +
    comment +
    "</p>" +
    '<button onclick="zatvor()">Zavřít</button>';

  popup.style.display = "block";
  priestor.style.display = "block";
}

function zatvor() {
  popup.style.display = "none";
  priestor.style.display = "none";
}

priestor.addEventListener("click", function (event) {
  if (event.target === priestor) {
    zatvor();
  }
});

function rolluj(containerId) {
  var textContainer = document.getElementById(containerId);
  textContainer.style.display =
    textContainer.style.display === "none" ? "block" : "none";
}
