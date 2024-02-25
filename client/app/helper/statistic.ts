import { ICountryRank, IStatistic, IUser, IUserInfo } from "../interface/User";

export const amountQuestions = (statistics: IStatistic[]): number => {

    let amountQuestions: number = 0

    for (let i = 0; i < statistics.length; i++) {
        amountQuestions += statistics[i].questions
    }

    return amountQuestions

}

export const amountCorrects = (statistics: IStatistic[]): number => {

    let amountCorrects: number = 0

    for (let i = 0; i < statistics.length; i++) {
        amountCorrects += statistics[i].corrects
    }

    return amountCorrects

}

export const rankingUser = (ranking: IUser[] | any[], user: IUserInfo): string => {

    const userRank = ranking.find((u) => u._id === user.user?._id)

    if (!userRank) {
        return "Usted no se encuentra aquí"
    }

    const posicion = ranking.findIndex(u => u._id === user.user?._id)

    return `Usted se encuentra ${posicion + 1}°`

}

export const rankingCountry = (ranking: ICountryRank[] | any[], user: IUserInfo): string => {

    const countryRank = ranking.find((u) => u._id === user.user?.country?.name)

    if (!countryRank) {
        return "Su país no se encuentra aquí"
    }

    const posicion = ranking.findIndex(u => u._id === user.user?.country?.name)

    return `Su país se encuentra ${posicion + 1}°`

}