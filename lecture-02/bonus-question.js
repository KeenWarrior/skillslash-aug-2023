let salary = 60000;

let totalSalary;
let bonus;

if (salary > 50000) {
  bonus = 5000;
} else if (salary >= 20000) {
  bonus = 3000;
} else {
  bonus = 2000;
}

totalSalary = salary + bonus;
console.log("Total Salary", totalSalary);
