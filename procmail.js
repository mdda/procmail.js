
// npm install mailparser

var fs = require('fs');
var MailParser = require("mailparser").MailParser;
var mailparser = new MailParser({
//  debug:true
});

// setup an event listener when the parsing finishes
mailparser.on("end", function(mail_object){
  console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
  console.log("Subject:", mail_object.subject); // Hello world!
  console.log("Text body:", mail_object.text); // How are you today?
  
  if(!mail_object.attachments) {
    console.log("NO ATTACHMENTS");
  }
  else {
    for(var i=0; i<mail_object.attachments.length; i++){
      console.log(mail_object.attachments[i].fileName, mail_object.attachments[i].length);
    }  
  }
});

// Read from stdin 
process.stdin.pipe(mailparser);


