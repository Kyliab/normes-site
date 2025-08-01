const cron = require('node-cron');
const Metier = require('../models/Metier');
const Norme = require('../models/Norme');
const { getNormesByProfession } = require('../services/legifrance');
const { getNormesAfnor } = require('../services/afnor');

cron.schedule('0 */6 * * *', async () => {
  console.log('[CRON] Vérification des nouvelles normes...');
  const metiers = await Metier.find();
  for (const metier of metiers) {
    const normesLegifrance = await getNormesByProfession(metier.nom);
    const normesAfnor = await getNormesAfnor(metier.nom);

    for (const norme of [...normesLegifrance, ...normesAfnor]) {
      const exists = await Norme.findOne({ titre: norme.titre, metier: metier._id });
      if (!exists) {
        await Norme.create({
          titre: norme.titre,
          description: norme.description,
          metier: metier._id,
          url: norme.url || ''
        });
        console.log(`[NEW] Norme ajoutée pour ${metier.nom}: ${norme.titre}`);
      }
    }
  }
});
