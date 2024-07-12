import { createAsyncThunk } from "@reduxjs/toolkit";

import { firestore } from "../../../firebase.config";

import * as DashboardAction from "../../types/action.type";

import { createDashboard, getDashboard, getDashboards } from "../reducers/dashboard.reducer";

export const createDashboardAction = createAsyncThunk('dashboard/generate', async (dashboardData: DashboardAction.CreateDashboardActionPropsType, { dispatch }) => {

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
            teams: [{
                name: "Team1",
                points: 0
            }, {
                name: "Team2",
                points: 0
            }],
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

export const dashboardsAction = createAsyncThunk('dashboard/dashboards', async (dashboardData: DashboardAction.DashboardsActionPropsType, { dispatch }) => {

    try {

        const dashboardCollection = await firestore.collection('dashboard')
            .where('user', '==', dashboardData.user)
            .get();

        const dashboardList = dashboardCollection.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        dispatch(getDashboards(dashboardList))

        dashboardData.navigation.navigate('History')

    } catch (error) {
        console.log(error);
    }

})

export const getDashboardAction = createAsyncThunk('dashboard/get', async (dashboardData: DashboardAction.GetDashboardActionPropsType, { dispatch }) => {

    try {

        const dashboardDoc = await firestore.collection('dashboard').doc(dashboardData.id).get();

        dispatch(getDashboard({ id: dashboardDoc.id, ...dashboardDoc.data() }))

        dashboardData.navigation.navigate('Annotator')

    } catch (error) {
        console.log(error);
    }

})