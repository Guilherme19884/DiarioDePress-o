

export const findAllUsers = async(): Promise<User[]> => {
    return  await User.findAllUsers
}