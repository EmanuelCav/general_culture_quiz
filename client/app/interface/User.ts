export interface IUserReducer {
    isLoggedIn: boolean;
    user: IUserInfo;
}

export interface IUserInfo {
    token?: string;
    user?: IUser;
}

export interface IUser {
    _id: string;
    nickname: string;
    statistics: any[];
    amountOptions: number;
    amountQuestions: number;
    country: any;
    language: any;
    helps: number;
    createdAt: string;
    updatedAt: string;
}

export interface IOptionUser {
    amountQuestions?: number;
    amountOptions?: number;
}