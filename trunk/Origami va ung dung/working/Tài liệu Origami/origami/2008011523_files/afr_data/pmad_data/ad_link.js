function redirect(url) {
	window.open(url, "_blank");
}

function dispbar(url) {
	window.status = url;
	return true;
}

function clearbar() {
	window.status = "";
	return true;
}

function loadImage1() {
	document.getElementById("ma-thum-1").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl1;
}

function loadImage2() {
	document.getElementById("ma-thum-1").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl1;
	document.getElementById("ma-thum-2").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl2;
}

function loadImage3() {
	document.getElementById("ma-thum-1").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl1;
	document.getElementById("ma-thum-2").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl2;
	document.getElementById("ma-thum-3").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl3;
}

function loadImage4() {
	document.getElementById("ma-thum-1").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl1;
	document.getElementById("ma-thum-2").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl2;
	document.getElementById("ma-thum-3").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl3;
	document.getElementById("ma-thum-4").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl4;
}

function loadImage5() {
	document.getElementById("ma-thum-1").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl1;
	document.getElementById("ma-thum-2").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl2;
	document.getElementById("ma-thum-3").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl3;
	document.getElementById("ma-thum-4").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl4;
	document.getElementById("ma-thum-5").src = "http://www2.thumbnail-web.com/img?" + thumSize + "/" + imgUrl5;
}
