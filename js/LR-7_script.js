class Bank {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  addDepartment(departmentItem) {
    this.department.push(departmentItem);
  }
  removeDepartment(departmentItem) {
    const index = this.department.indexOf(departmentItem);
   this.department.splice(index, 1);
  }
}
const init = document.getElementById("init");
const add = document.getElementById("add");
const del = document.getElementById("delete");

const bank = new Bank('Nemo', ["dep1", "dep2", "dep3"]);
printAllInfo(init);
bank.addDepartment("NewDep");
printAllInfo(add);
bank.removeDepartment("dep1");
printAllInfo(del);

function printAllInfo(log){
    log.innerText = `Bank { name: ${bank.name}\ndepartments: [${bank.department}]}`
}