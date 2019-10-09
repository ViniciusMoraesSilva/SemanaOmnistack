const express = require('express');

const app = express();

// GET(Buscar - Query), POST(Criar - Body(Json)), PUT(Alterar - ), DELETE
//
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao de registros)

app.use(express.json());


app.post('/users', (req, res) => {
  return res.json(req.body);
});

app.listen(3333);