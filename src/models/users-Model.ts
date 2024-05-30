
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    createDate: Date;
    createHora: Date;
    valuePresion: string;
    physicalActivity: boolean;
    smoker: boolean;
    heartProblem: boolean;
  }


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
