var baseW = 751;	//基準となるブレークポイント
 
var viewportContent;
var w = window.innerWidth || document.documentElement.clientWidth || 0;
if(w >= baseW){
	viewportContent = "width="+"1200"+"px,user-scalable=yes,shrink-to-fit=no";
}else{
	viewportContent = "width="+"750"+"px,user-scalable=yes,shrink-to-fit=no";
}
document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
