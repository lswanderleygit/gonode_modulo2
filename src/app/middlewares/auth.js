module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // res.locals é um objeto que fica disponível para todas as views do sistema,
    // em todos os templates com njk, assim, não importa o arquivo que estiver usando {{ user }} sempre vai estar os dados do user
    res.locals.user = req.session.user
    return next()
  }

  return res.redirect('/')
}
