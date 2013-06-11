exports.ejercicio5 = function(req, res){
  var fs = require('fs')

  archivoagregado=function (err) {
    if (err) throw err;
    console.log('Archivo Guardado!');

    fs.readFile('archivo-eje5.txt', archivoleido);
  }

  archivoleido=function (err, data) {
    if (err) throw err;
    res.render('eje5', {escribirarchivo2:data} );
  }

  fs.appendFile('archivo-eje5.txt','Probando escribir en archivo.txt desde Node', archivoagregado);
}