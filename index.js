require("./css/main.scss")
// var router = require("./js/router")

// router({
//     '^/login$':'./js/login_form', 
//     '^/register$':'./test', 
// })

// var opts={
//     '^/login$'   :'./js/login_form', 
//     '^/register$':'./test', 
// }
// var p = window.location.pathname;
// for (var regex in opts) {
//     if (opts.hasOwnProperty(regex)) {
//         if (p.match(new RegExp(regex, 'g'))) {
//             var m = opts[regex];
//             if (typeof m==='string'){
//                 require.ensure([m], function(require) {
//                     require(m);
//                 });
//             }else{
//                 var path = m.path;
//                 var callback = m.callback || function (m) {return m()};
//                 require.ensure([path], function(require) {
//                     callback(require(path));
//                 });
//             }
//             break;
//         }
//     }
// }

var p = window.location.pathname;

if (p.match(new RegExp('^/register$', 'g'))) {

    require.ensure(['./test'], function(require) {
        require('./test');
    });

}