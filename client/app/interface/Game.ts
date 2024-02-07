import { IStatistic } from "./User";

export interface IGameReducer {
    games: IGame[];
    game: IGame;
}

export interface IGame {
    _id?: string;
    questions?: IQuestion[];
    corrects?: number;
    user?: string;
    categories?: IStatistic[];
    createdAt?: string;
    updatedAt?: string;
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

export interface IQuestion {
    _id: string;
    image: IImage;
    question: string;
    options: string[];
    answer: string;
    category: ICateogory;
    isAllOptions: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IImage {
    _id: string;
    image: string;
    imageId: string;
    createdAt: string;
    updatedAt: string;
}