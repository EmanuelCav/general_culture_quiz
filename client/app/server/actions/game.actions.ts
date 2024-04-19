import { createAsyncThunk } from "@reduxjs/toolkit";

import allQuestions from '../../../assets/questions.json'

import * as gameApi from '../api/game.api';
import * as gameReducer from '../reducers/game.reducer';

import { GameActionPropsType } from "../../types/action.type";

import { shuffle } from "../../helper/playing";

export const gameAction = createAsyncThunk('games/generate', async (gameData: GameActionPropsType, { dispatch }) => {

    try {

        if (gameData.isConnection) {

            const gameResponse = await gameApi.gameApi(gameData.token)
            const questionResponse = await gameApi.questionGameApi(gameResponse.data._id, gameData.token)

            dispatch(gameReducer.showGame(questionResponse.data.game))

            gameData.navigation.navigate('Playing', {
                allQuestions: questionResponse.data.questions,
                isConnection: gameData.isConnection
            })

            return
        }

        gameData.navigation.navigate('Playing', {
            allQuestions: shuffle(allQuestions.filter((q) => q.image === undefined) as any[]),
            isConnection: gameData.isConnection
        })


    } catch (error) {
        console.log(error);
    }

})