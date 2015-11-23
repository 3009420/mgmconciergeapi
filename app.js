"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var connectInfo = require('./custom_modules/sensitive.js');
var routes = require('./routes/index');
var Category = require('./models/category.model');
//var ServiceRequest = require('./models/category.model').ServiceRequest;

var categoryRouter = require('./routes/categoryRoutes')(Category);


var db;

if(process.env.ENV ==='Test'){
    db = mongoose.connect(connectInfo.dbConnectTest);
}else{
    db = mongoose.connect(connectInfo.dbConnect);
}
var app = express(),
    port = process.env.PORT || 3000;



process.on('uncaughtException', function (err) {
    console.log('There was an uncaught exception! ',err);
    process.exit(1);
});

//app.use(function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({strict:false}));
app.use('/api/categories', categoryRouter);








//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//});



app.get('/', function (req,res) {
    res.send('Welcome to my API :-)');
});
app.use('/categories', routes);

app.listen(port, function () {
    console.log('API is running on port ' + port);
    //console.log(Category);

});
module.exports = app;
//# sourceMappingURL=app.js.map