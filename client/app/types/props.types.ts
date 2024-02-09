import { SetStateAction } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Dispatch } from "@reduxjs/toolkit";

import { IOptionUser, IStatistic, IUser, IUserInfo, IUserReducer } from "../interface/User";
import { IGame } from "../interface/Game";
import { RankingDateType, RankingTextType } from "./key.type";

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

export type RankingTagPropsType = {
    text: RankingTextType;
    rankingText: RankingTextType;
    changeRanking: (valueText: RankingTextType, valueDate: RankingDateType) => void;
    date: RankingDateType;
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

export type RankingTagsPropsType = {
    rankingText: RankingTextType;
    changeRanking: (valueText: RankingTextType, valueDate: RankingDateType) => void;
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
    maxLength: number | undefined;
}

export type AuthPropsType = {
    dispatch: Dispatch;
    navigation: StackNavigation;
    token: string;
    setIsAuthLogin: (isAuthData: boolean) => void;
    isRegister: boolean;
}

export type ChangeUserPropsType = {
    changeAuth: (value: boolean) => void;
    text: string;
    value: boolean;
}

export type MenuPlayPropsType = {
    navigation: StackNavigation;
    user: IUserInfo;
    dispatch: Dispatch;
}

export type StatisticsGamePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void,
    setMinutes: (minutes: number) => void,
    numberQuestion: number;
    questions: number;
    realSeconds: number;
    realMinutes: number;
    isCorrect: boolean;
    isIncorrect: boolean;
    isFinish: boolean;
    isPreFinish: boolean;
}

export type TimePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    realSeconds: number;
    realMinutes: number;
    isCorrect: boolean;
    isIncorrect: boolean;
    isFinish: boolean;
    isPreFinish: boolean;
}

export type AmountQuestionsStatisticPropsType = {
    numberQuestion: number;
    questions: number;
}

export type AnswerPropsType = {
    answer: boolean;
    correctAnswer: string;
    continueGame: () => void;
}

export type FinishPropsType = {
    seconds: number;
    minutes: number;
    corrects: number,
    questions: number;
    showErrors: () => void;
    continueHome: () => void;
    isGameError: boolean;
}

export type OptionsPropsTypes = {
    options: string[]
    amountOptions: number;
    nextQuestion: (value: string) => void;
}

export type StatisticsFinishPropsType = {
    seconds: number;
    minutes: number;
    questions: number;
    corrects: number;
}

export type ActionsFinishPropsType = {
    areErrors: boolean;
    showErrors: () => void;
    continueHome: () => void;
}

export type SectionOptionsPropsTypes = {
    options: string[]
    amountOptions: number;
    nextQuestion: (value: string) => void;
}

export type OptionPropsTypes = {
    option: string;
    amountOptions: number;
    nextQuestion: (value: string) => void;
}

export type PositionPropsType = {
    ranking: IUser[];
    user: IUserInfo;
}

export type UserSettingsPropsType = {
    setIsAuthLogin: (isAuthLogin: boolean) => void;
    user: IUserInfo;
    changeImage: () => void;
    changeSound: () => void;
    authAction: (value: boolean) => void;
}

export type InputMediaPropsType = {
    text: string;
    func: () => void;
    user: IUserInfo;
    isSound: boolean;
}

export type ActionsMediaPropsType = {
    func: () => void;
    user: IUserInfo;
    isSound: boolean;
}