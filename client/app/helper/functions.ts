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

export const pointsMarker = (points: number, category: CategoriesTypes, actuallyPoints: number, rivalPoints: number): number => {


    if (category === 'Tennis' || category === 'Paddle Tennis') {
        if (actuallyPoints === 0 || actuallyPoints === 15) {
            return 15
        }

        if (actuallyPoints === 30) {
            return 10
        }

        if (rivalPoints === 40 && actuallyPoints === 40) {
            return Math.pow(5, 10)
        }

        if (actuallyPoints === 40 && rivalPoints === Math.pow(5, 10) + 40) {
            return 0
        }

        if (actuallyPoints === 40 && rivalPoints < 40) {
            return -40
        }

        if (actuallyPoints === Math.pow(5, 10) + 40 && rivalPoints === 40) {
            return -Math.pow(5, 10) - 40
        }

    }

    return points

}

export const isAffectRival = (category: CategoriesTypes, actuallyPoints: number, rivalPoints: number): boolean => {

    if (category === 'Tennis' || category === 'Paddle Tennis') {
        if (actuallyPoints === 40 && rivalPoints < 40) {
            return true
        }

        if (actuallyPoints === 40 && rivalPoints === Math.pow(5, 10) + 40) {
            return true
        }

        if (actuallyPoints === Math.pow(5, 10) + 40 && rivalPoints === 40) {
            return true
        }
    }

    return false

}

export const calculatePointsRival = (category: CategoriesTypes, pointRival: number): number => {

    if (category === 'Tennis' || category === 'Paddle Tennis') {
        if (pointRival === Math.pow(5, 10) + 40) return -Math.pow(5, 10)
        return -pointRival
    }

    return 0

}

export const calculatePoints = (points: IPoint[]) => {

    let sum = 0

    for (let i = 0; i < points.length; i++) {
        sum += points[i].point
    }

    return sum

}
