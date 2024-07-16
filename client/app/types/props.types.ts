import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { IDashboard, IDashboardGenerator, IPoint, ITeam } from "../interface/Dashboard";
import { IUser } from "../interface/User";
import { LanguagesTypes } from "./key.type";

type RouteTypes = {
    Home: undefined;
    Configuration: undefined;
    History: undefined;
    Generate: undefined;
    Annotator: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteTypes>;

export type ButtonMenuPropsType = {
    func: () => void;
    text: string;
    icon: string;
}

export type MenuPropsType = {
    navigation: StackNavigation;
    dispatch: any;
    dashboards: IDashboard[];
    user: IUser;
}

export type ItemPropsType = {
    item: any;
    dispatch: any;
    navigation: StackNavigation;
    user: string;
    dashboards: IDashboard[];
}

export type ItemHistoryPropsType = {
    item: IDashboard;
    dispatch: any;
    navigation: StackNavigation;
    dashboards: IDashboard[];
    user: IUser;
}

export type TimePropsType = {
    hours: number;
    minutes: number;
    seconds: number;
    handleRestartTime: () => void;
    handleRunTime: () => void;
    isStarted: boolean;
    user: IUser;
}

export type MarkersPropsType = {
    markers: number[];
    handlePoints: (points: number, index: number) => void;
    showSettings: () => void;
    returnPoints: () => void;
    historyLength: number;
    user: IUser;
}

export type MarkerPropsType = {
    marker: number;
    handlePoints: (points: number, index: number) => void;
    index: number;
    user: IUser;
}

export type AnnotatorScreenPropsType = {
    team: ITeam;
    index: number;
    handlePoints: (points: number, index: number) => void;
    user: IUser;
}

export type SettingsPropsType = {
    showSettings: () => void;
    restart: () => void;
    remove: () => void;
    quit: () => void;
    dashboard: IDashboard;
    dispatch: any;
    user: IUser;
}

export type HeaderScreenPropsType = {
    func: () => void;
    text: string;
    language: LanguagesTypes;
}

export type SettingPropsType = {
    action: () => void;
    text: string;
    icon: string;
    color: string;
    pressedColor: string;
}

export type PallettePropsType = {
    color: string;
    text: string;
    func: () => void;
}

export type LanguagePropsType = {
    languageSelect: () => void;
    user: IUser;
}

export type PallettesPropsType = {
    user: IUser;
    colorSelect: () => void;
    backgroundSelect: () => void;
}

export type ListConfigPropsType = {
    list: string[];
    isColor: boolean;
    func: (action: any) => void;
}

export type TeamsHistoryPropsType = {
    user: IUser;
    teams: ITeam[];
}

export type TeamHistoryPropsType = {
    user: IUser;
    team: ITeam;
}

export type InputPropsType = {
    title: string;
    placeholder: string;
    handleChange: (value: string) => void;
    maxLength: number;
    value: string;
}

export type UpdateSettingsPropsType = {
    dashboard: IDashboard;
    handleUpdate: () => void;
    dispatch: any;
}

export type PointPropsType = {
    dashboard: IDashboard;
    point: IPoint;
}

export type ComebackPropsType = {
    func: () => void;
    language: LanguagesTypes
}