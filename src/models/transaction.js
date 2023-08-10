const { Schema, model } = require('mongoose');

const transactioModel = new Schema(
  {
    title: String,
    type: String,
    category: String,
    amount: Number,
  },
  { timestamps: true }
);

module.exports = model('Transactions', transactioModel);
