import { Request, Response } from 'express';
import fs from 'fs-extra';

import Question from '../models/question';
import Category from '../models/category';
import Game from '../models/game';
import User from '../models/user';
import Image from '../models/image';

import { shuffle } from '../helper/functions';
import { cloud } from '../helper/image/cloud';

import { IQuestion } from '../interface/Question';

import { folder_cloud } from '../config/config';

export const questionsGame = async (req: Request, res: Response): Promise<Response> => {

    const { gid, cid } = req.params

    try {

        const game = await Game.findById(gid)

        if (!game) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        const category = await Category.findById(cid)

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const user = await User.findById(req.user)

        if (!user) {
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
    const { question, answer } = req.body

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
    const { option } = req.body

    try {

        const question = await Question.findByIdAndUpdate(id, {
            $push: {
                options: option
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