function LoadIframe(obj) {
	var div = document.getElementById("forum-container");
	var iframe = div.getElementsByTagName("iframe")[0];
	if (obj.href == "javascript:void(0)"){
		iframe.src = obj.name;
	} else {
		iframe.src = obj.href;
		obj.name = obj.href;
		obj.href= "javascript:void(0)";	
	}
	
	div.style.display = "block";
	var posts = div.parentNode.getElementsByTagName("div");
	for (var i=0;i<posts.length;i++)
		if (posts[i].className == "Post"){
			posts[i].style.display = "none";
		}
	
	var div2 = document.getElementById("forum-container-2");
	if (div2) {
		div2.style.display = "none";
	}
}

function resizeIframe(iframe){
    if (iframe.contentDocument) {
		//FF
		iframe.style.height = iframe.contentDocument.height + 24 + "px";
   	}
	if (iframe.contentWindow.document.body) {
   		// IE7
  		iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 24 + "px";
 	}
};
