const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Vinicius", "email": "vinicius.moraes.silva@gmail.com"}

// localhost:3000/users
// server.get('/users/', (req, res) => { Query Exemplo 

// CRUD - Create, Read, Update, Delete

const users = [ 'Diego', 'Claudio', 'Vinicius'];

server.get('/users/:index', (req, res) => {
  // const nome = req.query.nome; Query Exemplo
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);