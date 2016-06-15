Meteor.publish('characters', function(){
	return Characters.find({owner: this.userId});
});

Meteor.publish('characterDetails', function(id){
	check(id, String);
	return Characters.find({_id: id});
});

Meteor.publish('combat', function(){
	return Characters.find({inCombat: true});
});