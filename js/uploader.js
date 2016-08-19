var hmac_sha1 = require("crypto-js/hmac-sha1") 
var enc_base64 = require("crypto-js/enc-base64")

function utf16to8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    }
  }
  return out;
}

var safe64 = function(base64) {
  base64 = base64.replace(/\+/g, "-");
  base64 = base64.replace(/\//g, "_");
  return base64;
};

var _get_uptoken = function(accessKey, secretKey, putPolicy) {
  var encoded = new Buffer(JSON.stringify(putPolicy)).toString('base64') ;
  var encoded_signed = hmac_sha1(encoded, secretKey).toString(enc_base64);
  var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
  return upload_token;
};

var get_uptoken = function(putPolicy) {
  return _get_uptoken(
    '0maLJRi-p7lBucMKdgyLWGEdPpGlRQUTeW-bbL4l', 
    'vywueA_FOc7gWWYprL8t0aBSD0b24TKbILIVmYOP', putPolicy);
};

module.exports = get_uptoken