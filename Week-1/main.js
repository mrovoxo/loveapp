Notes = new Meteor.Collection('notes');

Comments = new Mongo.Collection("comments");

Router.route('/', {name: 'accounts'})

Router.route('/wellness', {name: 'wellness'})

Router.route('/wellnesssubmit', {name: 'wellnessSubmit'})

Router.route('/wellnesslist', {name: 'wellnessList'})

Router.route('/noteslist', {name: 'notesList'})

Router.route('/submit', {name: 'notesSubmit'});

Router.route('/login', {name: 'firstpage'});


// Josh: tried routing to a new list from /wellness
// Router.route('/wellness', {name: 'notesList'})
// Router.route('/wellness', {name: 'notes'})

Router.route('/notes/:_id', {
	name: 'notePage',
	data: function() {
		return Notes.findOne(this.params._id);
	}
});
