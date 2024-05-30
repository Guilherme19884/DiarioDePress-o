import { Router } from "express"

const router = Router()

//Rotas para usuários
router.get('/users', UserController.getUsers)