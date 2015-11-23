"use strict";
var mongoose = require('mongoose'),
    contactName = require('./contactName.model'),
    Schema = mongoose.Schema

    ;



module.exports = new Schema({
    name: contactName,
    phone: String,
    email: String
});