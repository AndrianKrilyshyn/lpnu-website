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
  const avgElement = array[Math.floor(array.length*0.5)];
  if(isNumber(parseInt(avgElement))){
    let number = parseInt(avgElement);
    let sum=0;
    let k =10;
    while(number>0){
        sum += number%k;
        number = Math.floor(number/k);
        k*=10;
    }
    alert(sum);
  }else{
    alert(avgElement);
  }
}
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  // Завдання 18
const btnMoreTen = document.getElementById("btn-more-ten");
btnMoreTen.addEventListener("click", getArrayWithMoreTenElem);

function getArrayWithMoreTenElem(){
    const array = document.getElementById("moreTen").value.split(",");
    const newArray=[];
    for(let i=0; i<array.length;i++){
        if(parseInt(array[i])>10){
            newArray.push(parseInt(array[i]));
        }
    }
     newArray.length>0?alert(newArray):alert("Таких елементів немає");
}