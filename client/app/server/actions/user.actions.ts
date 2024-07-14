import { createAsyncThunk } from '@reduxjs/toolkit';

import { createUser } from '../reducers/user.reducer';

import { IUser } from '../../interface/User';

export const createUserAction = createAsyncThunk('users/create', async (_, { dispatch }) => {

    try {

        const user: IUser = {
            id: Date.now().toString(),
            name: `Users${Date.now().toString()}`,
            language: "English",
            palletteBackground: '#FF8C00',
            palletteText: '#FFFFFF'
        };

        dispatch(createUser(user))

    } catch (error) {
        console.log(error);
    }

})