const express = require('express')
const multerConfig = require('./config/multer') // importando configurações do multer
const upload = require('multer')(multerConfig) // instânciando as configurações do multer

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const DashboardController = require('./app/controllers/DashboardController')
const FileController = require('./app/controllers/FileController')

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  next()
})

routes.get('/files/:file', FileController.show)

routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

// todas as rotas que iniciem com /app vão passar pelo middleware
routes.use('/app', authMiddleware)

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/dashboard', DashboardController.index)

module.exports = routes
