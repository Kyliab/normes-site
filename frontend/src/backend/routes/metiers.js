const express = require('express');
const router = express.Router();
const Metier = require('../models/Metier');

router.post('/', async (req, res) => {
  try {
    const metier = new Metier({ nom: req.body.nom });
    await metier.save();
    res.status(201).json(metier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const metiers = await Metier.find();
    res.json(metiers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
