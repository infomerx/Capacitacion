exports.ejercicio8 = function(req, res){

var fs = require('fs');
var cantidad = parseInt(req.query.cantidad);

if (isNaN(cantidad))
  cantidad=0;

console.log(cantidad);

  fs.stat('archivo-eje7.txt', function (err, stats) {
    fs.open('archivo-eje7.txt', "r+", function (err, fd) {
      var nuevotamano= stats.size - cantidad;
      if (nuevotamano < 0)
        nuevotamano=0;
      fs.truncate(fd, nuevotamano);
      console.log('Caracteres Eliminados Exitosamente');
      fs.close(fd);
    });
  });

  fs.readFile('archivo-eje7.txt',function (err, data) {
     res.render('eje8', {leer_contenido3:data,cantidad:cantidad});
  });

}