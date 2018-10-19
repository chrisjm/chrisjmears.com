---
layout: post
title: "Avoid getting trapped by your web host"
excerpt: "One of the more intimidating choices for non-technical small business owners is the overwhelming number of options for creating and hosting your website and registering domains. The following is a list of 10 tips about web hosts and domain registrars every entrepreneur should know."
categories:
- technology
tags: [ web hosting ]
header:
  teaser: "https://res.cloudinary.com/wanderingleafstudios/image/upload/b_auto,c_pad,g_center,h_630,w_1200/v1537890988/chrisjmears.com/blog/erik-kossakowski-666859-unsplash.jpg"
---

![three birds flying in the sky](https://res.cloudinary.com/wanderingleafstudios/image/upload/v1539969073/chrisjmears.com/blog/erik-kossakowski-666859-unsplash.jpg)
<div class="text-right text-grey text-sm mb-6">
  <em>Photo by Erik Kossakowski on Unsplash</em>
</div>

One of the more intimidating choices for non-technical small business owners is the overwhelming number of options for creating and hosting your website and registering domains.

There are tens of thousands of [web hosts](https://en.wikipedia.org/wiki/Web_hosting_service) and thousands of [domain name registrars](https://en.wikipedia.org/wiki/Domain_name_registrar) (i.e., services where you buy and register a domain name). While informed research and personal recommendations narrow down the list, what are some other factors solopreneurs should consider when venturing into this space?

The following is a list of 10 tips about web hosts and domain registrars every entrepreneur should know.

## 1. Don't pay for hosting until you have to

If you only need a landing page with information on how to get in touch with you, then a static website is perfect. Other examples include a simple blog, marketing website, project site, resume, etc.

Several web hosts will serve a simple, static website for free. My favorite hosts among these are [Github Pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/).

Going this route currently requires minimal web development skills (required: HTML and CSS; optional: JavaScript and Git), so may not be an immediate option for some business owners.  This is why WordPress is often used.

The benefit of WordPress is that it's user-friendly and is highly dynamic. It's able to install plugins on the fly and do snazzy things without needing to "compile" or "build" the site again. This makes it a perfect choice for business owners who don't want to pay too much in maintenance fees and want to make updates without too much hassle. However, the expensive bits are the initial setup and monthly/yearly hosting.

## 2. Keep domain name and web host separate

While it's tempting to register your domain name with your web host to keep things in the same place, it often leads to more trouble than it's worth. The typical scenario is that if/when you decide to switch hosts, you'll also need to move the domain name, which can sometimes be more time-consuming than transferring website files and databases.

I've found a better alternative is to host your domain with a separate domain registrar service. This way, you can control all of your domain names in one place. Similarly, your web host should be used only to manage your website(s).

## 3. Retain control of your domain and website

Often web agencies offer to host the website on their servers or web host of choice. While this is convenient in the short-term, it often makes regaining control of your site difficult and time-consuming.

If you plan on needing ownership of the domain and website (the answer is "yes" 😁), make sure those expenses are going on your credit card and that you have all of the login information. While it's a pain to keep these records, it will save you a lot of hassle in the long-run.

## 4. Understand your web hosting needs

Sometimes understanding this technology is easier said than done. In fact, this topic probably deserves its own article, but here it is in a nutshell.

The way your website is built determines what you need to serve it. WordPress websites require a database so tend to be a little more expensive to host monthly or yearly. If you don't need an extensive admin system, then you can sometimes get away with hosting your website for free (see "Don't pay for hosting until you have to").

[Shared hosting](https://en.wikipedia.org/wiki/Web_hosting_service#Shared_web_hosting_service) is cheap but slow due to the number of websites occupying a given server. A [Virtual Private Server](https://en.wikipedia.org/wiki/Virtual_private_server) (VPS) or [Cloud Hosting](https://en.wikipedia.org/wiki/Cloud_computing) is faster and more secure, but more costly.

## 5. Keep track of the critical information

Be sure to use a [password manager](https://en.wikipedia.org/wiki/Password_manager) to keep track of the following important information (some may be optional depending on your website):

* Web host administration (a.k.a., cPanel)
* Domain registrar (i.e., where you bought your domain name)
* FTP/SFTP account
* Database admin (a.k.a., phpMyAdmin, cPanel, MySQL, PostgreSQL)
* WordPress admin account

## 6. Value customer service over cost

As budget-conscious small business owners, it's tempting to value budget over customer service in regards to web hosts and domain registrars.

I find it's worth it to do some quick searches (e.g., "[web host name] customer service reviews [current year]") to ensure I know the level of customer service I'm dealing with. Otherwise, reputation and recommendations from trusted sources go a long way.

Take it from my experience moving websites, it's rarely worth the risk or savings.

## 7. Keep your WHOIS records up-to-date

Domain transfers can take a while. Unfortunately, all of the power is with the domain registrars or web host in this situation. Keep your [WHOIS records](https://en.wikipedia.org/wiki/WHOIS) up-to-date so that you are able to receive the approval email, which might help expedite the process.

## 8. Be patient when updating domain (DNS) records

Whenever you update a domain record or DNS record, it can take anywhere from 5 minutes to 24 hours to tell the other world-wide DNS servers things have changed. There's not much that can be done about it. Be patient and perhaps double-check the records to make sure everything is correct.

## 9. Content Delivery Networks (CDNs) are a good thing

A [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) essentially allows you to serve your website at the same speed all over the world. Typically, when you purchase web hosting, your site is being served from one physical location. Therefore, a visit from a client halfway around the world will have slower load times.

A CDN automatically hosts all or some files of your site on several servers strategically placed all over the world.

And the best part, most CDNs have a free tier! Examples of CDNs are [Cloudflare](https://cloudflare.com/), [Cloudfront](https://aws.amazon.com/cloudfront/), and [Cloudinary](https://cloudinary.com/) (hmm, I'm seeing a naming trend here 🤔😆).

## 10. Paying for SSL/TLS certificates is so 2015

An SSL/TLS certificate is necessary to secure your website with the HTTPS protocol. In fact, if your site doesn't support HTTPS, [Chrome will specifically call it out](https://blog.chromium.org/2018/02/a-secure-web-is-here-to-stay.html), and [Google will reduce your site ranking](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html).

Ever since [Let's Encrypt](https://letsencrypt.org/) launched in the spring of 2016, there's never been a reason to buy SSL/TLS certificates (which were/are typically ~$9/year). And even less of a reason this past spring when they launched wildcard support.

Most good web hosts have incorporated the process into their service offerings. But some may need to be set up manually.

All that said, you might still want to pay for an [assured certificate](https://www.namecheap.com/support/knowledgebase/article.aspx/9508/68/what-is-the-difference-between-very-high-high-medium-and-low-assurance-certificates) if you run a medium-to-high volume eCommerce business. It's the best way to guarantee customers they aren't being scammed due to the level of background checks on your company.
