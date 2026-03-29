const nodemailer = require("nodemailer");
const { Model } = require("sequelize");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


const sendEmail = async (to , subject , text , html)=>{
    try {
        await transporter.sendMail({
            from : process.env.EMAIL,
            to,
            subject,
            text,
            html
        })

        
    } catch (error) {

        console.log("error", error.message);
    }
}

module.exports = sendEmail