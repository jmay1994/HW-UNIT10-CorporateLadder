
const employee = require('../lib/employee.js');

test('creates an employee object', () => {
    const Employee = new employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(Employee.name).toEqual(expect.any(String));
    expect(Employee.id).toEqual(expect.any(Number));
    expect(Employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const Employee = new employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(Employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const Employee = new employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(Employee.getID()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const Employee = new employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(Employee.getEmail()).toEqual(expect.stringContaining(Employee.email.toString()));
});


test('gets role of employee', () => {
    const Employee = new employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(Employee.getRole()).toEqual("Employee");
}); 