import express, { Request, Response, json} from "express"

const app = express()
const port = process.env.PORT

app.use(json())

app.listen(port, () => {
    console.log(`Servidor rodando hhtp://localhost:${port}`)
})