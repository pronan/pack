// import "./css/main.scss"
// import enc_base64 from "crypto-js/enc-base64"
// import hmac_sha1  from "crypto-js/hmac-sha1"
// import utf16 from "crypto-js/enc-utf16"
// import utf8 from "crypto-js/enc-utf8"

require("./css/main.scss")
$ = require("jquery")


require.ensure(["./js/uploader"], function(require) {

	if (window.location.pathname=='/login') {
		var get_uptoken = require("./js/uploader")
	}
	//var get_uptoken = require("./js/uploader")

});

console.log(window.location.pathname)
// module.exports = {
//     get_uptoken:get_uptoken, 
// }