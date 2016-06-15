Template.CharacterDetails.onCreated(function(){
	let self = this;
	self.autorun(function(){
		let id = FlowRouter.getParam('id')
		self.subscribe('characterDetails', id);
	})
});

Template.CharacterDetails.helpers({
	character: ()=> {
		let id = FlowRouter.getParam('id')
		return Characters.findOne({_id: id});
	}
})