Meteor.methods({
	noteInsert: function(note) {
		var postId = Notes.insert({
			note : note, 
			score : 0,
			submitted : new Date(),
		});
	},

	commentInsert: function(comment) {
		Comments.insert(comment);
	}


});
