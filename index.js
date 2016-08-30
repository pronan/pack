require("./css/main.scss")
global.$ = global.jQuery = require('jquery')

function regex(str) {
    return new RegExp('^'+str+'$', 'g');
}
var uri = window.location.pathname;

if (regex('/register').test(uri)) {
        require(['./test'], function(test) {
    });
}else if(regex('/user/update').test(uri)) {
    require(['./js/uploader'], function(uploader) {
        uploader();
    });
}else if(regex('/login1').test(uri)) {
    require(['./js/form'], function(m) {
        $(document).ready(function() {m()})
    });
}
