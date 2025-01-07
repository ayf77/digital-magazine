//Dropdown Mobile Menu
function toggleMenu() {
    var x = document.getElementsByClassName('link');
    for (let i = 0; i < x.length; i++) {
      x[i].classList.toggle('hide');
    }
}

//Audio for Pokemon cries
//Walrein
document.querySelectorAll("#walrein").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-walrein.mp3").play();
    });
  });
  
  //Glaceon
  document.querySelectorAll("#glaceon").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-glaceon.mp3").play();
    });
  });
  
  //Avalugg
  document.querySelectorAll("#avalugg").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-avalugg.mp3").play();
    });
  });
  
  //Delibird
  document.querySelectorAll("#delibird").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-delibird.mp3").play();
    });
  });
  
  //Abomasnow
  document.querySelectorAll("#abomasnow").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-abomasnow.mp3").play();
    });
  });
  