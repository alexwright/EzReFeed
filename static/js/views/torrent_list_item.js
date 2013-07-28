define("views/torrent_list_item",
    ["backbone"],
    function (Backbone) {
        var TorrentListViewItem = Backbone.View.extend({
            tagName: "li",
            initialize: function () {
            },
            render: function () {
                var margetLink = "<a href='%uri'>[magnet]</a>"
                        .replace('%uri', this.model.getMagnetURI()),
                    commentsLink = "<a href='%uri'>[comments]</a>"
                        .replace('%uri', this.model.get("comments")),
                    titleSpan = "<span>%title</span>"
                        .replace('%title', this.model.get("title"));
                this.$el.html([margetLink, commentsLink, titleSpan].join(" "));
            }
        });
        return TorrentListViewItem;
    });
