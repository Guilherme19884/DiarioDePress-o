import { Request, Response } from "express"
import { getUsersService } from "../service/userService"

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const httpResponse = await getUsersService();
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}