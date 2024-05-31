import * as User from "../models/users-Model"

export const findAllUsers = async(): Promise<User[]> => {
    return  await User.findAllUsers
}