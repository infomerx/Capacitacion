
exports.ejercicio2 = function(req, res){
  res.render('eje2');
};

exports.eje2parte2 = function(req, res){
  res.render('eje2-parte2', req.body);
};
