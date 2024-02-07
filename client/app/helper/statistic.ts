import { IGame } from "../interface/Game";
import { IUser, IUserInfo } from "../interface/User";

export const amountQuestions = (games: IGame[]): number => {

    let amountQuestions: number = 0

    for (let i = 0; i < games.length; i++) {
        amountQuestions += games[i].questions!.length
    }

    return amountQuestions

}

export const amountCorrects = (games: IGame[]): number => {

    let amountCorrects: number = 0

    for (let i = 0; i < games.length; i++) {
        amountCorrects += games[i].corrects!
    }

    return amountCorrects

}

export const rankingUser = (ranking: IUser[], user: IUserInfo): string => {

    const userRank = ranking.find((u) => u._id === user.user?._id)

    if (!userRank) {
        return "Usted no se encuentra aquí"
    }

    const posicion = ranking.findIndex(u => u._id === user.user?._id)

    return `Usted se encuentra ${posicion + 1}°`

}