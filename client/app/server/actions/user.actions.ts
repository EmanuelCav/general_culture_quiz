import { createAsyncThunk } from '@reduxjs/toolkit';

import * as userApi from '../api/user.api';
import * as userReducer from '../reducers/user.reducer';
import * as gameReducer from '../reducers/game.reducer';

import { UsersActionPropsType, ProfileActionPropsType, OptionsActionPropsType } from '../../types/action.type';

export const firstTimeAction = createAsyncThunk('users/firsttime', async (_, { dispatch }) => {

    try {

        const { data } = await userApi.firstTimeApi()

        dispatch(userReducer.auth(data))

    } catch (error) {
        console.log(error);
    }

})

export const loginAction = createAsyncThunk('users/login', async (id: string, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(id)

        dispatch(userReducer.auth(data))

    } catch (error) {
        console.log(error);
    }

})

export const usersRankingAction = createAsyncThunk('users/ranking', async (usersData: UsersActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.usersApi(usersData.token)

        dispatch(userReducer.users(data))

        usersData.navigation.navigate('Ranking')

    } catch (error) {
        console.log(error);
    }

})

export const profileAction = createAsyncThunk('users/profile', async (userData: ProfileActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.userApi(userData.id, userData.token)

        dispatch(userReducer.profile(data.user))
        dispatch(gameReducer.games(data.games))

        userData.navigation.navigate('Statistics')

    } catch (error) {
        console.log(error);
    }

})

export const optionsAction = createAsyncThunk('users/options', async (userData: OptionsActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.optionsApi(userData.optionData, userData.token)

        dispatch(userReducer.user(data))

        userData.navigation.goBack()

    } catch (error) {
        console.log(error);
    }

})