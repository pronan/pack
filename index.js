require("./css/main.scss")

if (window.location.pathname=='/user/update') {
    require.ensure(["./js/uploader"], function(require) {
        require("./js/uploader")()   
    });
}
