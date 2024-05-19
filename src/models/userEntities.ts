import { User } from './user';


export class UserEntity {
    private user: User;

    constructor(user: User) {
        this.user = user;
    }


    // Pratica atividade física
    isActive(): boolean {
        return this.user.isActive;
    }

    //Problema cardiáco
    hasHeartProblem(): boolean {
        return this.user.heartProblem;
    }

    // função para Avaliar medição
    
}
