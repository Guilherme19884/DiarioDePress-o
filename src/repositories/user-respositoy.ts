import { User } from "../models/users-Model"

const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        isActive: true,
        createDate: new Date(),
        createHora: new Date(),
        valuePresion: "120/80",
        physicalActivity: true,
        smoker: false,
        heartProblem: false
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        password: "password456",
        isActive: true,
        createDate: new Date(),
        createHora: new Date(),
        valuePresion: "110/70",
        physicalActivity: true,
        smoker: false,
        heartProblem: false
    }
]

export const findAllUsers = async(): Promise<User[]> => {
    return users
}