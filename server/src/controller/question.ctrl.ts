import { Request, Response } from 'express';
import fs from 'fs-extra';

import Question from '../models/question';
import Category from '../models/category';
import Statistic from '../models/statistic';
import Game from '../models/game';
import User from '../models/user';
import Image from '../models/image';

import { shuffle } from '../helper/functions';
import { cloud } from '../helper/image/cloud';

import { IQuestion } from '../interface/Question';

import { folder_cloud } from '../config/config';

export const allQuestions = async (req: Request, res: Response): Promise<Response> => {

    try {

        const questions = await Question.find()

        return res.status(200).json(questions)

    } catch (error) {
        throw error
    }

}

export const questionsCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const category = await Category.findById(id)

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const questions = await Question.find({ category: id })

        return res.status(200).json(questions)

    } catch (error) {
        throw error
    }

}

export const questionsGame = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const game = await Game.findById(id)

        if (!game) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        const user = await User.findById(req.user).select("-code")

        if (!user) {
            return res.status(400).json({ message: "USER does not exists" })
        }

        const statistics = await Statistic.find({ user: req.user, isSelect: true })

        let categories = []

        for (let i = 0; i < statistics.length; i++) {
            categories.push(statistics[i].category)
        }

        const questions = await Question.find({ category: categories })

        const shuffleQuestions: IQuestion[] = shuffle(questions)

        for (let i = 0; i < 5; i++) {

            await Game.findByIdAndUpdate(id, {
                $push: {
                    questions: shuffleQuestions[i]._id
                }
            }, {
                new: true
            })

        }

        const gameGenerated = await Game.findById(id)
            .populate({
                path: "questions",
                populate: {
                    path: "category"
                }
            })
            .populate({
                path: "questions",
                populate: {
                    path: "image",
                    select: "image"
                }
            })

        if (!gameGenerated) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        return res.status(200).json({
            game: gameGenerated,
            questions: shuffleQuestions
        })

    } catch (error) {
        throw error
    }

}

export const createQuestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { question, answer, isAllOptions } = req.body

    try {

        const category = await Category.findById(id)

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        let imageSaved

        if (req.file) {
            const result = await cloud.uploader.upload(req.file.path, {
                use_filename: true,
                folder: `${folder_cloud}`
            })

            const newImage = new Image({
                image: result.secure_url,
                imageId: result.public_id
            })

            imageSaved = await newImage.save()

            await fs.unlink(req.file.path)
        }

        const newQuestion = new Question({
            question,
            category: id,
            answer,
            isAllOptions: isAllOptions && true,
            image: imageSaved && imageSaved._id
        })

        const questionSaved = await newQuestion.save()

        return res.status(200).json({
            message: "Question created successfully",
            question: questionSaved
        })

    } catch (error) {
        throw error
    }

}

export const pushOption = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        // const options = ["Grecia", "Uruguay", "Ucrania", "Croacia", "Argentina", "Kazajistán", "Suecia", "Honduras", "Hungría", "Argelia"]
        // const options = ["Monte Everest", "K2", "Kanchenjunga", "Kilimanjaro", "Pico Dufour", "Lhotse I", "Aconcagua", "Mont Blanc", "Teide", "Manaslu"]
        // let options = ["Taj Mahal", "Coliseo Romano", "Alhambra", "Acrópolis de Atenas", "Burj Khalifa", "Basílica de San Pedro", "Torre Eiffel", "Machu Picchu", "Fushimi Inari", "Kremlin"]
        let options = [
            "Grecia",
            "Uruguay",
            "Ucrania",
            "Croacia",
            "Argentina",
            "Kazajistán",
            "Suecia",
            "Honduras",
            "Hungría",
            "Argelia"
        ]

        const question = await Question.findByIdAndUpdate(id, {
            $set: {
                options
            }
        }, {
            new: true
        })

        return res.status(200).json({
            message: "Option added successfully",
            question
        })

    } catch (error) {
        throw error
    }

}

export const removeQuestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const question = await Question.findByIdAndDelete(id)

        if (!question) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        return res.status(200).json({ message: "Question removed successfully" })

    } catch (error) {
        throw error
    }

}

export const updateQuestion = async (req: Request, res: Response): Promise<Response> => {

    const { question, answer, isAllOptions } = req.body
    const { id } = req.params

    try {

        const questionFound = await Question.findById(id)

        if (!questionFound) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        const questionUpdated = await Question.findByIdAndUpdate(id, {
            isAllOptions: isAllOptions ? isAllOptions : questionFound.isAllOptions,
            answer: answer ? answer : questionFound.answer,
            question: question ? question : questionFound.question,
        }, {
            new: true
        })

        return res.status(200).json({
            message: "Question updated successfully",
            question: questionUpdated
        })

    } catch (error) {
        throw error
    }

}