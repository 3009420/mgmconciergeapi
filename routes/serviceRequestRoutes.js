"use strict";
//var express = require('express');
//
//var routes = function (ServiceRequest) {
//    var serviceRequestRouter = express.Router();
//
//    serviceRequestRouter.route('/categories')
//        .post(function (req,res) {
//            if(req.body){
//                var category = new Category(req.body);
//
//                category.save();
//                res.status(201).send(category);
//            } else{
//                console.log('Request body was not populated');
//                res.send('Request body was not populated');
//            }
//
//        });
//    return serviceRequestRouter;
//};
//
//module.exports = routes;