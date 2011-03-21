function google_ad_request_done(google_ads) {
  if (google_ads.length > 0) {
    document.write('<h2><a href="https://www.google.com/adsense/login/ja/" target="_blank">Ads by google</a></h2>');
    document.write('<dl class="dense">');
    document.write('<dt><a href="' + google_ads[0].url + '" target="_blank">');
    document.write( google_ads[0].line1 );
    document.write('</a> - </dt>');
    document.write('<dd class="description">' + google_ads[0].line2 + '&nbsp;' + google_ads[0].line3 + '</dd>');
    document.write('<dd class="url"><a href="' + google_ads[0].url + '" target="_blank">' + google_ads[0].visible_url + '</a></dd>');
    document.write('</dl>');
    document.write('<p class="credit"><a href="https://www.google.com/adsense/login/ja/" target="_blank"><img src="http://wiredvision.jp/common/images/ad_google_credit.gif" width="71" height="11" alt="Ads by Google" /></a></p>');
  } else {
   document.write('&nbsp;');
  }
}


google_ad_client = 'ca-ntt-goo_js';
google_ad_channel = 'wiredv-hw';
google_ad_output = 'js';
google_max_num_ads = 4;
google_encoding = 'UTF-8';
google_language = 'ja';
google_safe = 'high';
google_ad_section = 's1';
