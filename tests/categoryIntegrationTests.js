var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    agent = request.agent(app);

describe('Category CRUD Test', function () {
    it('Should allow a category to be posted and return a updatedOn and _id', function (done) {
        var categoryPost = {
            name: 'new Category',
            icon: 'route to Category icon',
            subcategories: [],
            listings: [],
            createdOn: new Date()
        };

        agent.post('/api/categories')
            .send(categoryPost)
            .expect(201)
            .end(function (err,results) {
                if (err) {console.log('There was an error: ',err);}
                else{
                    results.body.updatedOn.should.not.equal('');
                    results.body.should.have.property('_id');
                    done();
                }

            })
    });

    afterEach(function(done){
        Category.remove().exec();
        done();
    })
});