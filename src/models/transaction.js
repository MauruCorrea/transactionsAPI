const { Schema, model } = require('mongoose');

const transactioModel = new Schema(
  {
    title: String,
    type: String,
    category: { type: String, default: null },
    amount: Number,
  },
  { timestamps: true }
);

module.exports = model('Transactions', transactioModel);
