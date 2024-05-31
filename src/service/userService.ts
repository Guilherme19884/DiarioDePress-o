import * as Http from "../utils/http-helper"

export const getPlayerService =  async ()=> {

    const data = await UserRepository.findAllPlayers()
    let response = null

    if(data){
        response = await Http.ok(data)
    }else{
        response = await Http.noContent()
    }

    return response
}