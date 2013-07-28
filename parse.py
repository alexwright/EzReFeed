from xml.etree import ElementTree

eztv_feed_url = "http://www.ezrss.it/feed/"
eztv_ns = "http://xmlns.ezrss.it/0.1/"
clarks_notation = "{" + eztv_ns + "}"

def build_entry(item_element):
    entry = {}
    for element in item_element.iter():
        if element.tag in ["title", "pubDate", "description", "comments", "guid", "category"]:
            entry[element.tag] = element.text
        elif element.tag == "enclosure":
            pass
        elif element.tag == clarks_notation + "torrent":
            for name in ["fileName", "contentLength", "infoHash"]:
                entry[name] = element.find(clarks_notation + name).text
        else:
            pass
            #print element
    return entry

def from_fd(store, fd):
    added = 0
    for event, element in ElementTree.iterparse(fd, events=("end", )):
        if element.tag == "item":
            guid = element.find("guid").text
            if store.has_key(guid):
                # already seen this
                continue

            entry = build_entry(element)
            store[guid] = entry
            added += 1
    return added

def from_file(store, filename):
    fd = open(filename, "r")
    return from_fd(store, fd)

def from_url(store, url):
    import urllib
    fd = urllib.urlopen(url)
    return from_fd(store, fd)

if __name__ == "__main__":
    store = {}
    from_file(store, "feed.xml")
    print store
