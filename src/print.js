function generateDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString();
}

function calculateOutstanding(borderSpacing) {
  let outstanding = 0;
  for (const o of borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function printOwing (invoice) {
  let outstanding = 0;
  let result = '***********************\n' +
      '**** Customer Owes ****\n' +
      '***********************\n';

  // calculate outstanding
  outstanding = calculateOutstanding(invoice.borderSpacing);

  // record due date
  invoice.dueDate = generateDate();

  // print details
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate}\n`;
  return result;
}

module.exports = {
  printOwing
}
