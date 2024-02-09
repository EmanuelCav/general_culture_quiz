import { IStatistic } from "../interface/User"

export const generateOptions = (options: string[], amountOptions: number): string[] => {

    let arr = []

    const correctOption = Math.floor(Math.random() * amountOptions)

    const shuffledOptions: string[] = shuffle(options).slice(1, amountOptions + 1)

    for (let i = 0; i < amountOptions; i++) {
        if (i === correctOption) {
            arr.push(options[0])
        } else {
            arr.push(shuffledOptions[i])
        }
    }

    return arr

}

export const getStatisticId = (statistics: IStatistic[], category: string): string => {

    const statistic = statistics.find((s) => s.category.category === category)

    return statistic?._id!

}

function shuffle(array: any[]): any[] {

    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;

}
