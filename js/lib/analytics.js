define(["ga"], function() {

    return function(ga_code){
    	window.ga('create', ga_code);
    	window.ga('send', 'pageview');
    };

});