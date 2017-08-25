/**
 * 
 */
var express = require('express');
var cfenv = require('cfenv');
var websiteTitle = "Test";
var app = express();
app.use(express.static('build'));
app.get('/', function(req,res) {
	res.render('index.html', {title:websiteTitle})
});
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, appEnv.bind, function() {
	console.log("server starting on " + appEnv.url + ", port " + appEnv.port);
});

