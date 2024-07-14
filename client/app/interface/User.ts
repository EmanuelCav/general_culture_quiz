import { LanguagesTypes, PallettesTypes } from "../types/key.type";

export interface IUserReducer {
    user: IUser;
    isLoggedIn: boolean;
}

export interface IUser {
    id?: string;
    name?: string;
    language?: LanguagesTypes;
    palletteBackground?: PallettesTypes;
    palletteText?: PallettesTypes;
}
