exports.ejercicio4 = function(req, res){

  var fs = require('fs')

  fs.writeFile('archivo-eje4.txt', 'Hola Erika!!! Feliz Viernes!', function (err, data) {
  if (err) throw err;
  res.render('eje4', {escribirarchivo:data});
  console.log('Archivo Guardado!');
  });
}