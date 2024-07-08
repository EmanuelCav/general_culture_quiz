export interface IDashboardReducer {
    dashboards: IDashboard[];
    dashboard: IDashboard;
}

export interface IDashboard {
    id?: number;
    name?: string;
    teams?: ITeam[];
    markers?: number[];
    user?: number;
}

export interface ITeam {
    id: number;
    name: string;
    points: number;
}
