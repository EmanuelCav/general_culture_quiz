import { SetStateAction } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "@reduxjs/toolkit";

import { IOptionUser } from "../interface/User";

type RouteTypes = {
    Home: undefined;
    Configuration: undefined;
    History: undefined;
    Generator: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteTypes>

export type ButtonAcceptPropsType = {
    func: () => void;
    text: string;
    isCategory: boolean;
}

export type ButtonMenuPropsType = {
    func: () => void;
    text: string;
}

export type ButtonAuthPropsType = {
    func: () => void;
    text: string;
}

export type ButtonSelectPropsType = {
    func: (query: boolean) => void;
    text: string;
    query: boolean;
}

export type ButtonOptionPropsType = {
    func: (e: any, number: number) => void;
    text: string;
    amountOptions: number;
}

export type AmountQuestionsPropsType = {
    amountQuestions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type AmountOptionsPropsType = {
    amountOptions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type SoundsPropsType = {
    isSounds: boolean;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type StatisticDataPropsType = {
    text: string;
    data: number | string;
}

export type MenuPropsType = {
    navigation: StackNavigation;
    dispatch: Dispatch;
    isConnection: boolean;
    setIsChangeView: (isChangeView: boolean) => void;
    isChangeView: boolean;
}
