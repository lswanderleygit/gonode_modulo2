const express = require('express')
const multerConfig = require('./config/multer') // importando configurações do multer
const upload = require('multer')(multerConfig) // instânciando as configurações do multer

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

const routes = express.Router()

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.render('dashboard')
})

module.exports = routes
