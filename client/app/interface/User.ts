export interface IUserReducer {
    isLoggedIn: boolean;
    user: IUserInfo;
}

export interface IUserInfo {
    token?: string;
    user?: any;
}