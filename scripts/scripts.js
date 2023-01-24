// buttons
function scrollToProjects() {
  // alert('working');
  document.getElementById("projects").scrollIntoView();
}

function scrollHome() {
  document.getElementById("home").scrollIntoView();
}

function randomColor() {
  const homeButton = document.getElementById("home-button");
  const colors = ["#4285f4", "#db4437", "#f4b400", "#0f9d58"];
  const colorsRgb = [
    "rgb(66, 133, 244)",
    "rgb(219, 68, 55)",
    "rgb(244, 180, 0)",
    "rgb(15, 157, 88)",
  ];

  function getRandomNumber() {
    return Math.floor(Math.random(0, 3) * colors.length);
  }
  let random = getRandomNumber();
  homeButton.style.backgroundColor = colorsRgb[random];
}

function whiteBg() {
  document.getElementById("home-button").style.backgroundColor = "#fff";
}

function openSideNav() {
  document.getElementById("navbar-section").classList.add("overlay-navbar");
  document.getElementById("navbar-section").style.width="0vw";
  document.getElementById("overlay-div").style.width = "100vw";
  const overlayButtons = document.querySelectorAll(".overlay-btn");
  overlayButtons.forEach((button) => {
    button.style.color = "#fff";
  });
  
}

function closeSideNav() {
  document.getElementById("navbar-section").classList.remove("overlay-navbar");
  document.getElementById("navbar-section").style.width="100%";
  document.getElementById("overlay-div").style.width = "0vw";
  const overlayButtons = document.querySelectorAll(".overlay-btn");
  overlayButtons.forEach((button) => {
    button.style.color = "transparent";
  });
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
}

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  const isOpened = menuButton.getAttribute("aria-expanded");
  if (isOpened === "false") {
    menuButton.setAttribute("aria-expanded", "true");
    openSideNav();
  } else {
    menuButton.setAttribute("aria-expanded", "false");
    closeSideNav();
  }
});

function addScrollHomeButton() {
  if (window.scrollY >= sticky) {
    document.getElementById("scrollHomeBtn").style.display = "inline";
  } else {
    document.getElementById("scrollHomeBtn").style.display = "none";
  }
}

// sticky header
window.onscroll = function () {
  addStickyHeader();
  addScrollHomeButton();
};

const navbar = document.getElementById("navbar-section");
const sticky = navbar.offsetTop;

function addStickyHeader() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// footer
function setDate() {
  const date = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  document.getElementById("date").innerHTML = date.toLocaleDateString(
    "en-US",
    options
  );
}

setDate();
