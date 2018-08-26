Posts = new Mongo.Collection("Posts");

Meteor.methods({
  
  "insertpost": function(formtext) {
		
    if(Meteor.userId() !== null) {
    	Posts.insert({
		    text: formtext,
		    authorId: Meteor.userId(),
		    likes: []
		  });
    }

	},

  "likepost": function(postId) {

  	Posts.update(postId, {
  		$addToSet: {
  			likes: Meteor.userId()
  		}
  	});

  },

  "dislikepost": function(postId) {
  	Posts.update(postId, {
  		$pull: {
  			likes: Meteor.userId()
  		}
  	});
  }

});

