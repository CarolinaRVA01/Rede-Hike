Template.Feed.events({

	"submit form": function(event, template) {
    event.preventDefault();
    console.log(event.target.text.value);
	}

});
