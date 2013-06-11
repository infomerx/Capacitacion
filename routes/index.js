exports.ejercicio14 = function(req,res) {
  res.render('eje14');
}

exports.ejercicio14json = function(req,res) {
  var http = require('http');
  http.get(req.query.url, function(res2) {
    console.log("Got response: " + res2.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res2.headers));
    primeravez = true;
    res2.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      if (primeravez) {
        res.writeHead(res2.statusCode,'Content-type:application/json');
        primeravez = false;
      }
      res.write(chunk);
    });

    res2.on('end', function() {
      res.end();
    });

  }).on('error', function(e) {
    console.log("Got error: " + e.message);
    res.writeHead(500,'Content-type:application/json');
    res.end('Error');
  });

}