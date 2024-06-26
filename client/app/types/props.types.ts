import { SetStateAction } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Dispatch } from "@reduxjs/toolkit";

import { ICountry, ICountryRank, IOptionUser, IStatistic, IUser, IUserInfo, IUserReducer } from "../interface/User";
import { IGame, IQuestion } from "../interface/Game";
import { HelpType, RankingDateType, RankingTextType } from "./key.type";

type RouteTypes = {
    Home: undefined;
    Play: undefined;
    Categories: {
        isPlay: boolean;
    };
    Options: undefined;
    Playing: {
        allQuestions: IQuestion[];
        isConnection: boolean;
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

export type PlayingPropsType = {
    navigation: StackNavigation;
    route: RouteParamPlaying;
}

export type ButtonAcceptPropsType = {
    func: () => void;
    text: string;
    isCategory: boolean;
}

export type ButtonMenuPropsType = {
    func: () => void;
    text: string;
    isConnection: boolean;
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
    user: IUserReducer | null;
    dispatch: Dispatch;
    isConnection: boolean;
    setIsChangeView: (isChangeView: boolean) => void;
    isChangeView: boolean;
}

export type UserStatisticsPropsType = {
    games: IGame[];
    user: IUser;
}

export type CountryRankingPropsType = {
    userLoggedIn: IUser;
    countries: ICountryRank[];
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
    userLoggedIn: IUser;
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
    isConnection: boolean;
    setIsChangeView: (isChangeView: boolean) => void;
    isChangeView: boolean;
}

export type StatisticsGamePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    setTotalSeconds: (totalSeconds: number) => void;
    totalSeconds: number;
    numberQuestion: number;
    questions: number;
    realSeconds: number;
    realMinutes: number;
    isCorrect: boolean;
    isIncorrect: boolean;
    isFinish: boolean;
    isPreFinish: boolean;
    helps: number;
    isHelped: boolean;
    changeHelp: (type: HelpType) => void;
    isGameError: boolean;
}

export type TimePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    setTotalSeconds: (totalSeconds: number) => void;
    totalSeconds: number;
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
    points: number;
    changeHelp: (type: HelpType) => void;
    isAdd: boolean;
    isConnection: boolean;
}

export type OptionsPropsTypes = {
    options: string[];
    amountOptions: number;
    nextQuestion: (value: string) => void;
    isHelped: boolean;
    optionsHelped: string[];
}

export type StatisticsFinishPropsType = {
    seconds: number;
    minutes: number;
    questions: number;
    corrects: number;
    points: number;
}

export type ActionsFinishPropsType = {
    areErrors: boolean;
    showErrors: () => void;
    continueHome: () => void;
}

export type OptionPropsTypes = {
    option: string;
    amountOptions: number;
    nextQuestion: (value: string) => void;
    disabled: boolean;
}

export type PositionPropsType = {
    ranking: IUser[] | ICountryRank[];
    user: IUserInfo;
    changeIcon: () => void;
    isUser: boolean;
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

export type MainStatisticsPropsType = {
    user: IUser;
    games: IGame[];
}

export type CountryInfoPropsType = {
    index: number;
    country: ICountryRank;
}

export type CountryRankPropsType = {
    index: number;
    country: ICountryRank;
    userLoggedIn: IUser;
}

export type HelpPropsType = {
    helps: number;
    isAnswered: boolean;
    changeHelp: (type: HelpType) => void;
}

export type LabelsPropsType = {
    changeCountry: () => void;
    user: IUserInfo;
}

export type LabelPropsType = {
    func: () => void;
    label: string;
    text: string;
}

export type CountryScreenPropsType = {
    countries: ICountry[];
    changeCountry: () => void;
    user: IUserInfo;
    updateCountry: (id: string) => void;
}

export type ViewCountryPropsType = {
    country: ICountry;
    user: IUserInfo;
    updateCountry: (id: string) => void;
}

export type MainInfoUserPropsType = {
    isGuest: boolean;
    user: IUser;
}
