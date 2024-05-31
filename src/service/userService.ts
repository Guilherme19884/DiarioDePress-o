import * as Http from "../utils/http-helper"
import * as UserRepository from "../repositories/user-respositoy"

export const getPlayerService =  async ()=> {

    const data = await UserRepository.findAllUsers()
    let response = null

    if(data){
        response = await Http.ok(data)
    }else{
        response = await Http.noContent()
    }

    return response
}