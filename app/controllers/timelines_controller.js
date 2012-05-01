load('application');

before(loadTimeline, {only: ['show', 'edit', 'update', 'destroy']});

action('new', function () {
    this.title = 'New timeline';
    this.timeline = new Timeline;
    render();
});

action(function create() {
    Timeline.create(req.body.Timeline, function (err, timeline) {
        if (err) {
            flash('error', 'Timeline can not be created');
            render('new', {
                timeline: timeline,
                title: 'New timeline'
            });
        } else {
            flash('info', 'Timeline created');
            redirect(path_to.timelines());
        }
    });
});

action(function index() {
    this.title = 'Timelines index';
    Timeline.all(function (err, timelines) {
        render({
            timelines: timelines
        });
    });
});

action(function show() {
    this.title = 'Timeline show';
    render();
});

action(function edit() {
    this.title = 'Timeline edit';
    render();
});

action(function update() {
    this.timeline.updateAttributes(body.Timeline, function (err) {
        if (!err) {
            flash('info', 'Timeline updated');
            redirect(path_to.timeline(this.timeline));
        } else {
            flash('error', 'Timeline can not be updated');
            this.title = 'Edit timeline details';
            render('edit');
        }
    }.bind(this));
});

action(function destroy() {
    this.timeline.destroy(function (error) {
        if (error) {
            flash('error', 'Can not destroy timeline');
        } else {
            flash('info', 'Timeline successfully removed');
        }
        send("'" + path_to.timelines() + "'");
    });
});

function loadTimeline() {
    Timeline.find(params.id, function (err, timeline) {
        if (err) {
            redirect(path_to.timelines());
        } else {
            this.timeline = timeline;
            next();
        }
    }.bind(this));
}
