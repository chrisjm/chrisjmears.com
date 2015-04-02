---
layout: post
title: Mac OS X Terminal Aliases
categories:
- Tips and Tricks
tags:
- osx
- terminal
comments:
- id: 979
  author: Adam
  author_email: adam.wealand@gmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNy0xNSAxMToxODoyNSAtMDYwMA==
  date_gmt: !binary |-
    MjAwOS0wNy0xNSAxOToxODoyNSAtMDYwMA==
  content: yes - what in the bejesus are you even talking about? and could this facilitate
    moving the itunes library around?
- id: 980
  author: Chris
  author_email: me@chrisjmears.com
  author_url: ''
  date: !binary |-
    MjAwOS0wNy0xNSAyMDo1NzoyNCAtMDYwMA==
  date_gmt: !binary |-
    MjAwOS0wNy0xNiAwNDo1NzoyNCAtMDYwMA==
  content: ! "Haha!  Well, this is more geared toward advanced \"hacking\" of OS X.\r\n\r\nIn
    short, no, this particular tip won't allow you to move your iTunes library around.
    \ Still working on that particular solution :)"
- id: 1048
  author: Timo
  author_email: t-bone@gmx.de
  author_url: ''
  date: !binary |-
    MjAxMC0wMi0wNiAwMzo1NTo0MiAtMDcwMA==
  date_gmt: !binary |-
    MjAxMC0wMi0wNiAxMTo1NTo0MiAtMDcwMA==
  content: ! "Hey Chris,\r\ni just moved from linux to my first Mac System and tried
    some usual linux scripting stuff. \r\nFirst of all, I need some aliases like ll
    -&gt; ls -la ......\r\n\r\nIf found so many \"documentations\" about it and guess
    what: None does work for my os x 10.6 :-(\r\nunfortunatly.\r\n\r\ni just tried
    your one. \r\nvi ~/.bash_profile\r\nnone of your alias suggestions work. What
    is the difference? What system do you use? \r\nPropably a syntax failure. the
    alias-man-page didnt help that much.\r\n\r\nWould like to hear from you,\r\ntake
    care\r\ntimo"
- id: 1049
  author: Chris
  author_email: me@chrisjmears.com
  author_url: http://chrisjmears.com/
  date: !binary |-
    MjAxMC0wMi0wNiAxNDoyMzozMyAtMDcwMA==
  date_gmt: !binary |-
    MjAxMC0wMi0wNiAyMjoyMzozMyAtMDcwMA==
  content: ! "Timo:  Thanks for your comment!  Here are some things to note:\r\n\r\n1)
    Make sure the ' are actually single quotes.  I've noticed some instances were
    they have morphed into ` or special apostrophes.\r\n2) You may also want to make
    sure there are no spaces between the equal (=) sign.  I think that can cause issues
    as well (but not positive)\r\n\r\nIf you're still having problems, feel free to
    contact me directly.  I actually just made these aliases on Snow Leopard just
    this past week and they worked okay for me.\r\n\r\nGood luck!"
- id: 1055
  author: Linus
  author_email: linusoleander@gmail.com
  author_url: http://radiofy.se
  date: !binary |-
    MjAxMC0wNy0wNCAxNDoyMjo1NiAtMDYwMA==
  date_gmt: !binary |-
    MjAxMC0wNy0wNCAyMjoyMjo1NiAtMDYwMA==
  content: ! "This may be a bit late……\r\n\r\n@Timo, you have to restart your terminal
    after editing ~/.bash_profile"
- id: 1459
  author: andrius
  author_email: nikeas@ne.lt
  author_url: ''
  date: !binary |-
    MjAxMS0wMS0wNSAwNDoxMzo0NSAtMDcwMA==
  date_gmt: !binary |-
    MjAxMS0wMS0wNSAxMjoxMzo0NSAtMDcwMA==
  content: try editing ~/.profile
- id: 1507
  author: John Vilsack
  author_email: john.vilsack@activesportsinc.com
  author_url: ''
  date: !binary |-
    MjAxMS0wMS0yMyAxMjo0NTo0MCAtMDcwMA==
  date_gmt: !binary |-
    MjAxMS0wMS0yMyAyMDo0NTo0MCAtMDcwMA==
  content: ! "Instead of restarting terminal, you can type:\r\n\r\nsource ~/.bash_profile\r\n\r\nThis
    reloads your bash profile and adds your new aliases to your session!"
- id: 1529
  author: Yuval
  author_email: ararat01@hotmail.com
  author_url: http://www.yuvalararat.com
  date: !binary |-
    MjAxMS0wNi0yMCAyMDoxOTozMCAtMDYwMA==
  date_gmt: !binary |-
    MjAxMS0wNi0yMSAwNDoxOTozMCAtMDYwMA==
  content: ! "Thanks.\r\nGreat shortcuts.\r\nand thanks John for the source trick."
- id: 1532
  author: Anthony
  author_email: premonition54@aol.com
  author_url: ''
  date: !binary |-
    MjAxMS0wNy0yMSAwMjowNjozMSAtMDYwMA==
  date_gmt: !binary |-
    MjAxMS0wNy0yMSAxMDowNjozMSAtMDYwMA==
  content: ! "Great article Chris, thanks very much!\r\n\r\nI've been trying for the
    past two days to get aliases to work in my Terminal having recently started to
    try to use the Terminal a lot more (I'm a noob).\r\n\r\nJohn Vilsack, thank you
    so much for the 'source ~/.bash_profile' tip. I had just about exhausted everything
    I could find about why my aliases were not working and this did the trick!"
- id: 1547
  author: David
  author_email: dalotech@gmail.com
  author_url: http://www.enlistr.com
  date: !binary |-
    MjAxMy0wMi0yNSAxMDowNjo1MyAtMDcwMA==
  date_gmt: !binary |-
    MjAxMy0wMi0yNSAxODowNjo1MyAtMDcwMA==
  content: ! "Can you open a file in a program? I use this command in the terminal
    all the time when working with git and it's tiring to type it over and over :\r\n\r\nopen
    -a \"Sublime Text 2\" [filename]\r\n\r\nWith your trick I've tried:\r\nalias st='open
    -a \"Sublime Text 2\"'\r\nalias st='open -a \\\"Sublime Text 2\\\"'\r\n\r\nCan
    you open files with alias?\r\nThx."
- id: 1548
  author: Chris
  author_email: me@chrisjmears.com
  author_url: http://chrisjmears.com/
  date: !binary |-
    MjAxMy0wMi0yNiAyMzowODo1OSAtMDcwMA==
  date_gmt: !binary |-
    MjAxMy0wMi0yNyAwNzowODo1OSAtMDcwMA==
  content: ! "Hi David,\r\n\r\nUsing the following alias you suggested works for me:\r\n<pre>alias
    st='open -a \"Sublime Text 2\"'</pre>\r\n\r\nUsage:\r\n<pre>st ~/Sites/chrisjmears.com/</pre>\r\n\r\nDoes
    that help?"
- id: 2885
  author: Chris S.
  author_email: simspace.dev@gmail.com
  author_url: http://u2act.com/
  date: !binary |-
    MjAxNS0wMS0yOSAxNzo0MzoyMiAtMDcwMA==
  date_gmt: !binary |-
    MjAxNS0wMS0zMCAwMTo0MzoyMiAtMDcwMA==
  content: ! "For reloading or editing my .bash_profile I added these two functions
    ...\r\n\r\nfunction rb() {\r\n\t. ~/.bash_profile\r\n}\r\n\r\nfunction eb() {\r\n\tsubl3
    ~/.bash_profile\r\n} \r\n\r\nNote that subl3 is a symbolic link in /usr/local/bin
    to /Applications/Sublime Text 3.app/Contents/SharedSupport/bin/subl"
---
Partly because I wanted to post more and partly because I transfer computers a lot and I figure a blog is as good place as any to share my thoughts with, well, myself.


Here's a list of aliases I've collected over the times searching the Internet (note: so far, not so many, but that'll change as I keep finding more).


To be put in ~/.bash_profile:


{% highlight bash %}
alias ls='ls -aFhlG'
alias ll='ls -l'
alias search=grep
alias ..='cd ..'
alias ...='cd ../..'
alias bake='/opt/local/apache2/htdocs/cake/cake/console/cake bake'
alias cake='cd /opt/local/apache2/htdocs/cake'
{% endhighlight %}


If anyone wants more detailed explanation of any or all of these, or if you'd like to know what in the bejesus I'm even talking about, post a comment.


Oh, and I would also happily welcome further suggestions too.
