"use strict";
var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    ;

var contactSchema = new Schema ({
    firstName: String,
    lastName: String,
    phone: String,
    email: String
});

var Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;