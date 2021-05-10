const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Muhammed', 40, 'mhknowledge@yahoo.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//test getID();
test('prompts for employee id', () => {
    const employee = new Employee('Muhammed', 40, 'mhknowledge@yahoo.com');
    expect(employee.getID()).toEqual(expect.any(Number));
});

//test getEmail();
test('prompts for employee email', () => {
    const employee = new Employee('Muhammed', 40, 'mhknowledge@yahoo.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//test getRole();
test('prompts user to choose a role', () => {
    const employee = new Employee('Muhammed', 40, 'mhknowledge@yahoo.com');
    expect(employee.getRole()).toEqual('Employee');
});