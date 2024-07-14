import { IPoint } from "../interface/Dashboard"
import { CategoriesTypes } from "../types/key.type"

export const addMarkers = (category: CategoriesTypes): any[] => {

    if (category === 'Basketball') {
        return [1, 2, 3]
    }

    return [1]

}

export const calculatePoints = (points: IPoint[]) => {

    let sum = 0

    for (let i = 0; i < points.length; i++) {
        sum += points[i].point
    }

    return sum

}