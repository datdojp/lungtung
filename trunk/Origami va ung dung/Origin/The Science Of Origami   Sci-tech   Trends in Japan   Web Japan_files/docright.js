function open_request(url,target) {
	window.open(url,target,"scrollbars=0,toolbar=0,width=300,height=155,resizable=0")
}
function open_subscribe(url,target) {
	window.open(url,target,"scrollbars=0,toolbar=0,width=300,height=155,resizable=0")
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}





function dirnum(num,name) {


var dirpath= '';

if(num == ""){
	dirpath= '';
}else if(num == "1"){
	dirpath= '../';
}else if(num == "2"){
	dirpath= '../../';
}else if(num == "3"){
	dirpath= '../../../';
}else if(num == "4"){
	dirpath= '../../../../';
}else if(num == "5"){
	dirpath= '../../../../../';
}





header = '';
header += '<table width="780" border="0" cellpadding="5" cellspacing="0">';
header += '<tr>';
header += '<td width="312"><a href="' + dirpath + 'index.html"><img src="' + dirpath + 'common/images/head.gif" width="312" height="56" border="0" alt="Trends in Japan"></a></td>';
header += '<td width="468" align="right" valign="bottom">';
header += '<form name="initialFrm" method="GET" action="http://search.web-japan.org/search.php">';
header += '<a href="' + dirpath + 'cn/index.html"><img src="' + dirpath + 'common/images/chinese.gif" width="74" height="18" border="0" alt="Chinese"></a>';
header += '<input type="text" size="20"name="q">';
header += '<input type="hidden" name="cs" value="iso-8859-1">';
header += '<input id="search_bn" title="search" name="search" type="submit" value="Search">';
header += '</form>';
header += '</td>';
header += '</tr>';
header += '</table>';
header += '<table width="780" border="0" cellpadding="0" cellspacing="0" bgcolor="#636363">';
header += '<tr>';
header += '<td width="89" height="26"><a href="' + dirpath + 'index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image15\',\'\',\'' + dirpath + 'common/images/01home_over.gif\',1)"><img src="' + dirpath + 'common/images/01home_out.gif" alt="Home" name="Image15" width="89" height="26" border="0"></a></td>';

if(name == "fashion"){
header += '<td width="88" height="26"><a href="' + dirpath + '07_fashion/index.html"><img src="' + dirpath + 'common/images/02fasion_over.gif" alt="Fashion" name="Image16" width="88" height="26" border="0"></a></td>';
} else {
header += '<td width="88" height="26"><a href="' + dirpath + '07_fashion/index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image16\',\'\',\'' + dirpath + 'common/images/02fasion_over.gif\',1)"><img src="' + dirpath + 'common/images/02fashion_out.gif" alt="Fashion" name="Image16" width="88" height="26" border="0"></a></td>';
}

if(name == "lifestyle"){
header += '<td width="89" height="26"><a href="' + dirpath + '07_lifestyle/index.html"><img src="' + dirpath + 'common/images/03lifestyle_over.gif" alt="Lifestyle" name="Image17" width="89" height="26" border="0"></a></td>';
} else {
header += '<td width="89" height="26"><a href="' + dirpath + '07_lifestyle/index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image17\',\'\',\'' + dirpath + 'common/images/03lifestyle_over.gif\',1)"><img src="' + dirpath + 'common/images/03lifestyle_out.gif" alt="Lifestyle" name="Image17" width="89" height="26" border="0"></a></td>';
}

if(name == "sci-tech"){
header += '<td width="89" height="26"><a href="' + dirpath + '07_sci-tech/index.html"><img src="' + dirpath + 'common/images/04scitech_over.gif" alt="Sci-tech" name="Image18" width="89" height="26" border="0"></a></td>';
} else {
header += '<td width="89" height="26"><a href="' + dirpath + '07_sci-tech/index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image18\',\'\',\'' + dirpath + 'common/images/04scitech_over.gif\',1)"><img src="' + dirpath + 'common/images/04scitech_out.gif" alt="Sci-tech" name="Image18" width="89" height="26" border="0"></a></td>';
}

if(name == "culture"){
header += '<td width="114" height="26"><a href="' + dirpath + '07_culture/index.html"><img src="' + dirpath + 'common/images/05popculture_over.gif" alt="Pop Culture" name="Image19" width="114" height="26" border="0"></a></td>';
} else {
header += '<td width="114" height="26"><a href="' + dirpath + '07_culture/index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image19\',\'\',\'' + dirpath + 'common/images/05popculture_over.gif\',1)"><img src="' + dirpath + 'common/images/05popculture_out.gif" alt="Pop Culture" name="Image19" width="114" height="26" border="0"></a></td>';
}

if(name == "style"){
header += '<td width="114" height="26"><a href="' + dirpath + '07_style/index.html"><img src="' + dirpath + 'common/images/06streetstyle_over.gif" alt="Street Style" name="Image20" width="114" height="26" border="0"></a></td>';
} else {
header += '<td width="114" height="26"><a href="' + dirpath + '07_style/index.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image20\',\'\',\'' + dirpath + 'common/images/06streetstyle_over.gif\',1)"><img src="' + dirpath + 'common/images/06streetstyle_out.gif" alt="Street Style" name="Image20" width="114" height="26" border="0"></a></td>';
}

if(name == "tales"){
header += '<td width="110" height="26"><a href="' + dirpath + '07_tales/contents.html"><img src="' + dirpath + 'common/images/07tokyotales_over.gif" alt="Tokyo Tales" name="Image21" width="110" height="26" border="0"></a></td>';
} else {
header += '<td width="110" height="26"><a href="' + dirpath + '07_tales/contents.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image21\',\'\',\'' + dirpath + 'common/images/07tokyotales_over.gif\',1)"><img src="' + dirpath + 'common/images/07tokyotales_out.gif" alt="Tokyo Tales" name="Image21" width="110" height="26" border="0"></a></td>';
}

if(name == "food"){
header += '<td width="87" height="26"><a href="' + dirpath + '07_food/jfd081003.html"><img src="' + dirpath + 'common/images/08jfood_over.gif" alt="Food &amp; Travel" name="Image22" width="87" height="26" border="0"></a></td>';
} else {
header += '<td width="87" height="26"><a href="' + dirpath + '07_food/jfd081003.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'Image22\',\'\',\'' + dirpath + 'common/images/08jfood_over.gif\',1)"><img src="' + dirpath + 'common/images/08jfood_out.gif" alt="Food &amp; Travel" name="Image22" width="87" height="26" border="0"></a></td>';
}

header += '</tr>';
header += '</table>';











footer = '';
footer += '<hr color="#d9d9d9" noshade width="780">';
footer += '<span class="footer">| <a href="' + dirpath + '07_about/about.html">About This Site</a> | <a href="' + dirpath + '07_about/policy.html">Privacy Policy</a> | <a href="javascript:open_request(\'' + dirpath + '07_about/request.html\')">Mail Us</a> | <a href="' + dirpath + '07_about/sitemap.html">Site Map</a> | <a href="javascript:open_subscribe(\'' + dirpath + '07_about/subscribe.html\')">Subscribe to TIJ What\'s New Service</a> |</span><br><br>';
footer += '<div align="center"><a href="' + dirpath + '../index.html"><img src="' + dirpath + 'webjapan/red_f_home.gif" alt="Web Japan" width="127" height="25" hspace="5" border="0"></a><a href="' + dirpath + '../plaza/quest.html"><img src="' + dirpath + 'webjapan/red_f_question.gif" alt="Questionnaire" width="97" height="25" hspace="5" border="0"></a><a href="http://web-japan.org/cgi-bin/plaza/bbs1.cgi?arg=start"><img src="' + dirpath + 'webjapan/red_f_bb.gif" alt="Bulletin Board" width="106" height="25" hspace="5" border="0"></a><a href="' + dirpath + '../plaza/usrclb.html"><img src="' + dirpath + 'webjapan/red_f_wnms.gif" alt="What\'s New Mail Service" width="97" height="25" hspace="5" border="0"></a><a href="http://www.mofa.go.jp/index.html" target="_blank"><img src="' + dirpath + 'webjapan/red_f_mofa.gif" alt="Ministry of Foreign Affairs (English)" width="135" height="25" hspace="5" border="0"></a></div><br>';
footer += '<div align="right"><span class="copy">copyright &copy; Web Japan.</span></div>';


menu = '';
menu += '<div class="leftmenu"><a href="' + dirpath + '07_style/index.html"><img src="' + dirpath + 'common/images/banner01.jpg" width="188" height="181" border="0" alt="Street Style"></a></div>';
menu += '<div class="leftmenu">';
menu += '<a href="' + dirpath + '07_tales/contents.html"><img src="' + dirpath + 'common/images/banner02_video.jpg" width="188" height="62" border="0" alt="Tokyo Tales"></a>';
menu += '<script type="text/javascript">';
menu += 'AC_FL_RunContent( \'data\',\'' + dirpath + 'common/images/tales.swf\',\'width\',\'161\',\'height\',\'119\',\'type\',\'application/x-shockwave-flash\',\'title\',\'Tokyo Tales\',\'movie\',\'' + dirpath + 'common/images/tales\' ); //end AC code';
menu += '</script><noscript>';
menu += '<object data="' + dirpath + 'common/images/tales.swf" width="161" type="application/x-shockwave-flash" title="Tokyo Tales">This is a Flash movie.';
menu += '<param name="movie" value="' + dirpath + 'common/images/tales.swf">';
menu += '</object>';
menu += '</noscript>';
menu += '<img src="' + dirpath + 'common/images/spacer.gif" width="188" height="10" border="0">';
menu += '</div>';
menu += '<div class="leftmenu"><a href="' + dirpath + '07_food/jfd081003.html"><img src="' + dirpath + 'common/images/banner03.jpg" width="188" height="181" border="0" alt="Food &amp; Travel"></a></div>';


memory = '';
memory += '<a href="' + dirpath + '07_memory/index.html"><img src="' + dirpath + 'common/images/top_banner3_1.jpg" width="190" height="135" border="0" alt="Memory Lane"></a>';




//v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}


}


