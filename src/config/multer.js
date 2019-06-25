const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  // salvar os arquivos no disco, mas poderia ser em um CDN, como o S3 da aws, ou até no banco de dados
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
