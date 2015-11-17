"use strict";
var mongodb     = require("mongodb"),
    MongoClient = mongodb.MongoClient,
    dburl       = "mongodb://localhost:27017/concierge_guide"
;

MongoClient.connect(dburl, function (err,db) {
    if(err){
        console.log("Unable to connect to the mongoDB server. Error:", err);
    } else{
        console.log("Connection established to", dburl);

        var collection = db.collection("categories.ts"),
            shows ={
                "name":"Shows",
                "subcategories":[
                    {
                        "name":"Cirque Du Soleil",
                        "shows":[
                            {"name":"KA", "img":"","location":"MGM Grand","document1":{"name":"Seating Chart","url":""}},
                            {"name":"O", "img":"","location":"Bellagio","document1":{"name":"Seating Chart","url":""}},
                            {"name":"LOVE", "img":"","location":"Mirage","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Michael Jackson\"s ONE", "img":"","location":"Mandalay Bay","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Mystere", "img":"","location":"Treasure Island","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Zumanity", "img":"","location":"New York New York","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Believe", "img":"","location":"Luxor","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Production",
                        "shows":[
                            {"name":"Le Reve", "img":"","location":"Wynn","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Blue Man Group", "img":"","location":"Monte Carlo","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Jabbawockeez", "img":"","location":"Luxor","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Absinthe", "img":"","location":"Caesars Palace","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Tournament of Kings", "img":"","location":"Excalibur","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Panda", "img":"","location":"Palazzo","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Recycled Percussion", "img":"","location":"The Quad","document1":{"name":"Seating Chart","url":""}},
                            {"name":"V The Show", "img":"","location":"Planet Hollywood","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Magic",
                        "shows":[
                            {"name":"David Copperfield", "img":"","location":"MGM Grand","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Criss Angel Believe", "img":"","location":"Luxor","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Penn & Teller", "img":"","location":"Rio","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Mac King Comedy Magic", "img":"","location":"Harrahs","document1":{"name":"Seating Chart","url":""}},
                            {"name":"The Mentalist", "img":"","location":"Planet Hollywood","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Illusions staring Jan Rouven", "img":"","location":"Riviera","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Nathan Burton", "img":"","location":"Planet Hollywood","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Mike Hammer", "img":"","location":"Four Queens","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Music",
                        "shows":[
                            {"name":"Michael Jackson\"s ONE", "img":"","location":"Mandalay Bay","document1":{"name":"Seating Chart","url":""}},
                            {"name":"The Beatles LOVE", "img":"","location":"Mirage","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Jersey Boys", "img":"","location":"Paris","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Rock of Ages", "img":"","location":"Venetian","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Menopause The Musical", "img":"","location":"Luxor","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Tony n\" Tina\"s Wedding", "img":"","location":"Bally\"s","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Raiding the Rock Vault", "img":"","location":"Tropicana","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Comedy",
                        "shows":[
                            {"name":"Brad Garrett\"s Comedy Club", "img":"","location":"MGM Grand","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Carrot Top", "img":"","location":"Luxor","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Terry Fator", "img":"","location":"Mirage","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Defending the Caveman", "img":"","location":"Harrahs","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Anthony Cools", "img":"","location":"Paris","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Tim Allen", "img":"","location":"Venetian","document1":{"name":"Seating Chart","url":""}},
                            {"name":"David Spade", "img":"","location":"Venetian","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Vinnie Favorito", "img":"","location":"Flamingo","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Adult",
                        "shows":[
                            {"name":"Jubilee", "img":"","location":"Bally\"s","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Fantasy", "img":"","location":"Luxor","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Beacher\s Madhouse", "img":"","location":"MGM Grand","document1":{"name":"Seating Chart","url":""}},
                            {"name":"X Burlesque", "img":"","location":"Flamingo","document1":{"name":"Seating Chart","url":""}},
                            {"name":"X Rocks", "img":"","location":"Rio","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Chippendales", "img":"","location":"Rio","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Recycled Percussion", "img":"","location":"The Quad","document1":{"name":"Seating Chart","url":""}},
                            {"name":"V The Show", "img":"","location":"Planet Hollywood","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Tribute",
                        "shows":[
                            {"name":"Australian Bee Gees Show", "img":"","location":"Excalibur","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Legends in Concert", "img":"","location":"Flamingo","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Veronic Voices", "img":"","location":"Bally\"s","document1":{"name":"Seating Chart","url":""}},
                            {"name":"MJ Live", "img":"","location":"Rio","document1":{"name":"Seating Chart","url":""}},
                            {"name":"All Shook Up", "img":"","location":"Planet Hollywood","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Purple Reign", "img":"http://res.cloudinary.com/blacknight811/image/upload/c_scale,h_229,r_30,w_277/v1444789658/purplereign_cc9k10.jpg","location":"Westgate Las Vegas","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Hitzville The Show", "img":"","location":"Planet Hollywood","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Frank Marino\"s Divas", "img":"","location":"The Linq","document1":{"name":"Seating Chart","url":""}}
                        ]
                    },{
                        "name":"Headliner",
                        "shows":[
                            {"name":"Boyz II Men", "img":"","location":"Mirage","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Celine Dion", "img":"","location":"Caesars Palace","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Elton John", "img":"","location":"Caesars Palace","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Rod Stewart", "img":"","location":"Caesars Palace","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Shania Twain", "img":"","location":"Caesars Palace","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Donny & Marie", "img":"","location":"Flamingo","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Frankie Moreno", "img":"","location":"Stratosphere","document1":{"name":"Seating Chart","url":""}},
                            {"name":"Matt Goss", "img":"","location":"Caesars Palace","document1":{"name":"Seating Chart","url":""}}
                        ]
                    }
                ]
            }
            ;

        collection.insert("shows", function (err,result) {
            if(err){console.log(err);}else{
                console.log("Inserted documents into the categories.ts collection. The documents inserted with _id are:", result.length,result);
            }
            db.close();
        });


    }
});
