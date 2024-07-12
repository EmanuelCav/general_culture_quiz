import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "@reduxjs/toolkit";

import { IDashboardGenerator } from "../interface/Dashboard";

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
    dispatch: Dispatch;
    isConnection: boolean;
    setIsChangeView: (isChangeView: boolean) => void;
    isChangeView: boolean;
}

export type ItemPropsType = {
    item: IDashboardGenerator;
    dispatch: any;
    navigation: StackNavigation;
    user: string;
}