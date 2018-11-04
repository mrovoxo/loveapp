Template.wellnessSubmit.events({
	'submit .notesSubmitForm': function(event,err) {

		event.preventDefault();
		var note = event.target.note.value; 		// get note value

		// check if the value is empty
		if (note == "") {
			alert("You can't insert empty note. Try to write something funny instead! :)");
		} else {
			Meteor.call('noteInsert', note);
			/*post._id = Notes.insert(post);*/
			Router.go('wellnessList');
		}

	}
});
