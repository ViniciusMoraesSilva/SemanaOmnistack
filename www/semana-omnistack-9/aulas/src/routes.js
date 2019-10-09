const express = require('expresss');

const routes = express.Router();

routes.post('/users', (req, res) => {
  return res.json(req.body);
});