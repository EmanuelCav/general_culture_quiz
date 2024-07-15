import { CategoriesTypes } from "../types/key.type";

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
    category?: string;
    seconds?: number;
    minutes?: number;
    hours?: number;
}

export interface ITeam {
    name: string;
    points: IPoint[];
    sets: number[];
}

export interface IPoint {
    team: number;
    point: number;
    player: string;
}

export interface IDashboardGenerator {
    icon: string;
    name: CategoriesTypes;
}

export interface IUpdateTeams {
    team1: string;
    team2: string;
}

export interface IUpdateTitle {
    name: string;
}