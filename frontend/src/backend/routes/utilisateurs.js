const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const user = new User({ email: req.body.email, metiers: req.body.metiers || [] });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/:id/subscribe', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    if (!user.metiers.includes(req.body.metier)) {
      user.metiers.push(req.body.metier);
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('metiers');
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
  }
});

module.exports = router;
