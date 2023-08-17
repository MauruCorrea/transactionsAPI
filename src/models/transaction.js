const { Schema, model } = require('mongoose');

const transactioModel = new Schema(
  {
    title: { type: String, require: true },
    type: { type: String, require: true },
    category: { type: String, default: null },
    amount: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = model('Transactions', transactioModel);
