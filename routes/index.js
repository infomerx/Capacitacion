exports.ejercicio3 = function(req, res){

  var fs = require('fs')

  fs.readFile('archivo-eje3.txt',function (err, data) {
  if (err) throw err;
  res.render('eje3', {leerarchivo:data});
  });
}
