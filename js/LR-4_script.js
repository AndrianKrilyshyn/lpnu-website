// Завдання 9
const btn = document.getElementById("btn");
btn.addEventListener("click", discriminant);

function discriminant() {
  let cof = document.getElementById("cof").value;
  const resultX1 = document.getElementById("resultX1");
  const resultX2 = document.getElementById("resultX2");
  const numbers = cof.split(" ").map(parseFloat);
  const a = numbers[0];
  const b = numbers[1];
  const c = numbers[2];
  let d = b * b - 4 * a * c;
  if (d > 0) {
    d = Math.sqrt(d);
    const x1 = (-b - d) / (2 * a);
    const x2 = (-b + d) / (2 * a);
    resultX1.innerText = `x1: ${x1}`;
    resultX2.innerText = `x2: ${x2}`;
  } else if (d === 0) {
    const x = -b / (2 * a);
    resultX1.innerText = `x: ${x}`;
  } else {
    alert("Розв'язку немає");
  }
}

// Завдання 12
const btnArray = document.getElementById("btn-array");
btnArray.addEventListener("click", getArray);
function getArray() {
  const field = document.getElementById("array").value;
  const array = field.split(",");
  const avgElement = array[Math.floor(array.length * 0.5)];
  if (isNumber(parseInt(avgElement))) {
    let number = parseInt(avgElement);
    let sum = 0;
    let k = 10;
    while (number > 0) {
      sum += number % k;
      number = Math.floor(number / k);
      k *= 10;
    }
    alert(sum);
  } else {
    alert(avgElement);
  }
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Завдання 18
const btnMoreTen = document.getElementById("btn-more-ten");
btnMoreTen.addEventListener("click", getArrayWithMoreTenElem);

function getArrayWithMoreTenElem() {
  const array = document.getElementById("moreTen").value.split(",");
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) > 10) {
      newArray.push(parseInt(array[i]));
    }
  }
  newArray.length > 0 ? alert(newArray) : alert("Таких елементів немає");
}

// Завдання 21

const btnPairs = document.getElementById("btn-pairs");
btnPairs.addEventListener("click", createTable);

function createTable() {
  const input = document.getElementById("parisArray").value.trim();
  const pairs = input.split(",").map(pair => pair.trim());

  if (pairs.length % 2 !== 0) {
    alert("Please enter an even number of values.");
    return;
  }

  const table = document.getElementById("outputTable");

  for (let i = 0; i < pairs.length; i++) {
    const pairNumb = pairs[i].split(" ");
    const rowIndex = parseInt(pairNumb[0]);
    const colIndex = parseInt(pairNumb[1]);

    if (!table.rows[parseInt(pairNumb[0])]) {
      let k = 1 + rowIndex;
      while (k > 0) {
        table.insertRow();
        k--;
      }
    }

    const row = table.rows[rowIndex];

    if (!row.cells[colIndex]) {
      let k = 1 + colIndex;
      while (k > 0) {
        row.insertCell();
        k--;
      }
    }

    const cell = row.cells[colIndex];
    cell.textContent = i;
  }
}

// Завдання 26
const btnGetArrayElem = document.getElementById("btn-get-array-elem");
btnGetArrayElem.addEventListener("click", getArrayElem);
function getArrayElem(){
  const elements = document.getElementById("getArrayElem").value.split(",").map(elem => elem.trim());
  const sizeArray = document.getElementById("getArraySize").value;
  const outputResult = document.getElementById("newArray");
  outputResult.innerText = "[ "+getFirst(elements,sizeArray).join(", ")+" ]";

}
function getFirst(array, n){
  return n>0? array.slice(0, n): array.slice(0, array.length-n);
}


//Додаткове завдання
const btnTask = document.getElementById("btn-task");
btnTask.addEventListener("click", doTask);

function doTask() {
  const taskField = document.getElementById("getTask");
  const inputValue = taskField.value.split(" ");
  const modifiedValue = inputValue.map(num => {
    const parsedNum = parseInt(num);
    if (!isNaN(parsedNum)) {
      return getNum(parsedNum);
    } else {
      return "*";
    }
  });
  taskField.value = modifiedValue.join(" ");
}

function getNum(num) {
  return num > 10 ? num * 10 : "*";
}
