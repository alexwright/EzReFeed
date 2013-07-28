define("views/torrent_list",
    ["jquery", "underscore", "backbone", "collections/torrents", "views/torrent_list_item"],
    function ($, _, Backbone, Torrents, TorrentListViewItem) {
        var TorrentListView = Backbone.View.extend({
            initialize: function () {
                this._views = {};
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
                var items = this.collection.map(this.getListItemView, this);
                $("ul", this.el).empty().append(items);

                console.log("TorrentListView->render()");
            },
            getListItemView: function (model) {
                if (model.cid in this._views) {
                    return this._views[model.cid].el;
                }

                var view = new TorrentListViewItem({
                    model: model
                });
                view.render();
                this._views[model.cid] = view;
                return view.el;
            }
        });
        return TorrentListView;
    });
