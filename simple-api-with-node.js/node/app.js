/**
 * Module dependencies.
 */
var express = require('express');
var netidentity = require('./routes/httpbin-get');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

// Introducing req.rawBody
// in order to deal with incoming xml /soap / json
// http://stackoverflow.com/questions/9920208/expressjs-raw-body
app.use(function(req, res, next) {
    var data = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
        data += chunk;
    });
    req.on('end', function() {
        req.rawBody = data;
        next();
    });
});

/***** Supported routes ******/

// GET request, accepts all url paths
app.get('/*', netidentity.get);


/***** Catch all route ******/

app.all("*", function(req,res){

    // Headers
    res.set({
        'Content-Type': 'text/plain',
        'X-Monetization-Success': 'true'
    });

    res.status(404);
    res.send("Not supported API request: "+req.method+" for resource "+req.path);  

});

// start node app
app.listen(3000);
console.log("Node application has started on port 3000. Make requests to http://127.0.0.1:3000/");

