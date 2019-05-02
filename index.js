var express  = require('express');
var app = express();

app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen((process.env.PORT || 3000), function() {
    console.log('server started');
});