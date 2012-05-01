require('../test_helper.js').controller('timelines', module.exports);

var sinon  = require('sinon');

function ValidAttributes () {
    return {
        timeAt: '',
        title: '',
        description: '',
        media: '',
        caption: ''
    };
}

exports['timelines controller'] = {

    'GET new': function (test) {
        test.get('/timelines/new', function () {
            test.success();
            test.render('new');
            test.render('form.' + app.set('view engine'));
            test.done();
        });
    },

    'GET index': function (test) {
        test.get('/timelines', function () {
            test.success();
            test.render('index');
            test.done();
        });
    },

    'GET edit': function (test) {
        var find = Timeline.find;
        Timeline.find = sinon.spy(function (id, callback) {
            callback(null, new Timeline);
        });
        test.get('/timelines/42/edit', function () {
            test.ok(Timeline.find.calledWith('42'));
            Timeline.find = find;
            test.success();
            test.render('edit');
            test.done();
        });
    },

    'GET show': function (test) {
        var find = Timeline.find;
        Timeline.find = sinon.spy(function (id, callback) {
            callback(null, new Timeline);
        });
        test.get('/timelines/42', function (req, res) {
            test.ok(Timeline.find.calledWith('42'));
            Timeline.find = find;
            test.success();
            test.render('show');
            test.done();
        });
    },

    'POST create': function (test) {
        var timeline = new ValidAttributes;
        var create = Timeline.create;
        Timeline.create = sinon.spy(function (data, callback) {
            test.strictEqual(data, timeline);
            callback(null, timeline);
        });
        test.post('/timelines', {Timeline: timeline}, function () {
            test.redirect('/timelines');
            test.flash('info');
            test.done();
        });
    },

    'POST create fail': function (test) {
        var timeline = new ValidAttributes;
        var create = Timeline.create;
        Timeline.create = sinon.spy(function (data, callback) {
            test.strictEqual(data, timeline);
            callback(new Error, timeline);
        });
        test.post('/timelines', {Timeline: timeline}, function () {
            test.success();
            test.render('new');
            test.flash('error');
            test.done();
        });
    },

    'PUT update': function (test) {
        Timeline.find = sinon.spy(function (id, callback) {
            test.equal(id, 1);
            callback(null, {id: 1, updateAttributes: function (data, cb) { cb(null); }});
        });
        test.put('/timelines/1', new ValidAttributes, function () {
            test.redirect('/timelines/1');
            test.flash('info');
            test.done();
        });
    },

    'PUT update fail': function (test) {
        Timeline.find = sinon.spy(function (id, callback) {
            test.equal(id, 1);
            callback(null, {id: 1, updateAttributes: function (data, cb) { cb(new Error); }});
        });
        test.put('/timelines/1', new ValidAttributes, function () {
            test.success();
            test.render('edit');
            test.flash('error');
            test.done();
        });
    },

    'DELETE destroy': function (test) {
        test.done();
    },

    'DELETE destroy fail': function (test) {
        test.done();
    }
};

