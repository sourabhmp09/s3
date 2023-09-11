const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  




    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },

    });




    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      // subject: options.subject,
      subject: options.subject,
      text: options.message,
    };

    //testing
// console.log("const mailOptions", mailOptions  );


    await transporter.sendMail(mailOptions,function (err,info) {
      if (err) {
        console.log(err);
      }
      else{
        console.log("email sent succ",info.response);
      }
    });

  
 
};

module.exports = sendEmail;


//////////////
