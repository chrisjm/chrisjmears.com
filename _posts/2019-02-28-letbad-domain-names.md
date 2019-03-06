---
layout: post
title: 'LETBAD: Domain Names'
excerpt: 'if you’re a small business owner and run an online business (or even a website), as annoying as it is, you should learn enough to be almost dangerous (L.E.T.B.A.D.) about domain names and how they work.'
categories:
  - technology
tags: [domain name, dns, email]
header:
  teaser: 'https://res.cloudinary.com/wanderingleafstudios/image/upload/b_auto,c_pad,g_center,h_630,w_1200/v1537890988/chrisjmears.com/blog/brendan-church-182747-unsplash.jpg'
---

![white and black One Way-printed road signages](https://res.cloudinary.com/wanderingleafstudios/image/upload/v1551383569/chrisjmears.com/blog/brendan-church-182747-unsplash.jpg)

<div class="text-right text-grey text-sm mb-6">
  <em>Photo by Brendan Church on Unsplash</em>
</div>

# LETBAD: Domain Names

I’m sure you’ve heard the terms domain name, DNS, and domain registrars before. Or maybe not?

In any case, if you’re a small business owner and run an online business (or even a website), as annoying as it is, you should <strong>learn enough to be almost dangerous</strong> (L.E.T.B.A.D.) about domain names and how they work.

## It’s all about the TLD

Contrary to the name, a top-level domain (TLD) is the last part before the third forward slash (note, I'm including the two slashes in `http://` 😁).

I know it's confusing, which is why this picture is worth a thousand words:

![Anatomy of a Domain Name diagram](https://res.cloudinary.com/wanderingleafstudios/image/upload/v1551383712/chrisjmears.com/blog/domain-anatomy.png)
<div class="text-right text-grey text-sm mb-6">
  <em>Credit: whatinfo.net</em>
</div>

Back in the day, there were only a few TLDs. Now you can have your pick (to an extent) depending on how much you want to spend. The fancier the TLD, the more you pay. One thing to note is that not all TLDs are supported by all hosts and services.

It’s complicated, but know you’re likely to get the best results if you use the most common TLDs. Namely, .com and .org for for-profit organizations and .org for non-profits.

## What the heck are Name Servers and DNS Servers and why do I care?

Name Servers are synonymous with Domain Name Service (DNS) servers. Therefore, DNS represents the system as a whole.

Essentially, here’s the conversation:

1. Browser to DNS server: Who’s this?
2. DNS Server: Hmm, I don't know who this is, I should ask someone more senior-level.
3. DNS server to root DNS server: Who's this?
4. Root DNS server to DNS server: Got it! Here you go.
5. DNS server to Browser: Here you go!
6. Browser: Thanks! Connecting to the server!
7. Web Server: Yay! A visitor!

Here's another diagram to represent this:

![How DNS Works diagram](https://res.cloudinary.com/wanderingleafstudios/image/upload/v1551383712/chrisjmears.com/blog/how-dns-works.jpg)
<div class="text-right text-grey text-sm mb-6">
  <em>Credit: stantonstreet.com</em>
</div>

## Where should I buy domain names?

First off, a domain name registrar is a service which allows you to register domain names.

For purchasing domains, I like Namecheap for the following reasons:

1. Reasonable prices
2. Ability to invite someone to help manage your domain name
3. Quick turnaround on changes to your DNS records
4. Ability to quickly transfer domains instead of waiting the standard time

Domain registrars I don’t recommend registering on are GoDaddy, Bluehost, HostGator, and any other hosting services owned by [EIG](https://en.wikipedia.org/wiki/Endurance_International_Group).

The reason to avoid using these hosts as domain name registrars is that they make it unbearably painful to move domain names away from their service by making you wait the maximum length of time to move domains (5-7 business days). While this intended to prevent fraud, their customer support doesn't allow you to speed it up after verifying you're the proper owner, which is just annoying. (Can you tell I've been burned by this more than once? 😫)

As with most things, cheap does not equal good service. If your budget is small, that's fine. Just be prepared.

## Why isn't the domain name I want available?

In short, cyber-squatters. Cyber-squatting is when tech opportunists purchase domains they think will be popular in the future and hold on to them until they're able to sell to the highest bidder.

Why?

In the early days of the World Wide Web (i.e., the 1990s and early 2000s), companies decided it was a good idea to spend millions of dollars to buy a domain. This created demand. The demand created cyber-squatters. And now here we are.

## What's with email and MX records?

Consider email just like a web server (it’s quite different, but bear with me).

Anything after the `@` is the domain. When sending email, the email server needs to figure out where to send it. Since the server could be (and usually is) different from the web server, MX records are used to denote this.

What if the email server is busy or down? This is why there is a priority associated with an MX record. If one email server is down, the sending server will try the next one instead of blindly sending into the ether hoping for the best.

## Further resources

I hope this helped you to become almost dangerous with domains. There is a ton of other information out there so here are some additional resources for you:

- [How Domain Name Servers Work - HowStuffWorks](https://computer.howstuffworks.com/dns.htm)
- [List of Internet top-level domains - Wikipedia](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains)
- [G Suite MX record values - G Suite Admin Help](https://support.google.com/a/answer/174125?hl=en)

<div class="text-center mt-10 border bg-grey-lightest p-6">
  <p>
    <strong class="text-2xl">Need help moving or setting up your domain name?</strong>
  </p>
  <p>
    Let's schedule a time to have a chat!
  </p>
  <p>
    Click on the button below to go to my Calendly page and select a time which works for you.
  </p>
  <p>
    <a href="https://calendly.com/chrisjmears/website-woes-intro" class="js-event-track bg-green-dark border-2 border-white hover:bg-green font-semibold py-3 px-5 rounded shadow-md hover:shadow-none text-2xl inline-block no-underline">
      <span class="text-white">Schedule a chat</span>
    </a>
  </p>
  <p>
    <em class="text-base">Don't worry, this won't be a sales call. We'll chat about your pains and goals after which I'll be able to suggest next steps.</em>
  </p>
</div>
