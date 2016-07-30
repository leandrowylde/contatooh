var config = require('./config/config')();
var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(config.port, config.address, function(){
	console.log('Express Https Server ' + config.address + ' (' + config.env + ') listen on port ' + config.port);
});