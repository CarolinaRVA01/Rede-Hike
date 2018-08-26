Template.Post.helpers({

  authorusername: function() {
    var authorId = this.authorId;
    var author = Meteor.users.findOne({_id: authorId});
    return author.username;
  },

  likenumber: function() {
        return this.likes.length;
  },

  userliked: function() {
    var likes = this.likes;
    var position = likes.indexOf(Meteor.userId());

    if(position === -1) {
        return false;
    } else {
        return true;
    }
  },

  comments: function() {
    return Comments.find({post: this._id}).fetch();
  }
 
});


Template.Post.events({
  "click .like-button": function(eventt, template) {
    Meteor.call("likepost", template.data._id);
  },
  "click .dislike-button": function(event, template) {
        Meteor.call("dislikepost", template.data._id);     
    }
});



