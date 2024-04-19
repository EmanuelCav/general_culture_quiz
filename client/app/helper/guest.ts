import { IUser } from "../interface/User";

import { IGame, IQuestion } from "../interface/Game";

export const guest: IUser = {
    country: {
        flag: "https://res.cloudinary.com/projects-emanuek/image/upload/v1706184369/ninguno_y4m7bi.png",
        name: "Not Specified",
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
        _id: "not_specify"
    },
    nickname: "Guest",
    helps: 3
}

export const generateGame = (allQuestions: IQuestion[]): IGame => {

    const questions: IQuestion[] = allQuestions.slice(0, 10)

    return {
        questions
    }
}