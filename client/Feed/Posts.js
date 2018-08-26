Template.Post.helpers({

  authorusername: function() {
    var authorId = this.authorId;
    var author = Meteor.users.findOne({_id: authorId});
    return author.username;

  }
});


Template.Post.events({
  "click .like-button": function(eventt, template) {
    Meteor.call("likepost", template.data._id);
  }
});