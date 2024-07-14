import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { IDashboard, IDashboardGenerator, ITeam } from "../interface/Dashboard";
import { IUser } from "../interface/User";

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
}

export type ItemPropsType = {
    item: IDashboardGenerator;
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
}

export type HeaderScreenPropsType = {
    func: () => void;
    text: string;
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