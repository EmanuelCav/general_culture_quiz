import { LanguagesTypes } from "../types/key.type";

export interface IUserReducer {
    user: IUser
}

export interface IUser {
    id?: number;
    language?: LanguagesTypes;
    isSounds?: boolean;
}
