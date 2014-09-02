var MailParser = require("mailparser").MailParser;
var mailparser = new MailParser({
//  debug:true
});
var fs = require('fs');

// This worked for me (whereas emailjs didn't)
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
  host: 'localhost',
  port: 25,
//  auth: {
//      user: 'username',
//      pass: 'password'
//  },
  maxConnections: 5,
  maxMessages: 10
}));


// setup an event listener when the parsing finishes
mailparser.on("end", function(mail_object){
  console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
  console.log("Subject:", mail_object.subject); // Hello world!
  console.log("Text body:", mail_object.text); // How are you today?
  
  var from = mail_object.from[0];
  
  if(!mail_object.attachments) {
    console.log("NO ATTACHMENTS");
  }
  else {
    for(var i=0; i<mail_object.attachments.length; i++){
      console.log(mail_object.attachments[i].fileName, mail_object.attachments[i].length);
    }  
  }
  
  // CREATE EMAIL RESPONSE
  var email_response = {
    from:    "Admin <Admin@example.com>", 
    to:      '"'+from.name+'"' + " <"+from.address.toLowerCase()+">", 
    subject: "Re : " + mail_object.subject,
    text:    "Thank you for sending us an email recently...\n",
    content: 'text/plain; charset=utf-8'
  };

  // Add additional content...
  
  // SEND EMAIL RESPONSE
  transporter.sendMail( email_response, function(err, message) { 
    console.log(err || message); 
  });
  
});

// Read from stdin 
process.stdin.pipe(mailparser);


