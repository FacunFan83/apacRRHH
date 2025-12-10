import express from "express"

const app = express()
app.get("/", (req, res) => {
    res.send('Hola como estas')
})
const PORT = 3000

app.listen(PORT)