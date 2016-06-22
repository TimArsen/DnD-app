if (Meteor.isClient){
	Accounts.onLogin(function() {
		FlowRouter.go('characters');
	});
	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('characters');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render("HomeLayout");
	}
});

FlowRouter.route('/characters', {
	name: 'characters',
	action() {
		BlazeLayout.render("MainLayout", {main: 'Characters'});
	}
});

FlowRouter.route('/characters/:id', {
	name: 'characterDetails',
	action() {
		BlazeLayout.render("MainLayout", {main: 'CharacterDetails'});
	}
});

FlowRouter.route('/combat', {
	name: 'combat',
	action() {
		BlazeLayout.render("MainLayout", {main: 'Combat'});
	}
});