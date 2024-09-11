const iconMenu = document.querySelector(".main-page header .right .span-icon");
const ulHeader = document.querySelector(".main-page header .right ul");

function iconHeader() {
  iconMenu.onclick = (e) => {
    e.stopPropagation();
    if (ulHeader.classList.contains("open")) {
      removeOpen();
    } else {
      addOpen();
    }
  };
}
iconHeader();

function removeOpen() {
  ulHeader.style.opacity = 0;
  setTimeout(() => {
    ulHeader.classList.remove("open");
  }, 300);
}

function addOpen() {
  ulHeader.classList.add("open");
  setTimeout(() => {
    ulHeader.style.opacity = 1;
  }, 0);
}

window.addEventListener("click", (e) => {
  if (e.target !== ulHeader || e.target !== iconMenu) {
    if (ulHeader.classList.contains("open")) {
      removeOpen();
    }
  }
});
