---
layout: post
title: "Don't Get Caught With Your Security Pants Down! 👖 Web Security Made Easy! 🔐"
excerpt: "Shopping on the Internet is like wandering around a crowded bazaar or farmer's market. While you can install these security certificates for no cost, there are certain situations where you might want to pay a small fee and do some extra paperwork to gain your customers' trust."
categories:
  - technology
tags: [hiring]
header:
  teaser: 'https://res.cloudinary.com/wanderingleafstudios/image/upload/b_auto,c_pad,g_center,h_630,w_1200/v1537890988/chrisjmears.com/blog/marcos-mayer-735961-unsplash.jpg'
---

![padlocks in steel cable](https://res.cloudinary.com/wanderingleafstudios/image/upload/v1543511037/chrisjmears.com/blog/marcos-mayer-735961-unsplash.jpg)

<div class="text-right text-grey text-sm mb-6">
  <em>Photo by marcos mayer on Unsplash</em>
</div>

# Don't Get Caught With Your Security Pants Down! 👖 Web Security Made Easy! 🔐

Shopping on the Internet is like wandering around a crowded bazaar or farmer's market. With any marketplace, there can be a general unease about who to trust. If there isn't a sign of security, then customers may shop elsewhere.

If you sell things online, you need to encrypt sensitive information securely and reliably with an SSL/TLS certificate (i.e., what gets you a secure `https://` in your address bar).

While you can install these security certificates for no cost, there are certain situations where you might want to pay a small fee and do some extra paperwork to gain your customers' trust.

Note: If you're curious about the nerdy acronyms, see the Appendix below, but they're not completely necessary for following along.

## For the most part, HTTPS / SSL / TLS certificates are FREE

Ever since [Let's Encrypt](https://letsencrypt.org/) came out guns blazing with free certificates in 2016, if you have a good web host, use Cloudflare (a content delivery network or CDN), or have a little dev tinkering skills, SSL/TLS certificates are free and easy to install.

## Then, why would I ever need to pay for an SSL certificate?

Number one reason: Customer trust.

While you can gain the security features for no cost, your potential paying customers may want a trusted certificate authority warranty.

In other words, if you are selling something for the first time and want customers to trust your business, then the best way is to go through a verification process to prove that your business is legitimate.

## The types of SSL validation levels

The type of SSL is based on the validation level. This is the extent to which the certificate authority will validate the owner's authenticity.

Here's a rundown of the validation levels:

* **Domain Validation (DV)**
    * Instant access
    * No paperwork
    * This is what Let's Encrypt provides for no cost
    * Expect to pay: Free up to $30 per year
* **Organization Validation (OV)**
    * Available in days to weeks
    * Paperwork needed to verify business
    * Site seal to show validation
    * Expect to pay: $40-80 per year
* **Extended Validation (EV)**
    * Available in days to weeks
    * Paperwork needed  to verify business (perhaps more than OV)
    * Site seal, plus green bar (though browsers seem to be phasing the green bar out 😕)
    * Expect to pay: $80-250 per year

For more information see [Trusted SSL Certificates - Namecheap.com](https://www.namecheap.com/security/ssl-certificates/)

## Why go through all of the paperwork rigmarole?

As mentioned, the certificate authorities, like Comodo, will ask for you to fill out paperwork for OV and EV validation. It's somewhat tedious, and you'll need to have your official state and federal level business documents available.

Because the paperwork is so extensive and certificate authorities are trusted, the intended outcome is that customers will trust your business more.

It's kind of like being listed and having an excellent rating in the Better Business Bureau or another style of respected guide to identify trustworthy businesses.

## Wrap-up

Basically, if you sell things online, you should consider a warranty-based SSL certificate.

However, if you:

* Don't sell things, or
* Utilize a platform such as Squarespace or Etsy, or
* Have already gathered a bunch trust via testimonials

Then you can save some money and hassle by sticking with free SSL/TLS certificates.

## Appendix: What does it all mean!?

* **HTTPS or HyperText Transfer Protocol Secure** - This is the `https://` in a web address. Basically, it means to use the secure method of connecting rather than the unsecured method (i.e., `http://`). HTTPS uses either SSL or TLS.
*  **SSL or Secure Socket Layer** - You might be surprised to know that SSL is actually old and busted. However, we still use it conversationally when we actually mean TLS.
* **TLS or Transport Layer Security** - The new version of security that essentially replaces SSL. However, note that TLS v1.0 is BAD. TLS v1.1 and above are GREAT!

<div class="text-center mt-10 border bg-grey-lightest p-6">
  <p>
    <strong class="text-2xl">Need assistance with your SSL/TLS headache?</strong>
  </p>
  <p>
    Let's schedule a time to have an intro call.
  </p>
  <p>
    Click on the button below to go to my Calendly page and select a time which works for you.
  </p>
  <p>
    <a href="https://calendly.com/chrisjmears/website-woes-intro" class="js-event-track bg-green-dark border-2 border-white hover:bg-green font-semibold py-3 px-5 rounded shadow-md hover:shadow-none text-2xl inline-block no-underline">
      <span class="text-white">Schedule an Intro</span>
    </a>
  </p>
  <p>
    <em class="text-base">Don't worry, this won't be a sales call.</em>
  </p>
</div>
