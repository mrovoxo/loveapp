Template.wellnessItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.yes':function() {
		if(Meteor.user()) {
			var postId = Notes.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var noteId = Session.get('selected_note');
				console.log('Voting');
				Notes.update(noteId, {$inc: {'score': 1 }});
				Notes.update(noteId, {$addToSet: {voted : Meteor.userId()}});
			}
		}
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Notes.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var noteId = Session.get('selected_note');
				console.log('Voting');
				Notes.update(noteId, {$inc: {'score': -1 }});
				Notes.update(noteId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('delete');
					Notes.remove({_id:this._id})
				}
			}
		}
	}
});

Template.wellnessItem.helpers({
	commentsCount: function() {
		return Comments.find({postId:this._id}).count();
	}
});
