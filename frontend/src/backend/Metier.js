const mongoose = require('mongoose');

const MetierSchema = new mongoose.Schema({
  nom: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Metier', MetierSchema);
