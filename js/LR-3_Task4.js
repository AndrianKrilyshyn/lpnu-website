const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const urlPage = "https://lpnu.ua/";

const windowFeatures = "left=100,top=100,width=600,height=200,location=yes,toolbar=yes,scrollbars=yes";
let newWindow = null;
openBtn.addEventListener("click", openWindow);
closeBtn.addEventListener("click", closeWindow);
function openWindow() {
  newWindow = window.open(urlPage, "_blank", windowFeatures);
}
function closeWindow() {
  if (newWindow !== null) {
    newWindow.close();
    newWindow = null;
  } else {
    alert("Вікно не відкрито");
  }
}
