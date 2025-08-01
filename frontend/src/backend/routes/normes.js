const express = require('express');
const router = express.Router();
const Norme = require('../models/Norme');

router.post('/', async (req, res) => {
  try {
    const norme = new Norme({
      titre: req.body.titre,
      description: req.body.description,
      metier: req.body.metier,
      url: req.body.url
    });
    await norme.save();
    res.status(201).json(norme);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/metier/:metierId', async (req, res) => {
  try {
    const normes = await Norme.find({ metier: req.params.metierId });
    res.json(normes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
