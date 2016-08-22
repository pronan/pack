//import "./css/main.scss"
//import $ from "jquery"
//import "./test.coffee"

require("./css/main.scss")
require("./test.coffee")
window.$ = window.jQuery = require("jquery")

if (window.location.pathname=='/login') {
    require.ensure(["./js/uploader"], function(require) {
        var get_uptoken = require("./js/uploader")
    });
}
