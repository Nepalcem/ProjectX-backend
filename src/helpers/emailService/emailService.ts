import { Resend } from "resend";
import emailTemplate from "./emailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY!);
const fromEmail = process.env.RESEND_FROM_EMAIL!;

interface SendVerificationEmailOptions {
  to: string;
  verificationToken: string;
}

export const sendVerificationEmail = async ({
  to,
  verificationToken,
}: SendVerificationEmailOptions) => {
  try {
    const { data, error } = await resend.emails.send({
      from:  `Age of Battles <${fromEmail}>`,
      to: [to],
      subject: "Verify your email",
      html: emailTemplate(verificationToken),
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }

    console.log("Verification email sent:", data.id);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
