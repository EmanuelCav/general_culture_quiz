import { SetStateAction } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Dispatch } from "@reduxjs/toolkit";

import { IOptionUser, IStatistic, IUser, IUserInfo, IUserReducer } from "../interface/User";
import { IGame } from "../interface/Game";

type RouteTypes = {
    Home: undefined;
    Play: undefined;
    Categories: {
        isPlay: boolean
    };
    Options: undefined;
    Playing: {
        allQuestions: any[];
    };
    Ranking: undefined;
    Settings: undefined;
    Statistics: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteTypes>

export type RouteParamCategory = RouteProp<RouteTypes, 'Categories'>
export type RouteParamPlaying = RouteProp<RouteTypes, 'Playing'>

export type CategoriesPropsType = {
    navigation: StackNavigation;
    route: RouteParamCategory;
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

export type StatisticDataPropsType = {
    text: string;
    data: number | string;
}

export type MenuPropsType = {
    navigation: StackNavigation;
    user: IUserReducer;
    dispatch: Dispatch;
}

export type UserStatisticsPropsType = {
    games: IGame[];
    user: IUser;
}

export type UsersRankingPropsType = {
    user: IUserReducer;
    navigation: StackNavigation;
}

export type UserRankPropsType = {
    user: IUser;
    index: number;
    navigation: StackNavigation;
    token: string;
}

export type InfoUserRankPropsType = {
    user: IUser;
    index: number;
}

export type StatisticPropsType = {
    token: string;
    statistic: IStatistic;
    dispatch: Dispatch;
}

export type ActionCategoryPropsType = {
    dispatch: Dispatch;
    token: string;
}

export type ShowCategoriesPropsType = {
    dispatch: Dispatch;
    user: IUserInfo;
}

export type InputPropsType = {
    value: string;
    label: string;
    onChange: (value: string) => void;
}

export type AuthPropsType = {
    dispatch: Dispatch;
    navigation: StackNavigation;
    token: string;
    setIsAuthLogin: (isAuthData: boolean) => void;
}

export type ChangeUserPropsType = {
    changeAuth: () => void;
    text: string;
}

export type MenuPlayPropsType = {
    navigation: StackNavigation;
    user: IUserInfo;
}

export type StatisticsGamePropsType = {
    seconds: number; 
    minutes: number; 
    setSeconds: (seconds: number) => void, 
    setMinutes: (minutes: number) => void, 
    numberQuestion: number;
    questions: number;
}

export type TimePropsType = {
    seconds: number; 
    minutes: number; 
    setSeconds: (seconds: number) => void, 
    setMinutes: (minutes: number) => void, 
}

export type AmountQuestionsStatisticPropsType = {
    numberQuestion: number;
    questions: number;
}