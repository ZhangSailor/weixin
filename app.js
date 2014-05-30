var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    express = require("express"),
    routes = require('./routes/config'),
    connect = require('connect'),
    app = express();
    //bodyParser = require('body-parser');

 app.configure(function(){
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname,'public')));
});

//var env = process.env.NODE_ENV || 'development';
//if ('development' == env) {
  //console.log('development');
//}

routes(app);
require('./controller/webotHandler')(app);

var server = http.createServer(app);

server.listen(8080,function(){
  console.log("Express server listening on port 8080");
});






