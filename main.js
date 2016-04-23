var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(req);
  console.log(res);
});

app.listen(3248, function () {
  console.log('Example app listening on port 3248!test');
});