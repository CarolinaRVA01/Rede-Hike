Template.Feed.events({

  "submit form": function(event, template) {

    event.preventDefault();
    var formtext = event.target.text.value;
    console.log(formtext);
    Posts.insert({
    	text: formtext
    });

    event.target.text.value = "";

  }

});

Template.Feed.helpers({

  Posts: function(){

    var CollectionPosts = Posts.find().fetch();
    return CollectionPosts;

  }

});
