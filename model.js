const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: {type: String, required: true},
  company: {type: String, required: true},
  phone: {type: String, required: true}
});

module.exports = mongoose.model('Card', cardSchema);
