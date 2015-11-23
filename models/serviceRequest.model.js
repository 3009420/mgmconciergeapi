"use strict";
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    serviceRequest = {
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
        hotel: String,
        suite: String,
        serviceDate: Date,
        occasion: String,
        numMales: Number,
        numFemales: Number,
        dateSent: Date,
        response: Boolean,
        contactResponded: contact
    }
    ;

var serviceRequestSchema = new Schema(serviceRequest);
var ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);


module.exports = ServiceRequest;