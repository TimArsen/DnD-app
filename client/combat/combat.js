Template.Combat.onCreated(function(){
	let self = this;
	self.autorun(function(){
		self.subscribe('combat');
	})
});

Template.Combat.helpers({
	characters: ()=> {
		return Characters.find({});
	},
	combats: ()=> {
		return Combats.find({});
	}
});