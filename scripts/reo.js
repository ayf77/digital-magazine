//Dropdown Mobile Menu
function toggleMenu() {
  var x = document.getElementsByClassName('link');
  for (let i = 0; i < x.length; i++) {
    x[i].classList.toggle('hide');
  }
}

//----------------------------------------------------------------------------------------------------------------------------------------------//
//Reo Page

//Audio for Pokemon cries
//For Corsola
document.querySelectorAll("#corsola").forEach(img => {
  img.addEventListener("mouseover", () => {
    new Audio("audio/cry-corsola.mp3").play();
  });
});

//For Marshadow
document.querySelectorAll("#marshadow").forEach(img => {
  img.addEventListener("mouseover", () => {
    new Audio("audio/cry-marshadow.mp3").play();
  });
});

//For Froslass
document.querySelectorAll("#froslass").forEach(img => {
  img.addEventListener("mouseover", () => {
    new Audio("audio/cry-froslass.mp3").play();
  });
});

//Spiritomb
document.querySelectorAll("#spiritomb").forEach(img => {
  img.addEventListener("mouseover", () => {
    new Audio("audio/cry-spiritomb.mp3").play();
  });
});

//Hisuian Zoroark
document.querySelectorAll("#zoroark").forEach(img => {
  img.addEventListener("mouseover", () => {
    new Audio("audio/cry-zoroark.mp3").play();
  });
});


