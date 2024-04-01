// Завдання 1.3
const input = document.getElementById("letters");
const output = document.getElementById("key-result");
input.addEventListener("keypress", (code) => {
  output.innerText = "Key pressed: "+String.fromCharCode(code.charCode)+"\nCode: "+code.charCode;
});

// Завдання 2.15
const img = document.getElementById("img-r2d2");
img.addEventListener("mouseover", changeToC3PO);
img.addEventListener("mouseout", changeToR2D2);
img.addEventListener("click", getPath);

function changeToC3PO() {
    img.src = "../img/c-3PO.png";
}

function changeToR2D2() {
    img.src = "../img/r2d2.jpeg";
}

function getPath(){
    alert("Шлях до файлу малюнка: "+img.src);
}

//Додаткове завдання
// document.addEventListener("mousemove", function(event) {
//     const mouseX = event.clientX; 
//     const mouseY = event.clientY; 
    
//     img.style.left = mouseX  + "px";
//     img.style.top = mouseY + img.height + "px";
// });
