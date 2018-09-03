'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
var mail_handler = ((ToSend,ToSendName) => {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'princebatra2315@gmail.com',
    pass: 'hellogeek@123'
  }
});

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"MANAN" <princebatra2315@gmail.com>', // sender address
        to: ToSend,// list of receivers
        subject: 'Manthan', // Subject line
        text: 'Hello world?', // plain text body
        html: `<p>Thankyou <b>${ToSendName}</b>!<p>You have been registered for MANTHAN.</p><p>Here's what you'll need to know before the test :</p><br><p>1) The test will include aptitude and coding questions.</p><p>2) You will be given 60 minutes to solve the test. Try to solve as many problems as you can.</p><p>3) The complete audition process would be fair and transparent. </p><br><p>ALL THE BEST ! </p><p>See you on 6 September 18.</p><br><p>Regards,</p><p>Manan - A Techno Surge</p>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

module.exports = mail_handler;