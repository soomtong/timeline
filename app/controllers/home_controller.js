load('application');
layout('home');

action(function index() {
    this.title = 'Development Log';
    Timeline.all(function (err, timelines) {
        render({
            timelines: timelines
        });
	});
});

