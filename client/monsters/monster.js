Template.monster.events({
	'click .toggle-combat': function() {
		Meteor.call('toggleMonsterCombat', this._id, this.inCombat)
	}
});