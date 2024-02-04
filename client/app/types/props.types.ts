import { SetStateAction } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "@reduxjs/toolkit";

import { IOptionUser, IStatistic, IUser, IUserInfo, IUserReducer } from "../interface/User";
import { IGame } from "../interface/Game";

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