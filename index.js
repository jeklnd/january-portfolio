///////////////////////////////////////////////

// buttons

///////////////////////////////////////////////

document
  .getElementById("home-button")
  .addEventListener("click", () =>
    document.getElementById("about").scrollIntoView()
  );

document.getElementById("scrollHomeBtn").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView();
});

///////////////////////////////////////////////

// theme coloring

///////////////////////////////////////////////
const colors = [
  "rgb(66, 133, 244)",
  "rgb(219, 68, 55)",
  "rgb(244, 180, 0)",
  "rgb(15, 157, 88)",
];
function getRandomNumber() {
  return Math.floor(Math.random(0, 3) * colors.length);
}
let random = getRandomNumber();

document.querySelector(".name").style.color = colors[random];
document.getElementById("home-button").addEventListener("mouseenter", () => {
  document.getElementById("home-button").style.backgroundColor = colors[random];
});
document.querySelector(".bottom-border").style.backgroundColor = colors[random];

function setNameColor() {
  document.getElementById("home-button").addEventListener("mouseleave", () => {
    document.getElementById("home-button").style.backgroundColor = "#ebebeb";
  });
}

setNameColor();

// function setLinkColors() {
//   document.querySelector(".active").style.color = colors[random];
// }

function openSideNav() {
  document.getElementById("navbar-section").classList.add("overlay-navbar");
  document.getElementById("navbar-section").style.width = "0vw";
  document.getElementById("overlay-div").style.width = "100vw";
  const overlayButtons = document.querySelectorAll(".overlay-btn");
  overlayButtons.forEach((button) => {
    button.style.color = "#fff";
  });
}

function closeSideNav() {
  document.getElementById("navbar-section").classList.remove("overlay-navbar");
  document.getElementById("navbar-section").style.width = "100%";
  document.getElementById("overlay-div").style.width = "0vw";
  const overlayButtons = document.querySelectorAll(".overlay-btn");
  overlayButtons.forEach((button) => {
    button.style.color = "transparent";
  });
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
}
for (child of document.getElementById("overlay-div").children) {
  child.addEventListener("click", closeSideNav);
}

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  const isOpened = menuButton.getAttribute("aria-expanded");
  if (isOpened === "false") {
    menuButton.setAttribute("aria-expanded", "true");
    openSideNav();
    // document.body.style.overflow = "hidden";
  } else {
    menuButton.setAttribute("aria-expanded", "false");
    closeSideNav();
    // document.body.style.overflowY = "scroll";
  }
});

document.querySelector(".menu-button").addEventListener("click", () => {
  if (document.querySelector(".menu-button").ariaExpanded === "true") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

for (link of document.getElementById("overlay-div").children) {
  link.addEventListener("click", () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible";
    }
  });
}

///////////////////////////////////////////////

// onscroll events

///////////////////////////////////////////////
window.onscroll = function () {
  addStickyHeader();
  addScrollHomeButton();
  addSectionHighlighting();
};

const navbar = document.getElementById("navbar-section");
const navbarTop = navbar.offsetTop;

function addStickyHeader() {
  if (window.scrollY > navbarTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function addScrollHomeButton() {
  if (window.scrollY >= navbarTop) {
    document.getElementById("scrollHomeBtn").style.display = "inline";
  } else {
    document.getElementById("scrollHomeBtn").style.display = "none";
  }
}

let projectsTop = document.getElementById("projects").offsetTop;
let aboutTop = document.getElementById("about").offsetTop;
let contactTop = document.getElementById("contact").offsetTop;
console.log(projectsTop);
console.log(aboutTop);
console.log(contactTop);

function removeAllHighlighting() {
  for (child of document.querySelector(".navbar").children) {
    child.classList.remove("highlighting");
  }
}

function addSectionHighlighting() {
  for (section of document.querySelectorAll("section[id]")) {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    // console.log(sectionId);
    if (
      window.scrollY > sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector("a[href*='#" + sectionId + "']")
        .classList.add("active");
    } else {
      document
        .querySelector("a[href*='#" + sectionId + "']")
        .classList.remove("active");
    }
  }
}

///////////////////////////////////////////////

// footer

///////////////////////////////////////////////

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
