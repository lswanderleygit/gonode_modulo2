const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  // buscar os dados enviados pelo formulário e criar um novo usuário
  async store (req, res) {
    // req.body.avatar = 'teste.jpg'
    const { filename } = req.file

    await User.create({ ...req.body, avatar: filename })

    return res.redirect('/')
  }
}

module.exports = new UserController()
