const harmb = document.querySelector(".harmburg");
const navItems = document.querySelector(".anchors");

harmb.addEventListener("click", () => {
  if (navItems.style.display == "" || navItems.style.display == "none") {
    harmb.classList.toggle("toggle");
    navItems.style.display = "flex";
  } else {
    harmb.classList.toggle("toggle");
    navItems.style.display = "none";
  }
});
