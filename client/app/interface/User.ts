export interface IUserReducer {
    isLoggedIn: boolean;
    user: IUserInfo;
}

export interface IUserInfo {
    token?: string;
    user?: any;
}

export interface IOptionUser {
    amountQuestions?: number;
    amountOptions?: number;
}