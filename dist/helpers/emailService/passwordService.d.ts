interface SendPasswordResetEmailOptions {
    resetToken: string;
    email: string;
}
declare const sendPasswordResetEmail: ({ resetToken, email, }: SendPasswordResetEmailOptions) => Promise<void>;
export default sendPasswordResetEmail;
//# sourceMappingURL=passwordService.d.ts.map