Template.Perfil.helpers({
    perfil: function() {
        var userdId = FlowRouter.getParam("id");
        var info = Meteor.users.findOne({_id: userdId});
        return info;
    },

    posts: function() {
        var userdId = FlowRouter.getParam("id");
        var profileposts = Posts.find({authorId: userdId}).fetch();
        return profileposts;
    }

});