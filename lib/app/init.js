var pageInit = function(e){
	switch(e.detail.pageId){
		case 'page-detail': detail.init(); break;
	}

}
window.addEventListener("push",pageInit,false);