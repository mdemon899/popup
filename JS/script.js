const popupContainer = document.querySelector(".popup-container");
const popupBtn = document.querySelector("#popup-btn");
const mainPopup = document.querySelector(".main-popup");
const subscribeBtn = document.querySelector(".subscribe-btn");
const closeIcon = document.querySelector(".close-icon");

popupBtn.addEventListener("click", (e) => {
  mainPopup.classList.add("show-popup");
  popupContainer.classList.add("hide-popup");
});

subscribeBtn.addEventListener("click", (e) => {
  if (subscribeBtn.previousElementSibling.value) {
    mainPopup.classList.remove("show-popup");
    popupContainer.classList.remove("hide-popup");
    subscribeBtn.previousElementSibling.value = "";
  }
});

closeIcon.addEventListener("click", (e) => {
  mainPopup.classList.remove("show-popup");
  popupContainer.classList.remove("hide-popup");
  subscribeBtn.previousElementSibling.value = "";
});
