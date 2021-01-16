const axios = require('axios');

module.exports = async (req, res) => {
  const url = 'https://api.github.com/user/repos?visibility=public&affiliation=owner&sort=updated&direction=desc';
  const config = { headers: { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } };
  const { data: repos } = await axios.get(url, config);
  const json = JSON.stringify(repos);
  res.writeHead(200, { 'Content-Type': 'application/json' }).end(json);
};
