// Template.notesSubmit.events({
// 	'submit .notesSubmitForm': function(event,err) {

// 		event.preventDefault();
// 		var postTitle = event.target.postTitle.value; 		// get noteTitle value
// 		var note = event.target.note.value; 		// get note value

// 		// check if the value is empty
// 		if (note == "") {
// 			alert("Post details");
// 		} else {
// 			Meteor.call('noteInsert', note);
// 			Meteor.call('postTitleInsert', postTitle)
// 			/*post._id = Notes.insert(post);*/
// 			Router.go('notesList');
// 		}

// 	}
// });


Template.notesSubmit.events({
'submit form': function(e) {
e.preventDefault();

	var post = {
	postTitle: $(e.target).find('[name=postTitle]').val(),
	note: $(e.target).find('[name=note]').val()
	};

	var note = e.target.note.value;

	if (note == "cheese") {
		alert("You can't insert empty note. Try to write something funny instead! :)");
	} else {
		alert("You cannnnn insert empty note. Try to write something funny instead! :)");
		Meteor.call('noteInsert', note);
		/*post._id = Notes.insert(post);*/
		Router.go('notesList', post);
	}

	// HEY ELTON: This IF ELSE statement above isn't working. I've tried to modify it so many times
	// WHAT I want it to do is that if postTitle or note (the user's post title or details) have an
	// EMPTY value, I want an error message generated in the alert box and for them to note be able
	// TO submit it. They need to have something in there to submit so that there aren't a bunch of
	// BLANK posts. Thank you for your help

//	var noteTitle = e.target.postTitle.value;


	//if (noteBody == "") { // (noteTitle == "") or
		//alert("You can't insert an empty title or post. Try to tell us a little something instead! :)")
	//} else {
	//		post._id = Notes.insert(post);
		//	Router.go('notesList', post);
//		}
	}
});
