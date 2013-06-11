exports.ejercicio13 = function(req, res) {
  res.render('eje13');
}

exports.ejercicio13json = function(req,res) {
  res.send({resultado:parseInt(req.query.a) + parseInt(req.query.b)});
}