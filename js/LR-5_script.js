// Задання 1.9

const btnPath = document.getElementById("btn-path");
btnPath.addEventListener("click", getPathElem);
function getPathElem(){
    const path = document.getElementById("path").value;
    const diskName = path.substring(0, path.indexOf("\\"));
    const fileName = path.substring(path.lastIndexOf("\\")+1, path.length);
    const fullPath = path.substring(path.indexOf("\\")+1, path.lastIndexOf("\\"));
    alert("Disk: "+diskName+"\nFile: "+fileName+"\nPath: "+fullPath );
}

// Завдання 2.9

const btnSummer = document.getElementById("btn-summer");
btnSummer.addEventListener("click", whenSummer);
function whenSummer(){
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    if(currentMonth>5&&currentMonth<9){
        alert("Вже літо!");
    }else{
        const dateSummer = new Date("2024-06-01");
        const dateDiff = dateSummer.getTime()-currentDate.getTime();
        const daysleft = Math.floor(dateDiff/ (1000 * 3600 * 24));
        alert("До літа залишилось "+daysleft+" днів!");

    }
}

// Завдання 3.9

const btnToHex = document.getElementById("btn-to-hex");
btnToHex.addEventListener("click", toHex);
function toHex(){
    const number = parseInt(document.getElementById("toHex").value);
    alert(number+" = "+number.toString(16));
}

//Додаткове завдання
const btnTask = document.getElementById("btn-task");
btnTask.addEventListener("click", doTask);

function doTask() {
  const taskField = document.getElementById("getTask");
  const inputValue = taskField.value.split(","); 
  const modifiedValue = inputValue.map(value => check(value));
  taskField.value = modifiedValue.join(", "); 
}

function check(value) {
    const parsedNum = parseInt(value);
    if (!isNaN(parsedNum)) {
        return parsedNum * 10;
    } else {
        return modifyString(value);
    }
}


function modifyString(str) {
  let modifiedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toLowerCase()) {
      modifiedStr += "*";
    } else {
      modifiedStr += "?";
    }
  }
  return modifiedStr;
}
