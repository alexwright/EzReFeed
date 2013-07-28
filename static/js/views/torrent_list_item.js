define("views/torrent_list_item",
    ["backbone"],
    function (Backbone) {
        var TorrentListViewItem = Backbone.View.extend({
            tagName: "li",
            initialize: function () {
            },
            render: function () {
                this.$el.html("<a href='#'>" + this.model.get("title") + "</a>");
            }
        });
        return TorrentListViewItem;
    });
