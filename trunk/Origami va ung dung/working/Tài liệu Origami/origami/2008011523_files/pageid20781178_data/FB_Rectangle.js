if (RSSAD_RECTANGLE_CATEGORY == 'fb') { RSSAD_RECTANGLE_CATEGORY='feemodemo';}
var RSSAD_RECTANGLE_URL = "http://feemo.rssad.jp/rss/fb/";
if (typeof Rssad == "undefined") {Rssad = {};if (typeof Rssad.Feemo == "undefined") {Rssad.Feemo = {};}}
if (typeof Rssad.Feemo.Rectangle == "undefined") {
    Rssad.Feemo.Rectangle = {
        requestBanner: function () {
            document.write('<iframe name="FB_Rectangle" id="FB_Rectangle" src="'
                + RSSAD_RECTANGLE_URL + RSSAD_RECTANGLE_CATEGORY + '/RectangleBanner/1/" width="300" height="250"'
                + ' frameborder="0" marginheight="0" marginwidth="0"'
                + ' vspace="0" hspace="0" allowtransparency="true" scrolling="no">');
            document.write('</ifr' + 'ame>');
        }
    }
}
Rssad.Feemo.Rectangle.requestBanner();