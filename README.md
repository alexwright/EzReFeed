EzReFeed
========

Take the eztv.it rss feed and rehost it as a SPA (Single Page Application) with 
magnet: links, and blackjack!

## Why?
My government just added [EZTV](http://eztv.it) to their inevitably growing 
list of sites they find to be of questionable taste or legality. In a couple of
seconds I had a _SOCKS5_ tunnel via a box outside of the UK, and was back, sure.
But that's not exactly continent all the time, handsets and what have you...

On the plus side, I never really did like the EZTV UI/look.

## Running EzReFeed
You should be able to get this running in about two lines of bash. The only 
think not in Pythons std. libs. is Flask. So a quick `pip install flask` and
you should be good to go, `python ./app.py`.

When it starts up it'll hit up EZTV for their RSS feed, run a ridiculously basic
parser over that, dump that into a _shelve_ based storage/persistence backend
and start serving requests on port :5000.

## Tech Used

* HTML/CSS/JS - Because it's what I do.
* Backbone - Because *separation of concerns*, *MVVM*, *modularity* and all that
  good stuff
* Underscore/jQuery - Because Backbone. I didn't really use either here, _ a 
  little..
* JSON - Because fuck XML in the browser..
* Magnet: / URN: links etc - Because lets decentralize this stuff people. DHT! Yea!


