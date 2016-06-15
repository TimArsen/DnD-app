Template.character.events({
	'click .toggle-combat': function() {
		Meteor.call('toggleCombat', this._id, this.inCombat)
	}
});