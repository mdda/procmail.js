procmail.js
===========

NodeJS email auto-responder, with notes

Enabling ```procmail``` email parsing is always a bit of a frustrating exercise, since none of the standard tool chains are built for it.

The attached actually work for mail sent to ```node_process@example.com```, using an 'off-the-shelf' $5/month Fedora linux VPS, 
running ```postfix``` in its default configuration (using ```virtual-servers``` as the routing mechanism for multiple sites).

In addition, there's a version that includes a outgoing mail component, also proven to work on the same 'off-the-shelf' configuration.


Install
----------

```
npm install mailparser 
cp dot_procmailrc ~/.procmailrc && chmod 600 ~/.procmailrc 
mkdir ~/Mail
```

Test
----------

The easiest way to capture a 'live' email is to do 'show original' within the drop-down box on the right-hand-side of gmail.  
Simply save that raw text file as ```mail-example.txt``` and pipe it into ```procmail.js``` as follows : 

```
cat mail-example.txt | node procmail.js 
```

The same incantation works for ```procmail_with_response.js`` - but it would make sense to check out the internals first 
(particularly since your email provider may want the sending address to match the origin SMTP server).
