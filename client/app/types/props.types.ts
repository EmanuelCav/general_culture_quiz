import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { IDashboard, IDashboardGenerator } from "../interface/Dashboard";

type RouteTypes = {
    Home: undefined;
    Configuration: undefined;
    History: undefined;
    Generate: undefined;
    Annotator: undefined;
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
}

export type TimePropsType = {
    hours: number;
    minutes: number;
    seconds: number;
    handleRestartTime: () => void;
    handleRunTime: () => void;
    isStarted: boolean;
}