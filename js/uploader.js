var hmac_sha1 = require("crypto-js/hmac-sha1") 
var enc_base64 = require("crypto-js/enc-base64")
// import utf16 from "crypto-js/enc-utf16"
// import utf8 from "crypto-js/enc-utf8"
// import enc_base64 from "crypto-js/enc-base64"
// import hmac_sha1  from "crypto-js/hmac-sha1"
require("./qiniu") //QiniuJsSDK and Qiniu available
require("./plupload") // plupload available

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

function safe64(base64) {
  base64 = base64.replace(/\+/g, "-");
  base64 = base64.replace(/\//g, "_");
  return base64;
};

var get_uptoken = function(accessKey, secretKey, putPolicy) {
  var encoded = new Buffer(JSON.stringify(putPolicy)).toString('base64') ;
  var encoded_signed = hmac_sha1(encoded, secretKey).toString(enc_base64);
  var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
  return upload_token;
};

function make_uploader(opts){
  var deadline = Math.floor((new Date()).getTime()/1000)+ (opts.expires || 3600)
  var ak = opts.ak || '0maLJRi-p7lBucMKdgyLWGEdPpGlRQUTeW-bbL4l'
  var sk = opts.sk || 'vywueA_FOc7gWWYprL8t0aBSD0b24TKbILIVmYOP'
  var avatar_input_id = opts.avatar_id || '#id-avatar'
  var browse_button = opts.browse_button || 'id-avatar-qiniu'
  return (new QiniuJsSDK()).uploader({
    runtimes: opts.runtimes || 'html5,flash,html4',      
    container: opts.container || 'qiniu-form',
    browse_button: browse_button, 
    domain: opts.domain || 'files.httper.cn', 
    uptoken : get_uptoken(ak, sk, {scope:'files', deadline :deadline}), 
    max_file_size: opts.max_file_size || '4mb', 
    max_retries: opts.max_retries || 2,   
    get_new_uptoken: opts.get_new_uptoken || false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
    unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
    save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
    chunk_size: '4mb',                  // 分块上传时，每块的体积
    auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
    init: {
        'FilesAdded': function(up, files) {
            plupload.each(files, function(file) {
                // 文件添加进队列后，处理相关的事情
            });
        },
        'BeforeUpload': function(up, file) {
               // 每个文件上传前，处理相关的事情
        },
        'UploadProgress': function(up, file) {
               // 每个文件上传时，处理相关的事情
        },
        'FileUploaded': function(up, file, info) {
               var domain = up.getOption('domain');
               var res = JSON.parse(info);
               var uri = domain +'/'+ res.key; 
               $(avatar_input_id).attr('value', "http://"+uri);
               $('.qiniu_dynamic').remove();
               $('<img class="qiniu_dynamic" src="http://'+uri+'"/>').insertBefore($(browse_button));
        },
        'Error': function(up, err, errTip) {
               console.log(JSON.stringify(err), errTip)
        },
        'UploadComplete': function() {
        },
        'Key': function(up, file) {
        }
    }
});
}

module.exports = make_uploader