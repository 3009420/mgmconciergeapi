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