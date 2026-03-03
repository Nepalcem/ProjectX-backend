import { Resend } from "resend";
import emailTemplate from "./emailTemplate.js";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendVerificationEmail = async ({ to, verificationToken, }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL,
            to: [to],
            subject: "Verify your email",
            html: emailTemplate(verificationToken),
        });
        if (error) {
            console.error("Error sending email:", error);
            throw new Error("Failed to send email11");
        }
        console.log("Verification email sent:", data.id);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
//# sourceMappingURL=emailService.js.map