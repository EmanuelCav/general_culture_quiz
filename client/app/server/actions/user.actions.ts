import { createAsyncThunk } from '@reduxjs/toolkit';

export const statisticAction = createAsyncThunk('users/profile', async (_, { dispatch }) => {

    try {


    } catch (error) {
        console.log(error);
    }

})