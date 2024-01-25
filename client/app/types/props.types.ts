import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { IOptionUser } from "../interface/User";

type RouteTypes = {
    Home: undefined;
    Play: undefined;
    Categories: undefined;
    Options: undefined;
    Playing: undefined;
    Ranking: undefined;
    Settings: undefined;
    Statistics: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteTypes>

export type ButtonMenuPropsType = {
    func: () => void;
    text: string;
}

export type ButtonOptionPropsType = {
    func: (number: number) => void;
    text: string;
}

export type AmountQuestionsPropsType = {
    amountQuestions?: number;
    setOptionsUser: (optionsUser: IOptionUser) => void;
}

export type AmountOptionsPropsType = {
    amountOptions?: number;
    setOptionsUser: (optionsUser: IOptionUser) => void;
}