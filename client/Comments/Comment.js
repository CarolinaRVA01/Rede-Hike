Template.Comment.helpers({
    authorusername: function() {
        var authorId = this.author;
        var author = Meteor.users.findOne({_id: authorId});
        return author.username;
    }
});