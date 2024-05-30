import express, { Request, Response } from "express"

const app = express()
const port = process.env.PORT

app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando hhtp://localhost:${port}`)
})