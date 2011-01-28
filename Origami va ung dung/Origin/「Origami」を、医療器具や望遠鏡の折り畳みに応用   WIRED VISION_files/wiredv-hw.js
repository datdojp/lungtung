function google_ad_request_done(google_ads) {
  var i;
  if (google_ads.length > 0) {
    document.write('<h2>スポンサーリンク</h2>');
    document.write('<dl>');
    for (i = 1; i < 4; i ++) {
        document.write('<dt class="link"><a href="' + google_ads[i].url + '">');
        document.write( google_ads[i].line1 );
        document.write('</a><small> - <a href="' + google_ads[i].url + '" class="adsns_url">' + google_ads[i].visible_url + '</a></small></dt>');
        document.write('<dd>' + google_ads[i].line2 + '&nbsp;' + google_ads[i].line3 + '</dd>');
    }
    document.write('</dl>');
    document.write('<p class="credit"><a href="https://www.google.com/adsense/login/ja/" target="_blank"><img src="http://wiredvision.jp/common/images/ad_google_credit.gif" width="71" height="11" alt="Ads by Google" /></a></p>');
  } else {
   document.write('&nbsp;');
  }
}


google_ad_client = 'ca-ntt-goo_js';
google_ad_channel = 'wiredv-hw';
google_ad_output = 'js';
google_max_num_ads = 5;
google_encoding = 'UTF-8';
google_language = 'ja';
google_safe = 'high'; 
google_ad_section = 's1,s2';
