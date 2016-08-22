//import "./css/main.scss"
//import $ from "jquery"
//import "./test.coffee"
require("./css/main.scss")
window.$ = window.jQuery = require("jquery")

if (window.location.pathname=='/user/update') {
    require.ensure(["./js/uploader"], function(require) {
        window.make_uploader = require("./js/uploader")
    });
}else{
    require.ensure(["./test.coffee"], function(require) {
        require("./test.coffee")
    });
}
