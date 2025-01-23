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
    const blob = new Blob([dc(gqu().f)], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = document.getElementsByTagName("input")[0].value+'.pptjs';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
}
