
var $ = function(selector){
	return document.querySelector(selector);
} 

var detail = {
	

	init: function(){
		this.fetch();
		this.draw();
	},
	fetch: function(){

	},
	draw: function(){
		$('.content').innerHTML = '<h3>Detail Item 1</h3>'
									+'<p> Subtitle </p>'
									+'<ul class="list">'
									+'<li class="list-divider">Detail description</li>'
									+'<li class="list-item-multi-line">'
									+'<p> Data fetched from server!</p>'
									+'</li>'
									+'</ul>'
	}
}