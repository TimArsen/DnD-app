Template.Monsters.onCreated(function() {
	let self = this;
	self.autorun(function() {
		self.subscribe('monsters');
	})
});

Template.Monsters.helpers({
	monsters: ()=> {
		return Monsters.find({});
	}
});