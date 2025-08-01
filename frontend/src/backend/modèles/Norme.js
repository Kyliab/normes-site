const mongoose = require('mongoose');

const NormeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: String,
  metier: { type: mongoose.Schema.Types.ObjectId, ref: 'Metier', required: true },
  datePublication: { type: Date, default: Date.now },
  url: String
});

module.exports = mongoose.model('Norme', NormeSchema);
