import { Router } from "express"
import * as UsersController from "./controller/users-controller"

const router = Router()

//Rotas para usuários
router.get('/users', UsersController.getUsersController)