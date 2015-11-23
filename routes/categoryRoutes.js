"use strict";
var express = require('express');


var routes = function (Category) {
    var categoryRouter = express.Router();
    var categoriesController = require('../controllers/categoriesController')(Category);

    categoryRouter.route('/')
        .post(categoriesController.post)
        .get(categoriesController.get);


    categoryRouter.use('/:categoryId', function (req,res,next) {
        Category.findById(req.params.categoryId,function (err, category) {
            if(err){
                res.status(500).send({message: err});
            }else if(category){
                req.category = category;
                next();
            }else{
                res.status(404).send('no category found');
            }
        });
    });
    categoryRouter.route('/:categoryId')
        .get(function (req,res) {

            var returnCategory = req.category.toJSON();
            returnCategory.links = {};
            var newLink = 'http://'+req.headers.host+'/api/categories/?name='+returnCategory.name;
            returnCategory.links.FilterByThisName = newLink.replace(' ','%20');
            res.json(returnCategory);


        })
        .put(function (req,res) {
            req.category.name = req.body.name;
            req.category.icon = req.body.icon;
            req.category.listings = req.body.listings;
            req.category.updatedOn = Date.now();
            req.category.subcategories = req.body.subcategories;
            req.category.save(function (err) {
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(req.category);
                }
            });
            res.json(category);
        })
        .patch(function (req,res) {
            if(req.body._id){
                delete req.body._id;
            }
            for(var key in req.body){
                req.category[key] = req.body[key]
            }

            req.category.save(function (err) {
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(req.category);
                }
            })
        })
        .delete(function (req,res) {
            req.category.remove(function (err) {
                if(err){
                    res.status(500).send(err);
                }else {
                    res.status(204).send('Removed');
                }
            })
        })
    ;

    return categoryRouter;

};

module.exports = routes;