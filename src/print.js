function generateDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString();
}

function printOwing (invoice) {
  let outstanding = 0;
  let result = '***********************\n' +
      '**** Customer Owes ****\n' +
      '***********************\n';

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

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
