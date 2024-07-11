import { LanguagesTypes } from "../types/key.type";

export interface IUserReducer {
    user: IUser;
    isLoggedIn: boolean;
}

export interface IUser {
    id?: string;
    name?: string;
    language?: LanguagesTypes;
    isSounds?: boolean;
}
