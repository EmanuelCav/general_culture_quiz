import { IPoint } from "../interface/Dashboard"
import { CategoriesTypes } from "../types/key.type"

export const addMarkers = (category: CategoriesTypes): number[] => {

    if (category === 'Basketball' || category === 'Kickboxing' || category === 'Karate') {
        return [1, 2, 3]
    }

    if (category === 'American Football') {
        return [1, 2, 3, 6]
    }

    if (category === 'Boxing') {
        return [8, 9, 10]
    }

    if (category === 'Cricket') {
        return [1, 4, 6]
    }

    if (category === 'Taekwondo') {
        return [1, 2, 3, 4, 5]
    }

    if (category === 'Rugby') {
        return [2, 3, 5]
    }

    return [1]

}

export const addGames = (category: CategoriesTypes): number[] => {

    if (category === 'Tennis' || category === 'Voleyball' || category === 'Badminton' || category === 'Paddle Tennis') {
        return [0]
    }

    return []

}

export const calculatePoints = (points: IPoint[]) => {

    let sum = 0

    for (let i = 0; i < points.length; i++) {
        sum += points[i].point
    }

    return sum

}