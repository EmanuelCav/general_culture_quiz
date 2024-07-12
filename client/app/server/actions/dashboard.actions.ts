import { createAsyncThunk } from "@reduxjs/toolkit";

import { firestore } from "../../../firebase.config";

import * as DashboardAction from "../../types/action.type";

import { createDashboard } from "../reducers/dashboard.reducer";

export const createDashboardAction = createAsyncThunk('games/generate', async (dashboardData: DashboardAction.CreateDashboardActionPropsType, { dispatch }) => {

    try {

        const dashboardCollection = await firestore.collection('dashboard')
            .where('user', '==', dashboardData.user)
            .get();

        const dashboardList = dashboardCollection.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        const dashboard = await firestore.collection('dashboard').add({
            name: `Annotator${dashboardList.length + 1}`,
            user: dashboardData.user,
            teams: [],
            markers: [],
            category: dashboardData.category
        });

        const dashboardDoc = await firestore.collection('dashboard').doc(dashboard.id).get();

        dispatch(createDashboard({ id: dashboardDoc.id, ...dashboardDoc.data() }))

        dashboardData.navigation.navigate('Annotator')

    } catch (error) {
        console.log(error);
    }

})