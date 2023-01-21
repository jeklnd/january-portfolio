function scrollToWork() {
  // alert('working');
  document.getElementById("work").scrollIntoView();
}

// sticky header
window.onscroll = function () {
  addStickyHeader()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function addStickyHeader() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
