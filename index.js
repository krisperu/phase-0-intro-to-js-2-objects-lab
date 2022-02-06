const employee = {
    name: "name",
    streetAddress: "1234"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value);

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    newEmployee[key];
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key];
    delete employee[key];
    return employee;
}