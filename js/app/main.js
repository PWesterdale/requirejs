define(["jquery", "analytics", "gallery"], function($, analytics, gallery) {

	analytics('UA-43028747-1');

	gallery.create({
		get_data : function(callback){
			for(x = 0; x <= this.config.per_page; x++){
				var rand = (Math.random() * 300 | 200) + 1;
				this.images.push('http://placekitten.com/300/' + rand );
			}
			callback();
		},
	});

});
