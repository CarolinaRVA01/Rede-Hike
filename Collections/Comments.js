Comments = new Mongo.Collection("comments");

Meteor.methods({
    "insertComment": function(commenttext, postId) {
        if(Meteor.userId() !== null) {
            Comments.insert({
                text: commenttext,
                post: postId,
                author: Meteor.userId()
            });
        }
    }
});