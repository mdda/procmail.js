procmail.js
===========

NodeJS email auto-responder, with notes

Enabling ```procmail``` email parsing is always a bit of a frustrating exercise, since none of the standard tool chains are built for it.

The attached actually work for mail sent to ```node_process@example.com```, using my own Fedora linux VPS, 
running ```postfix``` in its default configuration (using ```virtual-servers``` as the routing mechanism for multiple sites).

I'll add more details, and an out-bound email portion, if anyone is interested.


Install
----------

```
npm install mailparser 
cp dot_procmailrc ~/.procmailrc && chmod 600 ~/.procmailrc 
mkdir ~/Mail
```

Test
----------
```
cat mail-example.txt | node procmail.js 
```

