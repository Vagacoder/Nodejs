/*
 * Using Nodemailer module
 * $ npm install nodemailer
 */

 import nodemailer from 'nodemailer';

 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user: 'yourname@gmail.com',
         pass: 'xxxxxx'
     }
 });

 const mailOptions = {
    from: 'a@gmail.com',
    to: 'b@yahoo.com, c@hotmail.com, d@apple.com',   
    subject: 'Sending email using node js',
    text: 'Hello!'
 };

 transporter.sendMail(mailOptions, (err, info) =>{
     if(err){
         console.log(err);
     }else{
         console.log('Email sent: ' + info.response);
     }
 });


