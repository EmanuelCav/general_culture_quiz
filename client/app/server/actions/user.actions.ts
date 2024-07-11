import { createAsyncThunk } from '@reduxjs/toolkit';

import { firestore } from "../../../firebase.config";

import { createUser } from '../reducers/user.reducer';

export const createUserAction = createAsyncThunk('users/create', async (_, { dispatch }) => {

    try {

        const usersCollection = await firestore.collection('user').get();

        const usersList = usersCollection.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        const user = await firestore.collection('user').add({
            name: `Users${usersList.length + 1}`,
            isSounds: true,
            language: "English"
        });

        const userDoc = await firestore.collection('user').doc(user.id).get();

        dispatch(createUser({ id: userDoc.id, ...userDoc.data() }))

    } catch (error) {
        console.log(error);
    }

})