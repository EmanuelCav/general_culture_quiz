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