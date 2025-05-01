import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstname, lastname, email, phone, service, message } = req.body;

  if (!firstname || !lastname || !email || !phone || !service || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER1,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_USER1,
      to: process.env.NEXT_PUBLIC_GMAIL_USER2,
      subject: `New Client Request for: ${service}`,
      html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
}
