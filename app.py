from flask import Flask, json
app = Flask(__name__)
app.config.from_object(__name__)

import shelve
db = shelve.open("app.db", writeback=True)
db.setdefault("entries", {})
store = db["entries"]

from parse import from_file
def update():
    added = from_file(store, "feed.xml")
    print "Added: " + str(added)

@app.route("/")
def main_index():
    return "Hi!"

@app.route("/torrents")
def get_torrents():
    return json.jsonify(store)

if __name__ == "__main__":
    update()
    app.run(host="0.0.0.0")
