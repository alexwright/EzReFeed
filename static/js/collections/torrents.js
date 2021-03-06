define("collections/torrents",
    ["jquery", "underscore", "backbone", "models/torrent"],
    function ($, _, Backbone, Torrent) {
        var Torrents = Backbone.Collection.extend({
            model: Torrent,
            url: "/torrents",
            parse: function (res) {
                /* The /torrents endpoint is going to give us an object of:
                   { "guid1":{ <torrnet info> }, "guid2":{ ... }, ... }.
                   So we need to return back just the info objects to BB */
                return _.map(res, function (object, key) {
                    return object;
                });
            }
        });
        return Torrents;
    });
