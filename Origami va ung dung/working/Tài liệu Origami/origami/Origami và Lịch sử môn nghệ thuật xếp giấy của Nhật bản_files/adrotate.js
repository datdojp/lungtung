function DBannerScroller() {
	this.init.apply(this,arguments);
}
DBannerScroller.prototype = {
	itemHeight: 101, // pixel
	init: function(bannerId, maxItems) {
		this.bannerId = bannerId;
		this.maxItems = maxItems;
		
		var self = this; // Not good but simple timer setting method
		this.checkIfDivExistTimer = setInterval(function(){ self.checkIfDivExist();}, 500); 
	},
	checkIfDivExist: function() {
		var div = document.getElementById(this.bannerId);
		if (div) {
			clearInterval(this.checkIfDivExistTimer);
			this.div = div;
			this.setupScroll();
			return;
		}
	},
	setupScroll: function() {
		var div = this.div;
		var A = div.getElementsByTagName("a");
		var maxItems = this.maxItems;
		
		this.BannersContainer = div;
		this.BannersArr = A;
		
		this.isScrollable = (maxItems < A.length); // Nothing to scroll when maxItem > number of item
		
		div.style.cssText = "height:"+(maxItems * this.itemHeight)+"px";
		var self = this;
		for (var i = 0; i < A.length; i++) {
			this.setOpac(A[i].childNodes[0], 60);
			A[i].onmouseover = function() {
				self.setOpac(this.childNodes[0], 100);				
				if (self.scrollBannersTimer)
					clearInterval(self.scrollBannersTimer);
			}
			A[i].onmouseout = function() {
				self.setOpac(this.childNodes[0], 60);				
				if (self.isScrollable)
					self.scrollBannersTimer = setInterval(function() {self.onScrollBanners();},100);
			}
		}
		if (this.isScrollable)
			this.scrollBannersTimer = setInterval(function() {self.onScrollBanners();},100);
	},
	onScrollBanners: function() {
		var div = this.BannersContainer;
		div.scrollTop +=2;
		if (div.scrollTop >= this.itemHeight) {
			div.appendChild(div.childNodes[0]);
			div.scrollTop = 0;
		}
	},
	addEv: function() {
		if (document.attachEvent)
        	obj.attachEvent("on"+evName, evHandler);
    	else
        	obj.addEventListener(evName, evHandler, false);
	},
	setOpac: function(obj, _opac) {
	    with(obj.style) {
	        opacity = _opac/100;
	        MozOpacity= _opac/100;
	        KhtmlOpacity= _opac/100;
	        filter = "alpha(opacity=" + _opac + ")";
	    }
	}
};

// Set up 2 banners
// with maximum 8 visible banners at the same time
var VYSABanner1 = new DBannerScroller("adrotate_widget_1",3); //Left
var VYSABanner2 = new DBannerScroller("adrotate_widget_2",6); // Right
