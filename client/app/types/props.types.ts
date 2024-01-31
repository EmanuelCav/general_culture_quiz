import { SetStateAction } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "@reduxjs/toolkit";

import { IOptionUser, IUserReducer } from "../interface/User";

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
    func: (e: any, number: number) => void;
    text: string;
}

export type AmountQuestionsPropsType = {
    amountQuestions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type AmountOptionsPropsType = {
    amountOptions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type StatisticDataPropsType = {
    text: string;
    data: number | string;
}

export type MenuPropsType = {
    navigation: StackNavigation;
    user: IUserReducer;
    dispatch: Dispatch;
}

