
const token = process.env.TOKEN;
const TOKEN = {
  headers: { Authorization: `bearer ${token}` },
};

const openDataURL = 'https://opendata.hopefully.works/api/events';

module.exports = {
  TOKEN,
  openDataURL,
};