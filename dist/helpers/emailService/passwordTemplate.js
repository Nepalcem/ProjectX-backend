const { FRONTEND_URL } = process.env;
const passwordResetURL = (resetToken, email) => `${FRONTEND_URL}/auth/reset-password/?email=${email}&resetToken=${resetToken}`;
const passwordResetTemplate = (resetToken, email) => `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Reset your Age of Battles password</title>
        </head>
        <body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f7fb;padding:32px 12px;">
                  <tr>
                    <td style="padding:0 28px 6px;">
                      <h1 style="margin:0;font-size:22px;line-height:1.25;">To continue using your account please reset your password!</h1>
                    </td>
                  </tr>
      
                  <tr>
                    <td style="padding:0 28px 18px;">
                      <p style="margin:10px 0 0;font-size:14px;line-height:1.6;color:#374151;">
                        Click the button below to reset your password.
                      </p>
                    </td>
                  </tr>
      
                  <tr>
                    <td align="center" style="padding:8px 28px 22px;">
                      <a  href="${passwordResetURL(resetToken, email)}"
                        style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 18px;border-radius:10px;"
                      >
                        Reset password
                      </a>
                    </td>
                  </tr>
      
                  <tr>
                    <td style="padding:0 28px 26px;">
                      <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7280;">
                        If the button doesn’t work, copy and paste this link into your browser:<br />
                        <a href="${passwordResetURL(resetToken, email)}" style="color:#4f46e5;text-decoration:underline;word-break:break-all;">${passwordResetURL(resetToken, email)}</a>
                      </p>
                    </td>
                  </tr>
      
                  <tr>
                    <td style="padding:16px 28px;background:#f9fafb;">
                      <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7280;">
                        If you didn’t request this, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `;
export default passwordResetTemplate;
//# sourceMappingURL=passwordTemplate.js.map