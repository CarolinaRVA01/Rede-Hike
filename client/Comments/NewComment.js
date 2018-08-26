Template.NewComment.events({
    "submit form": function(event, template) {
        event.preventDefault();
        var text = event.target.text.value;
        var postId = template.data._id;
        Meteor.call("insertComment", text, postId);
        event.target.text.value = "";
    }
});

