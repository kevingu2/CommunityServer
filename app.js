var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var config = require('./server/config/config');

app.set('port', config.port);

var server = http.createServer(app);

// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// serve api docs
app.use('/api', express.static(__dirname + '/public/apidoc'));

/* routes API*/
app.use('/api', require('./server/controllers/index'));

server.listen(app.get('port'), function() {
    console.log('Express server listening on port %d in %s mode',
        app.get('port'),
        app.get('env'));
});

module.exports = app;
