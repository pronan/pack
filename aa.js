var opts={
    '^/login$'   :'./js/login_form', 
    '^/register$':'./test', 
}
var p = '/register';
for (var regex in opts) {
    if (opts.hasOwnProperty(regex)) {

        if (p.match(new RegExp(regex, 'g'))) {

            var m = opts[regex];
            if (typeof m==='string'){
                console.log(regex, typeof regex, m )
            }else{
                var path = m.path;
                var callback = m.callback || function (m) {return m()};
                require.ensure([path], function(require) {
                    callback(require(path));
                });
            }
            break;
        }
    }
}