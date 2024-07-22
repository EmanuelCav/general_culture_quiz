import { CategoriesTypes, CategoriesTypesEsp, CategoriesTypesPor } from "../types/key.type";

export interface IDashboardReducer {
    dashboards: IDashboard[];
    dashboard: IDashboard;
}

export interface IDashboard {
    id?: string;
    name?: string;
    teams?: ITeam[];
    markers?: number[];
    user?: string;
    pointsHistory?: IPoint[];
    category?: CategoriesTypes;
    seconds?: number;
    minutes?: number;
    hours?: number;
}

export interface ITeam {
    name: string;
    points: IPoint[];
    sets: number[];
    games: number[];
}

export interface IPoint {
    team: number;
    point: number;
    player: string;
}

export interface IDashboardGenerator {
    icon: string;
    name: CategoriesTypes;
    text: CategoriesTypes;
}

export interface IDashboardGeneratorPor {
    icon: string;
    name: CategoriesTypes;
    text: CategoriesTypesPor;
}

export interface IDashboardGeneratorEsp {
    icon: string;
    name: CategoriesTypes;
    text: CategoriesTypesEsp;
}

export interface IUpdateTeams {
    team1: string;
    team2: string;
}

export interface IUpdateTitle {
    name: string;
}