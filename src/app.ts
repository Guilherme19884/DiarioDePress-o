import express, { Request, Response, json } from "express"

function createApp(){
    const app = express()

    app.use(json())

    app.get('/', (req: Request, res: Response){
        res.status(200).json({user: "Guilherme"})
    })
}
