import { IGame } from "../interface/Game";

export const amountQuestions = (games: IGame[]): number => {

    let amountQuestions: number = 0

    for (let i = 0; i < games.length; i++) {
        amountQuestions += games[i].questions.length
    }

    return amountQuestions

}

export const amountCorrects = (games: IGame[]): number => {

    let amountCorrects: number = 0

    for (let i = 0; i < games.length; i++) {
        amountCorrects += games[i].corrects
    }

    return amountCorrects

}