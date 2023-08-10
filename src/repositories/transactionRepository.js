const { startConnection: startConnection, closeConection } = require('../infra/db/mongodb');
const transactionModel = require('../models/transaction');

class TransactionRepository {
  async create(params) {}
  async findAll() {
    startConnection();
    const transactions = await transactionModel.find();
    await closeConection();
    return transactions;
  }
}

module.exports = TransactionRepository;
// const transactions = require('../infra/db/data');

// function create(transaction) {
//   transactions.push(transaction);
// }
// function findById(id) {
//   return transactions.find((t) => t.id === id);
// }

// function findAll() {
//   return transactions;
// }
// module.exports = { create, findAll, findById };
