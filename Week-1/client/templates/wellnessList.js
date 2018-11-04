Template.wellnessList.helpers({
	notes: function() {
		return Notes.find({}, {sort : {score: -1}});
	}
})
