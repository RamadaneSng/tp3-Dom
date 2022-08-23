let lastscroll = 0;
let playOne = true;

window.addEventListener("scroll", () => {
  if (lastscroll < window.scrollY) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }
  lastscroll = window.scrollY;

  // image
  let scrollValue =
    (window.scrollY + innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImprovise.style.transform = "translateX(0)";
    imgImprovise.style.opacity = 1;
  }
  // popup
  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOne = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
