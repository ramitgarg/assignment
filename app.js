var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname, 'tmp/js')));
app.post('/savedata',urlencodedParser ,function(req, res) {
	fs.appendFile('data.json', JSON.stringify(req.body), function(err) {
	  if (err) res.send('not saved');
	  res.send('saved');
	});
});

app.get('/', function(req, res) {
	res.sendFile('../tmp/js/index.html');
});

app.listen(4000, function() {
	console.log('server started at 4000');
});