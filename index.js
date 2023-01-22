const nodemailer = require('nodemailer');
// const fs = require('fs');
// Read the PDF file into a buffer
// const pdf = fs.readFileSync('./output_test_new.pdf');
// Convert the buffer to a base64-encoded string
let pdfBase64 = "data:application/pdf" + pdf.toString('base64');
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "user_mail",
        pass: "mail_password"
    },
});
let mailOptions = {
    from: 'source_mail',
    to: 'receiver1@gmail.com,receiver2@gmail.com,receiver3@gmail.com',
    subject: 'Reports',
    text: 'Please find the attached PDF',
    attachments: [{
        filename: 'pdf_name.pdf',
        path: './path_to_pdf.pdf'
    }],
    html: `
      <!DOCTYPE html>
        <html>
            <head>
                <title>Download PDF</title>
            </head>
                <body>
                <   p>Report PDF generation</p>
                </body>
        </html>  `
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


