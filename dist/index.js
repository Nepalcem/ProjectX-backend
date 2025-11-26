import express from "express";
const app = express();
const port = 3000;
app.get("/", (_req, res) => {
    res.send(console.log("Its alive!11"));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map