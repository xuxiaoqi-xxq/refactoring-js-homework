const test = require('ava');
const {printOwing} = require('../src/print.js');

const invoice = {
    borderSpacing: [{
        amount:10
    }],
    customer: 'customer'
}

test('print', t => {
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    let result = printOwing(invoice);
    t.is(result, '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: customer\n' +
        'amount: 10\n' +
        `amount: ${dueDate.toLocaleDateString()}\n`)
})