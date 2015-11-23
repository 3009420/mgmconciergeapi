var should = require('should'),
    sinon = require('sinon');

describe('Categories Controller Tests', function () {
    describe('Post', function () {
        it('should not allow and empty title on poast', function () {
            var Category = function (category) {
                this.save = function () {

                }
            };
            var req = {
                body: {
                    icon: 'http://res.blacknight.com'
                }
            };

            var res = {
                status: sinon.spy(),
                send:sinon.spy()

            };

            var bookController = require('../controllers/categoriesController')(Category);

            bookController.post(req,res);
            res.status.calledWith(400).should.equal(true,'Bad Status '+ res.status.args[0][0]);
            res.send.calledWith('Name is required').should.equal(true);
        })
    })
});