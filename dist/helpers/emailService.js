import axios from "axios";
const { ELASTIC_API_KEY, ELASTIC_FROM_EMAIL } = process.env;
if (!ELASTIC_API_KEY || !ELASTIC_FROM_EMAIL) {
    throw new Error("Elastic Email environment variables are missing");
}
const sendVerificationEmail = async ({ to, subject, html, }) => {
    await axios.post("https://api.elasticemail.com/v4/emails", {
        Recipients: [{ Email: to }],
        Content: {
            From: ELASTIC_FROM_EMAIL,
            Subject: subject,
            Body: [
                {
                    ContentType: "HTML",
                    Content: html,
                },
            ],
        },
    }, {
        headers: {
            "X-ElasticEmail-ApiKey": ELASTIC_API_KEY,
        },
    });
};
export default sendVerificationEmail;
//# sourceMappingURL=emailService.js.map