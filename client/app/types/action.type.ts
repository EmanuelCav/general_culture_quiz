import { IAuthLoginData, IOptionUser } from "../interface/User";

import { RankingDateType } from "./key.type";
import { StackNavigation } from "./props.types";

export type UsersActionPropsType = {
    token: string;
    navigation: StackNavigation;
    date: RankingDateType;
    isNavigate: boolean;
}

export type ProfileActionPropsType = {
    id: string;
    token: string;
    navigation: StackNavigation;
}

export type OptionsActionPropsType = {
    token: string;
    optionData: IOptionUser;
    navigation: StackNavigation;
}

export type CategoryActionPropsType = {
    token: string;
    id: string;
}

export type CategoryAllActionPropsType = {
    query: boolean;
    token: string;
}

export type AuthLoginActionPropsType = {
    userData: IAuthLoginData;
    navigation: StackNavigation;
}

export type RegisterUserActionPropsType = {
    userData: IAuthLoginData;
    navigation: StackNavigation;
    token: string;
}


export type GameActionPropsType = {
    navigation: StackNavigation;
    token: string;
}