import {Resend} from "resend";
import passwordResetTemplate from "./passwordTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY!);
const fromEmail = process.env.RESEND_FROM_EMAIL!;

interface SendPasswordResetEmailOptions {
  resetToken: string;
  email: string;
}

const sendPasswordResetEmail = async ({
  resetToken,
  email,
}: SendPasswordResetEmailOptions) => {
    try {
        const { data, error } = await resend.emails.send({
          from:  `Age of Battles <${fromEmail}>`,
          to: [email],
          subject: "Reset your Age of Battles password",
          html: passwordResetTemplate(resetToken, email),
        });
    
        if (error) {
          console.error("Error sending email:", error);
          throw new Error("Failed to send email");
        }
    
        console.log("Password reset email sent:", data.id);
      } catch (err) {
        console.error(err);
        throw err;
      }
}

export default sendPasswordResetEmail;