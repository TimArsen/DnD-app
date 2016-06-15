var imageStore = new FS.Store.GridFS('images');

Images = new FS.Collection('pictures', {
	stores: [new FS.Store.FileSystem('pictures', {path: '~/public'})]
});

Images.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	},
	download: function(){
		return true;
	}
});