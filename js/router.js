function router(opts) {
    var p = window.location.pathname;
    for (var regex in opts) {
        if (opts.hasOwnProperty(regex)) {
            if (p.match(new RegExp(regex, 'g'))) {
                var module = opts[regex];
                if (typeof module==='string'){
                    require.ensure([module], function(require) {
                        require(module);
                    });
                }else{
                    var path = module.path;
                    var callback = module.callback || function (m) {return m()};
                    require.ensure([path], function(require) {
                        callback(require(path));
                    });
                }
                break;
            }
        }
    }
}
module.exports = router