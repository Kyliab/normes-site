const axios = require('axios');

const API_KEY = process.env.LEGIFRANCE_API_KEY;

async function getNormesByProfession(keyword) {
  try {
    const response = await axios.get('https://api.legifrance.gouv.fr/v1/texts', {
      headers: { 'Authorization': `Bearer ${API_KEY}` },
      params: { q: keyword }
    });
    return response.data.texts.map(t => ({
      titre: t.title,
      description: t.abstract || '',
      url: t.url || ''
    }));
  } catch (err) {
    console.error('Erreur Legifrance:', err.message);
    return [];
  }
}

module.exports = { getNormesByProfession };
