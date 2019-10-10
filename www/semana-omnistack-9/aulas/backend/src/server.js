const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mongo:mongo@oministack-9zp4q.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET(Buscar - Query), POST(Criar - Body(Json)), PUT(Alterar - ), DELETE
//
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao de registros)

app.use(express.json());
app.use(routes);

app.listen(3333);