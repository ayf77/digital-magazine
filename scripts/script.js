const $carousel = document.getElementById('carousel')

const $left = $carousel.querySelector('.carousel__left')
const $right = $carousel.querySelector('.carousel__right')

$left.addEventListener('click', Left)
$right.addEventListener('click', Right)

let bannerLoop = setInterval(Right, 5000)

function Left() {
  clearInterval(bannerLoop)
  bannerLoop = setInterval(Right, 5000)

  const $images = $carousel.querySelector('.inner_carousel')
  const $focus = $carousel.querySelector('.carousel--focus')

  if ($focus == null) {
    const $lastImage = $images.lastElementChild
    const $penultimateImage = $lastImage.previousElementSibling
    $penultimateImage.classList.add('carousel--focus')
  }
  else {
    const $previous = $focus.previousElementSibling

    if ($previous == null) {
      $images.lastElementChild.classList.add('carousel--focus');
    }

    else {
      $previous.classList.add('carousel--focus')

    }

    const $last = $carousel.querySelector('.carousel--last')

    if ($last != null) {
      $last.classList.remove('carousel--last')
    }

    $focus.classList.remove('carousel--focus')
    $focus.classList.add('carousel--last')
  }
}

function Right() {

  clearInterval(bannerLoop)

  bannerLoop = setInterval(Right, 5000)

  const $images = $carousel.querySelector('.inner_carousel')
  const $focus = $carousel.querySelector('.carousel--focus')

  if ($focus == null) { 
    $images.firstElementChild.classList.add('carousel--focus') 
  }
  else {
    const $next = $focus.nextElementSibling
    if ($next == null) {
      $images.firstElementChild.classList.add('carousel--focus');
    }

    else {
      $next.classList.add('carousel--focus')

    }

    const $last = $carousel.querySelector('.carousel--last')

    if ($last != null) {
      $last.classList.remove('carousel--last')
    }

    $focus.classList.remove('carousel--focus')
    $focus.classList.add('carousel--last')
  }


}

//Onclick linking to our pages
//Reo
reoBanner = document.getElementById('banner-reo');
reoBanner.addEventListener('click', () => {
  open(href="reo.html", target="_self");
}
)

//Mel
melBanner = document.getElementById('banner-mel');
melBanner.addEventListener('click', () => {
  open(href="mel.html", target="_self");
}
)


//Aymen
aymenBanner = document.getElementById('banner-aymen');
aymenBanner.addEventListener('click', () => {
  open(href="aymen.html", target="_self");
}
)

//----------------------------------------------------------------------------------------------------------------------------------------------//
//Menu
function toggleMenu() {
    var x = document.getElementsByClassName('link');
    for (let i = 0; i < x.length; i++) {
      x[i].classList.toggle('hide');
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------//
//Guest Wallpaper Change
wallpaper = document.getElementById('guests-background');
button = document.getElementsByClassName('guest-button');

//Reo Background
document.getElementById('reo-bkgd').addEventListener('mouseover', () => {
  wallpaper.id = 'reo-guest';
  // wallpaper.style.backgroundImage = "linear-gradient(rgba(35, 23, 52, 0.7), rgba(35, 23, 52, 0.7)), url('/images/wallpaper-ghost-2.jpg')";
  for (let i = 0; i < 4; i++){
    button[i].style.color = "#ffffff";
    button[i].classList.add("ghost");
    button[i].classList.remove("fighting");
    button[i].classList.remove("ice");
  }
  button[0].classList.toggle("ghost"); //Getting rid of background color on the header
});

//Aymen Background
document.getElementById('aymen-bkgd').addEventListener('mouseover', () => {
  wallpaper.id = 'aymen-guest';
  // wallpaper.style.backgroundImage = "linear-gradient(rgba(35, 23, 52, 0.7), rgba(35, 23, 52, 0.7)), url('/images/wallpaper-fighting.jpg')"; //CHANGE LINEAR GRADIENT
  for (let i = 0; i < 4; i++){
    button[i].style.color = "#ffffff";
    button[i].classList.add("fighting");
    button[i].classList.remove("ice");
    button[i].classList.remove("ghost");
  }
  button[0].classList.toggle("fighting"); //Getting rid of background color on the header
});

//Mel Background WIP
document.getElementById('mel-bkgd').addEventListener('mouseover', () => {
  wallpaper.id = 'mel-guest';
  // wallpaper.style.backgroundImage = "linear-gradient(rgba(35, 23, 52, 0.2), rgba(35, 23, 52, 0.2)), url('/images/wallpaper-ice.jpg')"; //CHANGE LINEAR GRADIENT
  for (let i = 0; i < 4; i++){
    button[i].style.color = "#000000";
    button[i].classList.add("ice");
    button[i].classList.remove("fighting");
    button[i].classList.remove("ghost");
  }
  button[0].classList.toggle("ice"); //Getting rid of background color on the header
});

