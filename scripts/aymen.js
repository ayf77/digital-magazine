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
  document.querySelectorAll("#machamp").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-machamp.mp3").play();
    });
  });
  
  //For Marshadow
  document.querySelectorAll("#gallade").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-gallade.mp3").play();
    });
  });
  
  //For Froslass
  document.querySelectorAll("#infernape").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-infernape.mp3").play();
    });
  });
  
  //Spiritomb
  document.querySelectorAll("#toxicroak").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-toxicroak.mp3").play();
    });
  });
  
  //Hisuian Zoroark
  document.querySelectorAll("#lucario").forEach(img => {
    img.addEventListener("mouseover", () => {
      new Audio("audio/cry-lucario.mp3").play();
    });
  });
  
  
  