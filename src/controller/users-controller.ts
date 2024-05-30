import { Request, Response } from "express"

export const getUsersController = async (req: Request, res: Response) => {
    const HttpResponse = await getUserService ()
    res.status(HttpResponse.statusCode).json({user: "Pai"})
}