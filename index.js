import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url";

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

import notFound from "./src/middlewares/notFound.js"
app.use(notFound)

const PORT = 3000
app.listen(PORT)