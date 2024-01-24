import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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