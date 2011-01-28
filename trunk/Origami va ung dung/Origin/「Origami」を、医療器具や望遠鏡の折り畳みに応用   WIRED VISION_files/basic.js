
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;function ControlVersion()
{var version;var axo;var e;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version=axo.GetVariable("$version");}catch(e){}
if(!version)
{try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version="WIN 6,0,21,0";axo.AllowScriptAccess="always";version=axo.GetVariable("$version");}catch(e){}}
if(!version)
{try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version=axo.GetVariable("$version");}catch(e){}}
if(!version)
{try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version="WIN 3,0,18,0";}catch(e){}}
if(!version)
{try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");version="WIN 2,0,0,11";}catch(e){version=-1;}}
return version;}
function GetSwfVer(){var flashVer=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;var descArray=flashDescription.split(" ");var tempArrayMajor=descArray[2].split(".");var versionMajor=tempArrayMajor[0];var versionMinor=tempArrayMajor[1];var versionRevision=descArray[3];if(versionRevision==""){versionRevision=descArray[4];}
if(versionRevision[0]=="d"){versionRevision=versionRevision.substring(1);}else if(versionRevision[0]=="r"){versionRevision=versionRevision.substring(1);if(versionRevision.indexOf("d")>0){versionRevision=versionRevision.substring(0,versionRevision.indexOf("d"));}}
var flashVer=versionMajor+"."+versionMinor+"."+versionRevision;}}
else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)flashVer=4;else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)flashVer=3;else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)flashVer=2;else if(isIE&&isWin&&!isOpera){flashVer=ControlVersion();}
return flashVer;}
function DetectFlashVer(reqMajorVer,reqMinorVer,reqRevision)
{versionStr=GetSwfVer();if(versionStr==-1){return false;}else if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");tempString=tempArray[1];versionArray=tempString.split(",");}else{versionArray=versionStr.split(".");}
var versionMajor=versionArray[0];var versionMinor=versionArray[1];var versionRevision=versionArray[2];if(versionMajor>parseFloat(reqMajorVer)){return true;}else if(versionMajor==parseFloat(reqMajorVer)){if(versionMinor>parseFloat(reqMinorVer))
return true;else if(versionMinor==parseFloat(reqMinorVer)){if(versionRevision>=parseFloat(reqRevision))
return true;}}
return false;}}
function AC_AddExtension(src,ext)
{if(src.indexOf('?')!=-1)
return src.replace(/\?/,ext+'?');else
return src+ext;}
function AC_Generateobj(objAttrs,params,embedAttrs)
{var str='';if(isIE&&isWin&&!isOpera)
{str+='<object ';for(var i in objAttrs)
{str+=i+'="'+objAttrs[i]+'" ';}
str+='>';for(var i in params)
{str+='<param name="'+i+'" value="'+params[i]+'" /> ';}
str+='</object>';}
else
{str+='<embed ';for(var i in embedAttrs)
{str+=i+'="'+embedAttrs[i]+'" ';}
str+='> </embed>';}
document.write(str);}
function AC_FL_RunContent(){var ret=AC_GetArgs
(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_SW_RunContent(){var ret=AC_GetArgs
(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_GetArgs(args,ext,srcParamName,classid,mimeType){var ret=new Object();ret.embedAttrs=new Object();ret.params=new Object();ret.objAttrs=new Object();for(var i=0;i<args.length;i=i+2){var currArg=args[i].toLowerCase();switch(currArg){case"classid":break;case"pluginspage":ret.embedAttrs[args[i]]=args[i+1];break;case"src":case"movie":args[i+1]=AC_AddExtension(args[i+1],ext);ret.embedAttrs["src"]=args[i+1];ret.params[srcParamName]=args[i+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblclick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":ret.objAttrs[args[i]]=args[i+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":ret.embedAttrs[args[i]]=ret.objAttrs[args[i]]=args[i+1];break;default:ret.embedAttrs[args[i]]=ret.params[args[i]]=args[i+1];}}
ret.objAttrs["classid"]=classid;if(mimeType)ret.embedAttrs["type"]=mimeType;return ret;}

(function($){$.fn.biggerlink=function(options){var settings={hoverclass:'hover',clickableclass:'hot',follow:true};if(options){$.extend(settings,options);}
$(this).filter(function(){return $('a',this).length>0;}).addClass(settings.clickableclass).each(function(i){$(this).attr('title',$('a[title]:first',this).attr('title'));$(this).mouseover(function(){window.status=$('a:first',this).attr('href');$(this).addClass(settings.hoverclass);}).mouseout(function(){window.status='';$(this).removeClass(settings.hoverclass);}).bind('click',function(){$(this).find('a:first').trigger('click');}).find('a').bind('focus',function(){$(this).parents('.'+settings.clickableclass).addClass(settings.hoverclass);}).bind('blur',function(){$(this).parents('.'+settings.clickableclass).removeClass(settings.hoverclass);}).end().find('a:first').bind('click',function(e){if(settings.follow==true)
{window.location=this.href;}
e.stopPropagation();}).end().find('a',this).not(':first').bind('click',function(){$(this).parents('.'+settings.clickableclass).find('a:first').trigger('click');return false;});});return this;};})(jQuery);

//var yuga={preloader:{loadedImages:[],load:function(url){var img=this.loadedImages;var l=img.length;img[l]=new Image();img[l].src=url;}},URI:function(s){this.originalPath=s;this.getAbsolutePath=function(path){if(!path.match(/^(mailto:)|(javascript:)/)){var img=new Image();img.src=path;path=img.src;img.src='#';}
//return path;};this.absolutePath=this.getAbsolutePath(s);this.isSelfLink=(this.absolutePath==location.href);var fields={'schema':2,'username':5,'password':6,'host':7,'path':9,'query':10,'fragment':11};var r=/^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);for(var field in fields){this[field]=r[fields[field]];}}};

//$(function(){$('.btn').each(function(){this.originalSrc=$(this).attr('src');this.rolloverSrc=this.originalSrc.replace(/(\.gif|\.jpg|\.png)/,"_on$1");yuga.preloader.load(this.rolloverSrc);});$('.btn').not($('.btngroup .btn')).hover(function(){$(this).attr('src',this.rolloverSrc);},function(){$(this).attr('src',this.originalSrc);});$('.btngroup').hover(function(){$(this).find('.btn').each(function(){$(this).attr('src',this.rolloverSrc);});},function(){$(this).find('.btn').each(function(){$(this).attr('src',this.originalSrc);});});try{tb_init('a[@href$=".jpg"], a[@href$=".gif"], a[@href$=".png"]');}catch(e){}
//$('ul').each(function(){$(this).find('li:odd').addClass('even');$(this).find('li:even').addClass('odd');});$('table').each(function(){$(this).find('tr:odd').addClass('even');$(this).find('tr:even').addClass('odd');});$(':first-child').addClass('firstChild');$(':last-child').addClass('lastChild');$(':empty').addClass('empty');});

jQuery.changeLetterSize={handlers:[],interval:1000,currentSize:0};(function($){var self=$.changeLetterSize;var ins=$('<ins>M</ins>').css({display:'block',visibility:'hidden',position:'absolute',padding:'0',top:'0'});var isChanged=function(){ins.appendTo('body');var size=ins[0].offsetHeight;ins.remove();if(self.currentSize==size)return false;self.currentSize=size;return true;};$(isChanged);var observer=function(){if(!isChanged())return;$.each(self.handlers,function(i,handler){handler();});};self.addHandler=function(func){self.handlers.push(func);if(self.handlers.length==1){setInterval(observer,self.interval);}};})(jQuery);(function($){var sets=[];var flatHeights=function(set){var maxHeight=0;set.each(function(){var height=this.offsetHeight;if(height>maxHeight)maxHeight=height;});set.css('height',maxHeight+'px');};jQuery.fn.flatHeights=function(){if(this.length>1){flatHeights(this);sets.push(this);}
return this;};$.changeLetterSize.addHandler(function(){$.each(sets,function(){this.height('auto');flatHeights(this);});});})(jQuery);

//var detectImg=function(imgsrc){$('body').addClass('image-enable');var imgsrc='/common/images/base_gnavi_001.gif';$('<img>').attr('src',imgsrc).attr('id','detectImage').css({'opacity':'0','position':'absolute','top':0}).wrap('<div />').parent().appendTo('body');$(window).load(function(){if(!$('#detectImage').width()){$('body').addClass('image-disable');$('body').removeClass('image-enable');}})};
var detectImg=function(imgsrc){$('body').addClass('image-enable')}
$(detectImg)

//if(!amn_keywords){var amn_keywords;}
var amn_keywords = '/IT/%e3%82%b5%e3%82%a4%e3%82%a8%e3%83%b3%e3%82%b9/%e3%83%86%e3%82%af%e3%83%8e%e3%83%ad%e3%82%b8%e3%83%bc/%e7%b5%8c%e6%b8%88/%e3%83%93%e3%82%b8%e3%83%8d%e3%82%b9/%e7%92%b0%e5%a2%83/%e3%82%a8%e3%82%b3/%e7%a4%be%e4%bc%9a/%e5%9b%bd%e9%9a%9b%e6%83%85%e5%8b%a2/%e3%82%ab%e3%83%ab%e3%83%81%e3%83%a3%e3%83%bc/%e3%83%a1%e3%83%87%e3%82%a3%e3%82%a2/%e3%83%af%e3%83%bc%e3%82%af%e3%82%b9%e3%82%bf%e3%82%a4%e3%83%ab/%e3%83%8f%e3%83%83%e3%82%ad%e3%83%b3%e3%82%b0/%e3%83%87%e3%82%b6%e3%82%a4%e3%83%b3';