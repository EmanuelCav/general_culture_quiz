import { IAuthLoginData, IOptionUser } from "../interface/User";
import { StackNavigation } from "./props.types";

export type UsersActionPropsType = {
    token: string;
    navigation: StackNavigation;
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
    token: string;
    navigation: StackNavigation;
}