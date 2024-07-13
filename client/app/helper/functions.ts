import { CategoriesTypes } from "../types/key.type"

export const addMarkers = (category: CategoriesTypes): any[] => {

    if(category === 'Basketball') {
        return [1, 2, 3]
    }

    return [1]

}