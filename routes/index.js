exports.ejercicio12 = function(req, res) {
  res.render('eje12');
}

exports.ejercicio12json = function(req,res) {
  res.send(new Date);
}