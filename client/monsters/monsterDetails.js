Template.MonsterDetails.onCreated(function(){
	let self = this;
	self.autorun(function(){
		let id = FlowRouter.getParam('id')
		self.subscribe('monsterDetails', id);
	})
});

Template.MonsterDetails.helpers({
	monster: ()=> {
		let id = FlowRouter.getParam('id')
		return Monsters.findOne({_id: id});
	}
})