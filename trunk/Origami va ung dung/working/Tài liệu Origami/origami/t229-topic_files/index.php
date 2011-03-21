if (!window.ZM) 
	{ZM = {};} 	 
	if (!ZM.locale) {ZM.locale = "en_US";} 
	if (!ZM.localeIsRTL) {ZM.localeIsRTL = false;}
	
	if(!window.ZM)window.ZM={};
	if(!window.ZM.Share){
		ZM.Share={
			results:{},
			resetUrls:function(){
				this.urls={};
				this.urlsA=[];
			},
			addQS:function(url,qs){
				var a=[];
				for(var k in qs)
					if(qs[k])a.push(k.toString()+'='+encodeURIComponent(qs[k]));
					return url+'&'+a.join('&');
			},
			getUrl:function(dom){return dom.getAttribute('share_url')||window.location.href;},
			getType:function(dom){return dom.getAttribute('type')||'icon';},
			getRel:function(dom){return dom.getAttribute('rel');},
			pretty:function(c){return c>=1e+07?Math.round(c/1e+06)+'M':(c>=10000?Math.round(c/1000)+'K':c);},
			getMeta:function(dom){
				var meta = document.getElementsByTagName('meta')
				var desc = '';
				for(var i=0; i<meta.length; i++) {
					if(meta[i].getAttribute('name') != null && meta[i].getAttribute('name').toLowerCase()=='description') {
						desc = meta[i].getAttribute('content');	
						break;
					}
				}
				if (desc==''){
					var all_p=document.getElementsByTagName('p');
					if (all_p.length>0){
						try {
							for (var ip in all_p) {
								if (all_p[ip].getAttribute('class').toLowerCase().indexOf('title')==-1){
									desc = this.stripTags(all_p[ip].innerHTML);
									break;
								}
							}
						} catch (ex) {}
					}
				}
				return desc;
			},
			stripTags : function (str, allowed_tags) {
			    var key = '', allowed = false;
			    var matches = [];    var allowed_array = [];
			    var allowed_tag = '';
			    var i = 0;
			    var k = '';
			    var html = ''; 
			    var replacer = function (search, replace, str) {
			        return str.split(search).join(replace);
			    };
			    /** Build allowes tags associative array **/
			    if (allowed_tags) {
			        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
			    }
			     str += '';
			 
			    matches = str.match(/(<\/?[\S][^>]*>)/gi);
			    for (key in matches) {
			        if (isNaN(key)) {
			            continue;        
			        }
			 
			        html = matches[key].toString();
			        allowed = false;
			 
			        for (k in allowed_array) {    
			            allowed_tag = allowed_array[k];
			            i = -1;
			 
			            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}            
			            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
			            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}
			 
			            if (i == 0) {                
			            	allowed = true;
			                break;
			            }
			        }
			        if (!allowed) {
			            str = replacer(html, "", str);
			        }
			    }
			    return str;
			},			
			getImages:function(dom) {
				var arrImg = new Array();
				var meta_link = document.getElementsByTagName('link')
				if(typeof(meta_link)!='undefined'&&meta_link!=null && meta_link.length>0) {
					var hinh='';
					for(var i=0; i<meta_link.length; i++) {
						if(meta_link[i].getAttribute('rel') != null && meta_link[i].getAttribute('rel').toLowerCase()=='image_src') {
							hinh = meta_link[i].getAttribute('href');	
							break;
						}
					}
					if (hinh!='') {
						arrImg.push(hinh);
					}
				} 
				if(arrImg.length==0) {
					var image = document.getElementsByTagName('img');
					for(var i=0; i<image.length; i++) {
							if(image[i].getAttribute('src') != null && image[i].getAttribute('src').search(/jpg/i) != -1) {
								var hinh = image[i].getAttribute('src');			
								var inof = hinh.indexOf("/");			
								if(inof != -1) {
									if (inof == 0) {
										hinh = (hinh.indexOf("http://")==-1)? "http://" + document.domain	+ hinh : hinh;
									} else {
										hinh = (hinh.indexOf("http://")==-1)? "http://" + document.domain	+ "/" + hinh : hinh;
									}
								} else if (inof==-1){
									hinh = location.href + hinh;
								}
								if(hinh!='') {
									arrImg.push(hinh);
									if(arrImg.length>=5)
										break;
								}
							}			
					}
				}
				return arrImg.join(",");
			},
			getMedia:function(dom)
			{
				var media_data = document.getElementsByTagName('link'), _code='';
				for(var ind=0; ind<media_data.length; ind++)
				{
					if(typeof media_data[ind].getAttribute('rel')!='undefined' && media_data[ind].getAttribute('rel')=='video_src')
					{
						_code = media_data[ind].getAttribute('href');	
						break;
					}
				}
				return _code;
			},
			getWidth:function(dom)
			{
				var width_data = document.getElementsByTagName('meta'), _width='';
				for(var ind=0; ind<width_data.length; ind++)
				{
					if(typeof width_data[ind].getAttribute('name')!='undefined' && width_data[ind].getAttribute('name')=='video_width')
					{
						_width = width_data[ind].getAttribute('content');	
						break;
					}
				}
				return _width;
			},
			getHeight:function(dom)
			{
				var height_data = document.getElementsByTagName('meta'), _height='';
				for(var ind=0; ind<height_data.length; ind++)
				{
					if(typeof height_data[ind].getAttribute('name')!='undefined' && height_data[ind].getAttribute('name')=='video_height')
					{
						_height = height_data[ind].getAttribute('content');	
						break;
					}
				}
				return _height;
			},			
			updateButton:function(dom){var url=this.getUrl(dom);if(this.results[url])dom.zm_count=this.results[url].share_count;this.displayBox(dom,3);},
			displayBox:function(dom,_L1){
				if(typeof(dom.zm_count)=='number'&&dom.zm_count>=_L1)
					for(var i=1;i<=2;i++){
						var e=dom.firstChild.childNodes[i];
						e.className=e.className.replace('zm_share_no_count','');
						if(i==2)e.lastChild.innerHTML=this.pretty(dom.zm_count);}
					},
			renderButton:function(dom){
				var url		= this.getUrl(dom);
				var _meta	= this.getMeta(dom);
				var _images	= this.getImages(dom);
				var _media	= this.getMedia(dom);
				var _L2		= this.getType(dom);
				var _Rel	= this.getRel(dom);
				var _width	= this.getWidth(dom);
				var _height	= this.getHeight(dom);
				var _L3		= dom.innerHTML.length>0?dom.innerHTML:'';
				if(_Rel=='friend') {
					dom.setAttribute("link_share", this.addQS(
						'http://link.apps.zing.vn/pro/view/conn/share?fl=friend',
						{'u':url,'t':url==window.location.href?document.title:'',desc: _meta, images: _images, media: _media, width: _width, height: _height}
					));
				} else {
					dom.setAttribute("link_share", this.addQS(
						'http://link.apps.zing.vn/pro/view/conn/share?fl=',
						{'u':url,'t':url==window.location.href?document.title:'',desc: _meta, images: _images, media: _media, width: _width, height: _height}
					));
				}
				dom.href = url;
				dom.onclick=function(){
					if(!dom.zm_clicked){
						dom.zm_count+=1;
						ZM.Share.displayBox(this,1);
						dom.zm_clicked=true;
					}
					if(navigator.userAgent.indexOf('MSIE')!= -1) {						
						if(_Rel=='friend') {
							winDef = 'scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=yes,height=530,width=550,top='.concat((screen.height - 500)/2).concat(',left=').concat((screen.width - 500)/2);
						} else {
							winDef = 'scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=yes,height=430,width=550,top='.concat((screen.height - 500)/2).concat(',left=').concat((screen.width - 500)/2);
						}
					} else {
						if(_Rel=='friend') {
							winDef = 'scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=no,height=500,width=550,top='.concat((screen.height - 500)/2).concat(',left=').concat((screen.width - 500)/2);
						} else {
							winDef = 'scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=no,height=400,width=550,top='.concat((screen.height - 500)/2).concat(',left=').concat((screen.width - 500)/2);							
						}
					}
					window.open(dom.getAttribute("link_share"), '_blank', winDef);
					return false;
				};
				dom.style.textDecoration='none';
				if(!this.results[url]&&(_L2.indexOf('count')>=0)){
					this.urls[url]=true;
					this.urlsA.push(url);
				}
				var _L8 = '';
				if(_L2.indexOf('icon')>=0) {
					var ico_class = _L3==''? 'ZMConnectIcon' : 'ZMConnectIcon_Text';
					_L8=_L8.concat('<span class=\''+ico_class+'\' style=\'cursor:pointer;\'>').concat((_L3=='')? '&nbsp;' : _L3).concat('</span>');
				} else if (_L2.indexOf('button')>=0) {
					var btn_class = _L3==''? 'ZMConnectButton' : 'ZMConnectButton_Text';
					_L8=_L8.concat('<span class=\''+btn_class+'\' style=\'cursor:pointer;\'>').concat((_L3=='')? '&nbsp;' : _L3).concat('</span>');					
				} else if (_L2.indexOf('apps')>=0) {
					var btn_class = _L3==''? 'ZMConnectApp' : 'ZMConnectApp_Text';
					_L8=_L8.concat('<span class=\''+btn_class+'\' style=\'cursor:pointer;\'>').concat((_L3=='')? '&nbsp;' : _L3).concat('</span>');					
				} else if (_L2.indexOf('text')>=0) {
					var ico_class = _L3==''? 'ZMConnectText' : 'ZMConnectText';
					_L8=_L8.concat('<span class=\''+ico_class+'\' style=\'cursor:pointer;\'>').concat((_L3=='')? '&nbsp;' : _L3).concat('</span>');					
				}
				dom.innerHTML=_L8;
				dom.zm_rendered=true;
			},
			insert:function(_L0){
				(document.getElementsByTagName('HEAD')[0]||document.body).appendChild(_L0);
			},
			renderAll:function(_L0){				
				var _L1=document.getElementsByName('zm_share');
				var c=_L1.length;
				for(var i=0;i<c;i++){
					if(!_L1[i].zm_rendered)this.renderButton(_L1[i]);
					if(this.getType(_L1[i]).indexOf('count')>=0&&!_L1[i].zm_count&&this.results[this.getUrl(_L1[i])])
						this.updateButton(_L1[i]);
				}
			},
			stopScan:function(){
				clearInterval(ZM.Share.scanner);
				ZM.Share.renderPass();
			},
			renderPass:function(){
				ZM.Share.renderAll();
			},
			_onFirst:function(){
				var _L0=document.createElement('link');
				_L0.rel='stylesheet';
				_L0.type='text/css';
				_L0.href='http://wb.me.zing.vn/index.php?wb=LINK&t=css&c=share_button';
				this.insert(_L0);
				this.resetUrls();				
				this.renderPass();
				this.scanner=setInterval(ZM.Share.renderPass,700);
				if(window.attachEvent){
					window.attachEvent("onload",ZM.Share.stopScan);
				}else window.addEventListener("load",ZM.Share.stopScan,false);
			}
		};
		ZM.Share._onFirst();
	}
	
	if(!window.ZM)ZM={};
	if(!ZM.Loader)
		ZM.Loader={
			loaded:{},
			loading:{},
			loadedCss:{},
			loadedCallback:null,
			onScriptLoaded:
				function(_L0){
					var c=_L0.length;
					for(var i=0;i<c;i++){
						var _L3=_L0[i];
						ZM.Loader.loaded[_L3]=true;
					}
					if(ZM.Loader.loadedCallback)
						window.setTimeout(function(){ZM.Loader.loadedCallback(_L0);},0);
				}
		};

ZM.Loader.onScriptLoaded(["ZM.Share","ZM.Loader"]);

