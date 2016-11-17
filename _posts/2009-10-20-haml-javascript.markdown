---
layout: post
title: HAML + Javascript
categories:
- Tips and Tricks
tags:
- haml
- javascript
---
I am very meticulous when it comes to server calls. In most of my Rails applications, I make sure to only specify those Javascript files that are deemed absolute necessary for any given view so as to not clutter things with wasted bytes of memory.

While I was playing around with [HAML](http://haml.info/), I needed to insert a very simple, very specific jQuery function.  As of this writing, a simple Google search of "haml and javascript" came up with some old and unhelpful results. The [official HAML documentation](http://haml.info/docs/yardoc/file.REFERENCE.html) was, of course, among those results, but the answer was at the bottom of the document and a quick scan of the table of contents didn't associate "Filters :" as being the correct the section.

Of course, a blog or two and the [HAML google group](http://groups.google.com/group/haml/msg/5cfa940aa0333440) already tackled the topic, so I'm just going to regurgitate in order in hopes that next person with this problem will find the answer in 2 minutes instead of my 10 minutes.

An example:

{% highlight haml %}
:javascript
  $(function() {
    $("#tabs").tabs();
  });
{% endhighlight %}

**Update:** Since the writing of this blog post, the [official HAML](http://haml.info/docs/yardoc/file.REFERENCE.html) Documentation has been updated to better list out the [filters](http://haml.info/docs/yardoc/file.REFERENCE.html#filters).
