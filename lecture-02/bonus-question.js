let salary = 50000;

let totalSalary;

if (salary > 50000) {
    let bonus = 5000;
    totalSalary = salary + bonus;
} 

if (salary <= 50000) {
    let bonus = 3000;
    totalSalary = salary + bonus;
}

console.log("Total Salary", totalSalary);