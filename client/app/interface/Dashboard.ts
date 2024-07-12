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
    category?: string;
}

export interface ITeam {
    name: string;
    points: number;
}

export interface IDashboardGenerator {
    icon: string;
    name: CategoriesTypes;
}
