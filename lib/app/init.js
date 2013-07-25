var pageInit = function(e){
	switch(e.detail.pageId){
	//switch(document.querySelector('.page').id){
		case 'page-detail': detail.init(); break;
		case 'page-master': console.log(''); break;
		default: break;
	}

};
window.addEventListener("push",pageInit,false);