function dc(base64Str) {
    var utf8Str = atob(base64Str);
    var str = decodeURIComponent(escape(utf8Str));
    return str;
}

function ec(str) {
    var utf8Str = unescape(encodeURIComponent(str));
    var base64Str = btoa(utf8Str);
    return base64Str;
}
