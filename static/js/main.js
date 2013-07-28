require.config({
    paths: {
        text: "../thirdparty/text",
        jquery: "../thirdparty/jquery-1.10.2",
        underscore: "../thirdparty/underscore",
        backbone: "../thirdparty/backbone",
    },
    shim: {
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone",
            init: function () {
                var bb = Backbone;
                delete window.Backbone;
                return bb;
            }
        },
        "underscore": {
            exports: "_"
        }
    }
});

require(["app"], function(App) {
    //App.initialize();
});

