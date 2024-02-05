import { createAsyncThunk } from "@reduxjs/toolkit";

import * as gameApi from '../api/game.api';
import * as gameReducer from '../reducers/game.reducer';

import { GameActionPropsType } from "../../types/action.type";

export const gameAction = createAsyncThunk('games/generate', async (gameData: GameActionPropsType, { dispatch }) => {

    try {

        const gameResponse = await gameApi.gameApi(gameData.token)
        const questionResponse = await gameApi.questionGameApi(gameResponse.data._id, gameData.token)

        dispatch(gameReducer.game(questionResponse.data.game))

        gameData.navigation.navigate('Playing', {
            allQuestions: questionResponse.data.questions
        })

    } catch (error) {
        console.log(error);
    }

})