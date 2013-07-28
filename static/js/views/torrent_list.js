define("views/torrent_list",
    ["jquery", "underscore", "backbone", "collections/torrents"],
    function ($, _, Backbone, Torrents) {
        var TorrentListView = Backbone.View.extend({
            initialize: function () {
                if (!this.collection) {
                    /*  If we're not created with a collection we'll create a
                        fresh 'Torrents' collection. */
                    this.collection = new Torrents();
                    this.collection.fetch();
                }
                this.listenTo(this.collection, "sync sort", this.render);

                this.$el.html("<legend>Torrents:</legend><ul></ul>");
            },
            render: function () {
                var items = this.collection.map(function (m) {
                    return "<li>" + m.get("title") + "</ul>";
                });
                $("ul", this.el).html(items);

                console.log("TorrentListView->render()");
            }
        });
        return TorrentListView;
    });
