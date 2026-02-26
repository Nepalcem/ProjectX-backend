import { BrevoClient } from "@getbrevo/brevo";

const { BREVO_API_KEY, BREVO_FROM_EMAIL, BREVO_FROM_NAME } = process.env;

if (!BREVO_API_KEY || !BREVO_FROM_EMAIL || !BREVO_FROM_NAME) {
  throw new Error("Brevo environment variables are missing");
}

const brevo = new BrevoClient({ apiKey: BREVO_API_KEY });

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

const sendVerificationEmail = async ({
  to,
  subject,
  html,
}: SendEmailOptions): Promise<void> => {
  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        email: BREVO_FROM_EMAIL,
        name: BREVO_FROM_NAME,
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    });
  } catch (error: any) {
    console.error(error.response?.body || error);
    throw error;
  }
};

export default sendVerificationEmail;
