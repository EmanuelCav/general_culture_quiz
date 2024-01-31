import { IStatistic } from "./User";

export interface IGameReducer {
    games: any[];
    game: any;
}

export interface IGame {
    _id: string;
    questions: any[];
    corrects: number;
    user: string;
    categories: IStatistic[];
    createdAt: string;
    updatedAt: string;
}

export interface ICateogory {
    _id: string;
    category: string;
    icon: string;
    colorActive: string;
    colorInactive: string;
    createdAt: string;
    updatedAt: string;
}