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

function download(){
   var img = gqu().f.toDataURL("pptjs");
   var a = document.createElement('a');
   a.href = img;
  a.download = document.getElementsByTagName("input")[0].value;
  a.click();
}
