const nodemailer = require("nodemailer");
const userEmail = process.env.EMAIL;
const userPass = process.env.EMAIL_PASSWORD;

exports.sendEmail = async (req, res) => {
  const { name, email, body } = req.body;

  if (!name || !email || !body) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    await transporter.sendMail({
      from: userEmail,
      to: userEmail,
      subject: "Job Request",
      text: `
        Name: ${name}
        Email: ${email}
        Description: ${body}
      `,
    });

    return res.status(200).json({ success: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
