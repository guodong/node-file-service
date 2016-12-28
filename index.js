var express = require('express')
var multer = require('multer')
const path = require('path')
var argv = require('yargs')
  .options('directory', {
    alias: 'd',
    default: './',
  })
  .options('port', {
    alias: 'p',
    default: 8000,
  })
  .argv

var filedir = path.resolve(argv.directory)
console.log('file dir is: ', filedir)


var app = express()

app.get('/:filename', function(req, res) {
  var filename = req.params.filename;
  res.download(filedir + '/' + filename);
})

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filedir)
  },
  filename: function (req, file, cb) {
    cb(null, req.params.filename)
  }
})

var upload = multer({ storage: storage })
app.post('/:filename', upload.single('file'), function(req, res, next) {
  res.sendStatus(201);
})

app.listen(argv.port)