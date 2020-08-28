const test = require('ava');
const Employee = require('../src/employee');

test('employee. Employee type in range', t => {
    let employee = new Employee('eva', 'engineer');
    t.is(employee.toString(), 'eva (engineer)')
});

test('employee. Employee type out range', t => {
    try {
        let employee = new Employee('eva', 'ux');
    } catch (e) {
        t.is(e.message, 'Employee cannot be of type ux')
    }
});