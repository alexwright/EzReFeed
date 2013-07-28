define("app",
    ["jquery",
     "underscore",
     "backbone",
     "views/torrent_list"
    ],
    function ($, _, Backbone, TorrentListView) {
        var view = new TorrentListView({
            el: $("[data-view='views/torrent_list']").get(0)
        });
    });
