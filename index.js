const employee = {
    name: "Mike Wazowski",
    streetAddress: "123 Scream St",
};
console.log(employee)

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
      };
    
}

const employee2 = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "5 Monstropolis Dr",
)

console.log(employee2);


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value,) {
    obj[key] = value; 
  
    return obj;
  }

destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
    )
destructivelyUpdateEmployeeWithKeyAndValue(
        employee,
        "streetAddress",
        "12 Broadway"
        )
console.log(employee)

function deleteFromEmployeeByKey(employee, key){
    let employees = { ...employee };
    delete employees[key];
    return employees;
}
employees = deleteFromEmployeeByKey(employee, "name")
console.log(employees)

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
    return employee
}
employees = destructivelyDeleteFromEmployeeByKey(employee,"name")
console.log(employee)