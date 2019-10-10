const User = require('../models/User');


// index(Retorna Lista), show(Retorna 1), store(Criar), 
// update(Alterar), destroy(Deletar)


module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email })
    }

    return res.json(user);
  }
}