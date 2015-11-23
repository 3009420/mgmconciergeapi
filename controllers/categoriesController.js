"use strict";

//var Category = require('../models/category.model.js');
var categoryController = function(Category){
    var post = function (req,res) {
            if(req.body){
                var category = new Category(req.body);

                if(!req.body.name){
                    res.status(400);
                    res.send('Name is required');
                }else{
                    category.save();
                    res.status(201);
                    res.send(category);
                }
            } else{
                console.log('Request body was not populated');
                res.send('Request body was not populated');
            }

    };

    var get = function (req,res) {
            var query = {};

            if(req.query.name){
                query.name = req.query.name;
            }
            console.log(req.query);

            Category.find(query,function (err, categories) {
                if(err){
                    res.status(500).send({message: err});
                }else{
                    var returnCategories = [];
                    categories.forEach(function (element,index,array) {
                        var newCategory = element.toJSON();
                        newCategory.links = {};
                        newCategory.links.self = 'http://'+req.headers.host+'/api/categories/'+newCategory._id;

                        returnCategories.push(newCategory);

                    });
                    res.json(returnCategories);
                }
            });
    };

    return {
        get: get,
        post: post
    };
    //var put = function (req,res) {
    //        req.category.name = req.body.name;
    //        req.category.icon = req.body.icon;
    //        req.category.listings = req.body.listings;
    //        req.category.updatedOn = Date.now();
    //        req.category.subcategories = req.body.subcategories;
    //        req.category.save(function (err) {
    //            if(err){
    //                res.status(500).send(err);
    //            }
    //            else{
    //                res.json(req.category);
    //            }
    //        });
    //        res.json(category);
    //};

    //var patch = function (req,res) {
    //        if(req.body._id){
    //            delete req.body._id;
    //        }
    //        for(var key in req.body){
    //            req.category[key] = req.body[key]
    //        }
    //
    //        req.category.save(function (err) {
    //            if(err){
    //                res.status(500).send(err);
    //            }
    //            else{
    //                res.json(req.category);
    //            }
    //        })
    //};

    //var delete = function (req,res) {
    //    req.category.remove(function (err) {
    //        if(err){
    //            res.status(500).send(err);
    //        }else {
    //            res.status(204).send('Removed');
    //        }
    //    })
    //};
};
module.exports = categoryController;