function gqu() {
    let queryParams = {};
    let ur = window.location.href;
    let queryString = ur.split('?')[1];
    if (queryString) {
        let params = queryString.split('&');
        params.forEach(function(param) {
            let split = param.split('=');
            queryParams[split[0]] = split[1];
        });
    }
    return queryParams;
};
 if(gqu().n!=undefined){loaded(gqu().n);}else{location.href+='?n=b';}
function loaded(n){
   var a='';
   if(n=='h'){a='head(头部)';}else if(n=='b'){a='body(主体部分)';}else{a='foot(尾部)';};
   document.getElementById("part").innerHTML="目前编辑位置:"+a;
   if(gqu()[n]!=undefined) editor.setValue(dc(gqu()[n]));
   }
function hd(m){
 if(gqu().n=='b'){
   var b=editor.getValue(),h=0,f=0;
   if(gqu().h!=undefined){h=gqu().h;};
   if(gqu().f!=undefined){f=gqu().f;};
   location.href='concentrate.html?n='+m+(h!=0?'&h='+h:'')+(f!=0?'&f='+f:'')+'&b='+ec(b);
 }else if(gqu().n=='h'){
   var h=editor.getValue(),b=0,f=0;
   if(gqu().b!=undefined){b=gqu().b;};
   if(gqu().f!=undefined){f=gqu().f;};
   location.href='concentrate.html?n='+m+(b!=0?'&b='+b:'')+(f!=0?'&f='+f:'')+'&h='+ec(h);
  }else{
   var f=editor.getValue(),h=0,b=0;
   if(gqu().h!=undefined){h=gqu().h;};
   if(gqu().b!=undefined){b=gqu().b;};
   location.href='concentrate.html?n='+m+(h!=0?'&h='+h:'')+(b!=0?'&b='+b:'')+'&f='+ec(f);
  };
  }
 function dc(base64Str) {
    var utf8Str = atob(base64Str);
    var str = decodeURIComponent(escape(utf8Str));
    return str;
}
