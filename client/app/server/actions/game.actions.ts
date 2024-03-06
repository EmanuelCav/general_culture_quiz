import { createAsyncThunk } from "@reduxjs/toolkit";

import allQuestions from '../../../assets/questions.json'

import * as gameApi from '../api/game.api';
import * as gameReducer from '../reducers/game.reducer';

import { GameActionPropsType } from "../../types/action.type";

import { generateGame } from "../../helper/guest";

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

        dispatch(gameReducer.showGame(generateGame(allQuestions)))

        gameData.navigation.navigate('Playing', {
            allQuestions,
            isConnection: gameData.isConnection
        })


    } catch (error) {
        console.log(error);
    }

})