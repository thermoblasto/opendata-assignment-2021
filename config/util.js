
const tokenFromEnv = process.env.TOKEN;
const TOKEN = {
  headers: { Authorization: `bearer ${tokenFromEnv}` },
};

const openDataURL = 'https://opendata.hopefully.works/api/events';

module.exports = {
  TOKEN,
  openDataURL,
};