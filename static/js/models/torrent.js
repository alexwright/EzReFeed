define("models/torrent",
    ["backbone"],
    function (Backbone) {
        var Torrent = Backbone.Model.extend({
            getMagnetURI: function () {
                return [
                    "magnet:?xt=urn:",
                    "btih:", this.get("infoHash"),
                    "&dn=", this.get("title").replace(/\s+/g, "_")
                ].join("");
            }
        });
        return Torrent;
    })
