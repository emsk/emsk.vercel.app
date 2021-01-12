require('dotenv').config();
const axios = require('axios');

module.exports = async (req, res) => {
  const url = 'https://qiita.com/api/v2/authenticated_user/items';
  const config = { headers: { 'Authorization': `Bearer ${process.env.QIITA_TOKEN}` } };
  const { data: items } = await axios.get(url, config);
  res.send(items);
};
