Template.notePage.helpers({
	comments: function() {
		return Comments.find({postId:this._id});
	}
});
