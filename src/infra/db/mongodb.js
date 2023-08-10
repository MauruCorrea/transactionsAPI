const mongoose = require('mongoose');

async function startConnection() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('connected');
}
async function closeConnection() {
  await mongoose.disconnect();
  console.log('disconnected');
}

module.exports = { startConnection, closeConnection };
