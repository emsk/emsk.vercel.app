require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/code', async (req, res) => {
  const url = 'https://api.github.com/user/repos?visibility=public&affiliation=owner&sort=updated&direction=desc';
  const config = { headers: { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } };
  const { data: repos } = await axios.get(url, config);
  res.send(repos);
});

app.get('/posts', async (req, res) => {
  const url = 'https://qiita.com/api/v2/authenticated_user/items';
  const config = { headers: { 'Authorization': `Bearer ${process.env.QIITA_TOKEN}` } };
  const { data: items } = await axios.get(url, config);
  res.send(items);
});

module.exports = {
  path: '/api',
  handler: app
};
