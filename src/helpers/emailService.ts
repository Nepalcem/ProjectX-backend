import nodemailer from "nodemailer";

const createTransporter = () => {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
};

interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
}

interface UserEmail {
  email: string;
}

export const sendVerificationEmail = async (user: UserEmail, verificationURL: string) => {
  try {
    const transporter = createTransporter();

    const clearURL = verificationURL.trim();

    const message = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Verify your email for ProjectX account",
      html: `<a href='${clearURL}'>Click to verify your email</a>`,
    };

    const info = await transporter.sendMail(message);

    console.log("Email sent: %s", info.messageId);
  } catch (error: any) {
    console.error(error);
  }
};