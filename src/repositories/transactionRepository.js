const transactions = require('../infra/db/data');

function create(transaction) {
  transactions.push(transaction);
}
function findById(id) {
  return transactions.find((t) => t.id === id);
}

function findAll() {
  return transactions;
}
module.exports = { create, findAll, findById };
