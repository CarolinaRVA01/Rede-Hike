Template.NewPost.events({

  "submit form": function(event, template) {

    event.preventDefault();
    var formtext = event.target.text.value;

    Meteor.call("insertpost", formtext);

    event.target.text.value = "";

  }

});

