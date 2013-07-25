var detail = {
	

	init: function(){
		this.fetch();
		this.draw();
	},
	fetch: function(){

	},
	draw: function(){
		document.querySelector('.content').innerHTML = '<h3>Data fetched from server</h3>';
	}
};