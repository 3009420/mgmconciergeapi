"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    mongodb     = require('mongodb'),
    mongoose    = require('mongoose'),
    app         = express(),
    port        = process.env.PORT || 3000,
    MongoClient = mongodb.MongoClient,
    ObjectId    = require('mongodb').ObjectID,
    assert      = require('assert'),
    connectInfo = require('./custom_modules/sensitive.js')
;
//MongoClient.connect(connectInfo.dbConnect, function(err, db) {
//    assert.equal(null, err);
//    if(err){throw err}
//    console.log("Connected correctly to database server.");
//    var categories = db.collection('categories');
//    console.log(categories);
//    var allCategories = categories.find().toArray();
//
//    app.get('/', function (req,res,next) {
//        console.log('send back some json for home screen');
//        res.send({message: allCategories});
//    });
//
//
//
//
//    db.close();
//});
mongoose.connect(connectInfo.dbConnect);
var insertDocument = function(db, callback, payload) {
    db.collection('concierge_guide').insertOne( payload, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the concierge_guide collection.");
        callback(result);
    });
};


app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, function () {
    console.log('API is running on port '+ port);
});




app.get('/shows', function (req, res, next) {

});

app.post('/upload/mainitems', function (req,res,next) {
    console.log('request on server: ',req.body);

    MongoClient.connect(dbUrl, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server.");
        insertDocument(db, function () {
            db.close();
        },req.body);
        //db.close();
    });

});