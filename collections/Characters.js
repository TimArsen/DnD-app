Characters = new Mongo.Collection('characters');

Characters.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
})

CharacterSchema = new SimpleSchema({
	name : {
		type: String,
		label: "Name"
	},
	picture: {
	    type: String,
	    label: "Picture"
	},
	initiative: {
		type: Number,
		defaultValue: 0,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	inCombat: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	owner: {
		type: String,
		label: 'Owner',
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: 'hidden'
		},
	},
	createdAt: {
		type: Date,
		label: "Created at",
		autoValue: function(){
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleCombat: function(id, combat) {
		Characters.update(id, {
			$set: {
				inCombat: !combat
			}
		});
	}
});

Characters.attachSchema( CharacterSchema );