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

function generateResult(invoice, outstanding) {
  let result = '***********************\n' +
      '**** Customer Owes ****\n' +
      '***********************\n';
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate}\n`;
  return result;
}

function printOwing (invoice) {
  let outstanding = calculateOutstanding(invoice.borderSpacing);
  invoice.dueDate = generateDate();
  return generateResult(invoice, outstanding);
}

module.exports = {
  printOwing
}
