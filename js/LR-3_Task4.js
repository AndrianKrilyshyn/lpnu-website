const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const urlPage = "https://lpnu.ua/";

const windowFeatures = "left=100,top=100,width=600,height=200,location=yes,toolbar=yes,scrollbars=yes";

const height = screen.height;
const width = screen.width;
let windowFeaturesNew = "width=" + width + "height=" + height +"fullscreen=yes";
let newWindow = null;
openBtn.addEventListener("click", openSiteWindow);
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
function openSiteWindow(){
  if(checkWidth()){
    windowFeaturesNew = "width=" + width + ",height=" + height +"fullscreen=yes";
    newWindow = window.open(urlPage, "_blank", windowFeaturesNew);
  }else{
    newWindow = window.open(urlPage, "_blank");
  }
}
function checkWidth(){
  return window.innerWidth>700;
}

