import { Request, Response } from 'express';

import Question from '../models/question';
import Category from '../models/category';
import Game from '../models/game';
import User from '../models/user';

import { shuffle } from '../helper/functions';

import { IQuestion } from '../interface/Question';

export const questionsGame = async (req: Request, res: Response): Promise<Response> => {

    const { gid, cid } = req.params

    try {

        const game = await Game.findById(gid)

        if(!game) {
            return res.status(400).json({ message: "Game does not exists" })
        }
        
        const category = await Category.findById(cid)

        if(!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const user = await User.findById(req.user)

        if(!user) {
            return res.status(400).json({ message: "USER does not exists" })
        }

        const questions = await Question.find({ category: cid })

        const shuffleQuestions: IQuestion[] = shuffle(questions)

        for (let i = 0; i < 5; i++) {

            await Game.findByIdAndUpdate(gid, {
                $push: {
                    questions: shuffleQuestions[i]._id
                }
            }, {
                new: true
            })

        }

        const gameGenerated = await Game.findById(gid)

        if(!gameGenerated) {
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
    const { answer } = req.body

    try {

        const category = await Category.findById(id)

        if(!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const newQuestion = new Question({
            category: id,
            answer
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