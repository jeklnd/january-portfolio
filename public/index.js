// "use strict";
///////////////////////////////////////////////

// buttons

///////////////////////////////////////////////

document
  .getElementById("home-button")
  .addEventListener("click", () =>
    document.getElementById("about").scrollIntoView()
  );

document.getElementById("scroll-home").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView();
});

///////////////////////////////////////////////

// theme coloring

///////////////////////////////////////////////
let colors = [
  "rgb(66, 133, 244)",
  "rgb(219, 68, 55)",
  "rgb(244, 180, 0)",
  "rgb(15, 157, 88)",
];
function getRandomNumber() {
  return Math.floor(Math.random(0, 3) * colors.length);
}
let random = getRandomNumber();

const setTheme = () => {
  const currentTheme = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--theme-color");
  const index = colors.indexOf(currentTheme);
  if (colors.length > 1) {
    colors.splice(index, 1);
  } else {
    colors = [
      "rgb(66, 133, 244)",
      "rgb(219, 68, 55)",
      "rgb(244, 180, 0)",
      "rgb(15, 157, 88)",
    ];
    // colors.splice(index, 1);
  }
  // colors.splice(index, 1);
  function getRandomNumber() {
    return Math.floor(Math.random(0, 3) * colors.length);
  }
  let random = getRandomNumber();
  document.documentElement.style.setProperty("--theme-color", colors[random]);
};

document.getElementById("mouse-click").addEventListener("click", setTheme);

document.documentElement.style.setProperty("--theme-color", colors[random]);

///////////////////////////////////////////////

// overlay navigation

///////////////////////////////////////////////

//overlay navigation
function openSideNav() {
  document.getElementById("navbar-section").classList.add("overlay-navbar");
  document.getElementById("navbar-section").style.width = "0vw";
  document.getElementById("overlay-div").style.display = "flex";
  document.getElementById("overlay-div").style.width = "100vw";

  const overlayButtons = document.querySelectorAll(".overlay-btn");
  overlayButtons.forEach((button) => {
    button.style.color = "#ebebeb";
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

///////////////////////////////////////////////

// hamburger

///////////////////////////////////////////////
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

window.onresize = function () {
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
    document.getElementById("scroll-home").style.display = "inline";
  } else {
    document.getElementById("scroll-home").style.display = "none";
  }
}

let projectsTop = document.getElementById("projects").offsetTop;
let aboutTop = document.getElementById("about").offsetTop;
let contactTop = document.getElementById("contact").offsetTop;

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

// reset form

///////////////////////////////////////////////
const resetForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document.getElementById("success").style.visibility = "visible";
  setInterval(() => {
    document.getElementById("success").style.visibility = "hidden";
  }, 5000);
};

document.getElementById("contact-button").addEventListener("click", resetForm);

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
