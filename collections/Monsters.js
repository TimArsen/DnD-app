Monsters = new Mongo.Collection('Monsters');

Monsters.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
})

MonsterSchema = new SimpleSchema({
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
		Monsters.update(id, {
			$set: {
				inCombat: !combat
			}
		});
	}
});

Monsters.attachSchema( MonsterSchema );