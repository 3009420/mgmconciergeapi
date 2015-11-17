/**
 * Created by bryanknight on 11/15/15.
 */
"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert');
var connectInfo = require('./custom_modules/sensitive.js');
var app = express(), port = process.env.PORT || 3000;

mongoose.connect(connectInfo.dbConnect);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

//var insertDocument = function (db, callback, payload) {
//    db.collection('concierge_guide').insertOne(payload, function (err, result) {
//        assert.equal(err, null);
//        console.log("Inserted a document into the concierge_guide collection.");
//        callback(result);
//    });
//};

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, function () {
    console.log('API is running on port ' + port);
});

app.get('/shows', function (req, res, next) {
});

//app.post('/upload/mainitems', function (req,res,next) {
//    console.log('request on server: ',req.body);
//
//    MongoClient.connect(dbUrl, function(err, db) {
//        assert.equal(null, err);
//        console.log("Connected correctly to server.");
//        insertDocument(db, function () {
//            db.close();
//        },req.body);
//        //db.close();
//    });
//
//});
//# sourceMappingURL=app.js.map