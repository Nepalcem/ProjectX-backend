interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
}
declare const sendVerificationEmail: ({ to, subject, html, }: SendEmailOptions) => Promise<void>;
export default sendVerificationEmail;
//# sourceMappingURL=emailService.d.ts.map