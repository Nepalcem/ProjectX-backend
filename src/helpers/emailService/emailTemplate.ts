const { BASE_URL } = process.env;
const verificationURL = `${BASE_URL}/auth/verify/`;

const emailTemplate = (verificationToken: string) => `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Verify your email</title>
        </head>
        <body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f7fb;padding:32px 12px;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(17,24,39,.08);">
                  <tr>
                    <td style="padding:28px 28px 10px;">
                      <div style="font-size:18px;font-weight:700;letter-spacing:.2px;">Age of Battles Welcomes You!</div>
                    </td>
                  </tr>
      
                  <tr>
                    <td style="padding:0 28px 6px;">
                      <h1 style="margin:0;font-size:22px;line-height:1.25;">To continue using your account please verify your email!</h1>
                    </td>
                  </tr>
      
                  <tr>
                    <td style="padding:0 28px 18px;">
                      <p style="margin:10px 0 0;font-size:14px;line-height:1.6;color:#374151;">
                        Click the button below to confirm your email address.
                      </p>
                    </td>
                  </tr>
      
                  <tr>
                    <td align="center" style="padding:8px 28px 22px;">
                      <a  href="${verificationURL}${verificationToken}"
                        style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 18px;border-radius:10px;"
                      >
                        Verify email
                      </a>
                    </td>
                  </tr>
      
                  <tr>
                    <td style="padding:0 28px 26px;">
                      <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7280;">
                        If the button doesn’t work, copy and paste this link into your browser:<br />
                        <a href="${verificationURL}${verificationToken}" style="color:#4f46e5;text-decoration:underline;word-break:break-all;">${verificationURL}${verificationToken}</a>
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

export default emailTemplate;
