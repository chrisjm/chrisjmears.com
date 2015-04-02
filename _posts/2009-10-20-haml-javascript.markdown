---
layout: post
title: HAML + Javascript
categories:
- Tips and Tricks
tags:
- haml
- javascript
comments:
- id: 997
  author: That Rails Notes Guy
  author_email: mr@melvinram.com
  author_url: http://railsnotes.com
  date: !binary |-
    MjAwOS0xMC0yMCAyMDoxODoxMyAtMDYwMA==
  date_gmt: !binary |-
    MjAwOS0xMC0yMSAwNDoxODoxMyAtMDYwMA==
  content: ! "Hey Chris,\r\n\r\nWhat did you search on Google for? I just did a search
    for \"haml and javascript\" as well as \"haml javascript\" and they both showed
    the two blog posts you mentioned. \r\n\r\nPS: Thanks for the mention.\r\n\r\nMelvin
    Ram\r\nRailsNotes.com"
- id: 998
  author: Chris
  author_email: me@chrisjmears.com
  author_url: ''
  date: !binary |-
    MjAwOS0xMC0yMCAyMDo0NDozNyAtMDYwMA==
  date_gmt: !binary |-
    MjAwOS0xMC0yMSAwNDo0NDozNyAtMDYwMA==
  content: ! "Melvin: Thanks for writing such a great post on your blog about the
    topic!  \n\nThis post was more to proliferate the answer to the question of getting
    HAML and Javascript working together.  Since it took me longer than I wanted it
    to, I figured others may have the same problem."
- id: 1002
  author: Nathan Weizenbaum
  author_email: nex342@gmail.com
  author_url: http://nex-3.com
  date: !binary |-
    MjAwOS0xMC0yMyAwMDowNjo1OCAtMDYwMA==
  date_gmt: !binary |-
    MjAwOS0xMC0yMyAwODowNjo1OCAtMDYwMA==
  content: I'll have all the filters show up in the table of contents in the next
    minor release of the reference.
- id: 1011
  author: Jon Hancock
  author_email: jhancock@shellshadow.com
  author_url: http://shellshadow.com
  date: !binary |-
    MjAwOS0xMS0wOCAxMTozNDozMSAtMDcwMA==
  date_gmt: !binary |-
    MjAwOS0xMS0wOCAxOTozNDozMSAtMDcwMA==
  content: Do you know of a textmate haml bundle that will recognize and syntax highlight
    this embedded javascript?
- id: 1012
  author: Jon Hancock
  author_email: jhancock@shellshadow.com
  author_url: http://shellshadow.com
  date: !binary |-
    MjAwOS0xMS0wOCAxMTozOToxNiAtMDcwMA==
  date_gmt: !binary |-
    MjAwOS0xMS0wOCAxOTozOToxNiAtMDcwMA==
  content: ! "Just found one!!\r\nhttp://github.com/quackingduck/ruby-haml.tmbundle"
- id: 1537
  author: Fer Martin
  author_email: fernandomartinsantana@gmail.com
  author_url: ''
  date: !binary |-
    MjAxMi0wMS0xMiAyMzoyMTowOSAtMDcwMA==
  date_gmt: !binary |-
    MjAxMi0wMS0xMyAwNzoyMTowOSAtMDcwMA==
  content: ! "It's already 2 plus years from this, but I still don't seem to be able
    to find a bundle that can accomplish this. The one from the last comment is a
    404 now :( Have you find any solution?\r\n\r\ncheers!\r\nF3r"
- id: 1538
  author: Chris
  author_email: me@chrisjmears.com
  author_url: http://chrisjmears.com/
  date: !binary |-
    MjAxMi0wMS0xMyAwNzo0MTowNCAtMDcwMA==
  date_gmt: !binary |-
    MjAxMi0wMS0xMyAxNTo0MTowNCAtMDcwMA==
  content: ! "@Fer Martin: I believe the bundle just moved.  Try https://github.com/textmate/ruby-haml.tmbundle
    .  \r\n\r\nAnd you can find a boatload of other Textmate bundles at https://github.com/textmate/"
---
I am very meticulous when it comes to server calls. In most of my Rails applications, I make sure to only specify those Javascript files that are deemed absolute necessary for any given view so as to not clutter things with wasted bytes of memory.


While I was playing around with [HAML](http://haml-lang.com/), I needed to insert a very simple, very specific jQuery function.  As of this writing, a simple Google search of "haml and javascript" came up with some old and unhelpful results. The [official HAML documentation](http://haml-lang.com/docs/yardoc/HAML_REFERENCE.md.html) was, of course, among those results, but the answer was at the bottom of the document and a quick scan of the table of contents didn't associate "Filters :" as being the correct the section.


Of course, a [blog](http://www.red91.com/2009/02/08/inline-javascript-in-haml) or [two](http://railsnotes.com/474-javascript-haml/) and the [HAML google group](http://groups.google.com/group/haml/msg/5cfa940aa0333440) already tackled the topic, so I'm just going to regurgitate in order in hopes that next person with this problem will find the answer in 2 minutes instead of my 10 minutes.


An example:


{% highlight haml %}
:javascript
  $(function() {
    $("#tabs").tabs();
  });
{% endhighlight %}
