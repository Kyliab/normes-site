const axios = require('axios');
const cheerio = require('cheerio');

async function getNormesAfnor(keyword) {
  const url = `https://www.afnor.org/recherche/?q=${encodeURIComponent(keyword)}`;
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const normes = [];
    $('.result-item').each((i, el) => {
      normes.push({
        titre: $(el).find('.result-title').text().trim(),
        description: $(el).find('.result-summary').text().trim(),
        url: $(el).find('a').attr('href')
      });
    });
    return normes;
  } catch (err) {
    console.error('Erreur AFNOR:', err.message);
    return [];
  }
}

module.exports = { getNormesAfnor };
