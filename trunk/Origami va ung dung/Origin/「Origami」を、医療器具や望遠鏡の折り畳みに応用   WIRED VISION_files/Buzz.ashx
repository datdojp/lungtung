try{var buzzTemplate_167252="{eval}\nLoadCSS(\"http://nmp.newsgator.com/host/BPDSN/css/normal.css\");\n{/eval}\n<div id=\"ngWidgetBox_${BuzzId}\" class=\"ng_buzzContainer ngWidgetBox_rss ngWidgetBox_wired\">\n  <div class=\"ngOuterBoxContent\">\n    <div id=\"ngOuterBoxContent_rss\">\n      <div id=\"ngOuterBoxContent_rss_h\">\n        <h5><a href=\"http://www.nikkeibp.co.jp/\" target=\"_blank\">nikkeiBPnet &#12504;&#12483;&#12489;&#12521;&#12452;&#12531;</a></h5>\n        <span></span>\n      </div>\n      <div class=\"ngInnerBoxContent\">\n        <ul class=\"ngInnerBoxOverflow\">\n          {for Post in Data}\n            <li class=\"ngWidgetPostTitle\"><a href=\"${Post.HtmlUrl|html}\" onclick=\"${AttentionClickJS(Post)}\" target=\"_blank\">${Post.Title|default:\"(no title)\"|excerpt:45,\"...\"}</a></li>\n          {forelse}\n          {/for}\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n";}catch(e){}

try{var buzzStyles_167252="/* --------------RSS WidgetBox------------------ */\n.ng_buzzAutoTarget .ngWidgetBox_wired div#ngOuterBoxContent_rss div#ngOuterBoxContent_rss_h h5 {\n\tbackground-image:url(http://nmp.newsgator.com/host/BPDSN/img/090123_wired_h_bg.jpg);\n}\n.ngWidgetBox_wired div#ngOuterBoxContent_rss,\n.ngWidgetBox_wired div#ngOuterBoxContent_rss div.ngInnerBoxContent{\n\tbackground-color:#D3DADB;\n}\n.ng_buzzAutoTarget div#ngOuterBoxContent_rss div#ngOuterBoxContent_rss_h h5 a:hover {\n\tcolor:#FFFFFF !important;\n}\n.ng_buzzAutoTarget div#ngOuterBoxContent_rss ul li a:hover {\n\tcolor:#000000 !important;\n}\n#ngWidgetBox_167252,\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss,\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss div#ngOuterBoxContent_rss_h,\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss div.ngInnerBoxContent{\n\twidth:300px !important;\n}\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss div#ngOuterBoxContent_rss_h h5,\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss li {\n\twidth:290px !important;\n}\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss li{\n\tbackground-image:url(http://nmp.newsgator.com/host/BPDSN/img/border_v.gif) !important;\n\theight: 41px;\n}\n#ngWidgetBox_167252 div#ngOuterBoxContent_rss li a{\n\twidth:272px !important;\n}\n\n";}catch(e){}



(function(){
if(!window.ng || !window.ng.buzz){
document.write('<script language="javascript" src="http://nmp.newsgator.com/NGBuzz/3656/load.ashx/buzz"></script>');
}
var targetId = "buzzTgt_167252_" + Math.floor(Math.random() * 10000000);
document.write('<div style="display:inline" id="' + targetId + '" class="ng_buzzAutoTarget"></div>');

var s = function(){
	try{
		if(typeof ng != "undefined" && typeof ng.buzz != "undefined" && ng.buzz.Buzzlet){
			var b = new ng.buzz.Buzzlet({templateId:'buzzTemplate_167252',buzzTracking:{myTrackingId:null,parentTrackingId:null},scriptCtx:'widget',analytics:{ngAcct:'UA-130916-2'},orgCode:'BPDSN',apiToken:'A93F45AE2C374D73B57BA8ED8404A642',name:'_nikkeiBPnet - 090123_WIRED_rss_column300',buzzAppUrl:'http://nmp.newsgator.com/NGBuzz/',buzzId:167252,directUrl:'http://hosted.newsgator.com/',extraArgs:{},targetId:null});
			
			b._targetId = targetId;
			
			b.render();
		} else {
			setTimeout(function(){
				s();
			}, 50);
		}
	} catch(e){
		
	}
};
setTimeout(s, 1); 
})();var buzzScript_167252 = " ";

try{window.ngbuzzScriptsLoaded = window.ngbuzzScriptsLoaded || {}; window.ngbuzzScriptsLoaded['167252'] = true; ng.buzz.scriptsLoaded['167252']=true;}catch(e){}