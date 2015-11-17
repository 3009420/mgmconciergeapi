var mongoose = require('mongoose'),
    Schema = mongoose.Schema
;



var contactName = {
        firstName: String,
        lastName: String
    },
    contact = {
        name: contactName,
        phone: String,
        email: String
    },
    button = {
        name: String,
        link: String
    },
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
    },
    feature = {
        name: String,
        featuredImage: String,
        smallImage: String,
        location: String,
        schedule: [String],
        space: String,
        music: [String],
        management: String,
        contact: contact,
        button1: button,
        button2: button
    },
    listing = {
        name: String,
        icon: String,
        doc1: String,
        doc2: String,
        link: String,
        feature: feature
    },
    subCategory = {
        name: String,
        listings: [listing]
    };


var categorySchema = new Schema({
    name: String,
    icon: String,
    createdOn: Date,
    updatedOn: {type:Date, default: Date.now},
    subcategories:[subCategory],
    listings: [listing]
});

var serviceRequestSchema = new Schema(serviceRequest);