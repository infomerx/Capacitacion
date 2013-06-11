exports.ejercicio6 = function(req, res){
  var fs = require('fs')

  fs.stat('archivo-eje6.txt', function (err, stats) {
    fs.open('archivo-eje6.txt', "r+", function (err, fd) {
      var buffer = new Buffer(stats.size);
      fs.truncate(fd, (buffer.length - 11));
      console.log('Caracteres Eliminados Exitosamente');
      fs.close(fd);
    });
  });

  fs.readFile('archivo-eje6.txt',function (err, data) {
    if (err) throw err;
    res.render('eje6', {leer_contenido2:data});
  });
}