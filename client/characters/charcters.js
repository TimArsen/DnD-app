Template.Characters.onCreated(function() {
	let self = this;
	self.autorun(function() {
		self.subscribe('characters');
	})
});

Template.Characters.helpers({
	characters: ()=> {
		return Characters.find({});
	}
});