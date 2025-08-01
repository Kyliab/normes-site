const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  metiers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Metier' }]
});

module.exports = mongoose.model('User', UserSchema);
