function AdClicked(url)
{ 
    var clickLineDisabled = "$dcli";
    if(clickLineDisabled=="1")
    {
        return;
    }
    
    var winOpen = "1";
    if(winOpen == "1")
    {
        window.open(url,"");
    }else
    {
        parent.location.href=url; 
    }
}
var clickLineVarName6683027072 = 'http://sr-r3.ace.advertising.com/click/site=0000784889/mnum=0000947063/bnum=80176157/cstr=80176157=_4d26b454,6683027072,784889^947063^-12^0,1_/xsxdata=$xsxdata/xsinvid=0/imptid=ASf5432fc575ee40448b9069a042936666?';
var can_adInfoTag = {};
can_adInfoTag["6683027072"] = {
    "CAN_ver": "0.1",
    "CAN_ann": "Advertising.com",
    "CAN_anl": "http://advertising.aol.com/privacy/advertisingcom/opt-out",
    "CAN_maf": "Y"
};
document.write('<a href="javascript:AdClicked(clickLineVarName6683027072);" target="_self">');
document.write('<img src="http://bannerfarm.ace.advertising.com/CDN/168782/suumo_B_2000_300x250_101209.jpg" border="0" width="300" height="250" alt="Click to learn more...">');
document.write('</a>');