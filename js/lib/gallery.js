define(["jquery"], function($){

	var gallery = {
		config : {
			source : 'http://cp.propcom.co.uk/venue/gallery',
			params : {},
			get_data : function(callback){
				var self = this;
				$.get(source, params, function(data){
					self.images = data;
					callback();
				});
			},
			per_page : 20,
			element : $('.js-gallery'),
			wrapper : $('<li>')
		},
		images : [],
		create : function(config){
			$.extend(this.config, config);

			var self = this;

			this.config.get_data.call(this, function(){
				self.apply_data();
			});
		},
		apply_data : function() {
			for(x in this.images){
				var image_wrap = this.config.wrapper.clone();
				image_wrap.append($('<img>').attr('src', this.images[x]));
				this.config.element.append(image_wrap);
			}
		}
	};

	return gallery;

});