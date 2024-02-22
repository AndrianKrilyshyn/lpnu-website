const btnTask1 = document.getElementById("btn__tk-1");
const btnTask2 = document.getElementById("btn__tk-2");
const btnTask3 = document.getElementById("btn__tk-3");
const btnTask4 = document.getElementById("btn__tk-4");

// Завдання 1,1
btnTask1.addEventListener("click", function () {
  location.reload();
  return alert(
    "URL address: " +
      location.href +
      "\nWidth: " +
      window.innerWidth +
      "\nHeight: " +
      window.innerHeight
  );
});

// Завдання 2,8
btnTask2.addEventListener("click", function () {
  const userYear = prompt("Введіть рік народження: ");
  return alert(yearDiff(userYear));
});

function yearDiff(userYear) {
  const difference = new Date().getFullYear() - parseInt(userYear);
  return difference > 0 ? checkAge(difference) : "Неправильно введений рік";
}
function checkAge(age) {
  return age >= 18 ? "Я дорослий" : "Я дитина";
}

// Завдання 3,9
btnTask3.addEventListener("click", function () {
  window.confirm("Змінити розміри вікна вдвічі?") === true
    ? changeSize()
    : alert("Зміни не відбулись");
});
function changeSize() {
  window.innerHeight = window.innerHeight / 2;
  window.innerWidth = window.innerWidth / 2;
}

const url = "/LR-3_Task4.html";
btnTask4.addEventListener("click", function(){window.open(url)});
