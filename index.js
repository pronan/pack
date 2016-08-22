// require("./css/main.scss")
import "./css/main.scss"

global.$ = require("jquery")

if (window.location.pathname=='/login') {
    require.ensure(["./js/uploader"], function(require) {
    	var get_uptoken = require("./js/uploader")
    });
}
