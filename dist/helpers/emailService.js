import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendVerificationEmail = async ({ to, verificationToken, }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL,
            to: [to],
            subject: "Verify your email",
            html: `
        <div>
          <h1>Almost there!</h1>
          <p>Click the link below to verify your email:</p>
          <a href="${verificationToken}">${verificationToken}</a>
        </div>
      `,
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