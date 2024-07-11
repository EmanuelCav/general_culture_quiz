import { createAsyncThunk } from "@reduxjs/toolkit";

import { firebase } from "../../../firebase.config";

export const createDashboardAction = createAsyncThunk('games/generate', async (_, { dispatch }) => {

    try {

        await firebase.firestore().collection('dashboard').add({
            name: "",
            user: ""
        });

    } catch (error) {
        console.log(error);
    }

})