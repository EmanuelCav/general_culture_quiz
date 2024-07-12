import { createAsyncThunk } from "@reduxjs/toolkit";

import { firestore } from "../../../firebase.config";

import { IDashboard } from "../../interface/Dashboard";
import * as DashboardAction from "../../types/action.type";

import { createDashboard, getDashboard, getDashboards } from "../reducers/dashboard.reducer";

export const createDashboardAction = createAsyncThunk('dashboard/generate', async (dashboardData: DashboardAction.CreateDashboardActionPropsType, { dispatch }) => {

    try {

        const dashboard: IDashboard = {
            id: Date.now().toString(),
            name: `Annotator${dashboardData.dashboards.length + 1}`,
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
        };

        dispatch(createDashboard(dashboard))

        dashboardData.navigation.navigate('Annotator')

    } catch (error) {
        console.log(error);
    }

})

export const dashboardsAction = createAsyncThunk('dashboard/dashboards', async (dashboardData: DashboardAction.DashboardsActionPropsType, { dispatch }) => {

    try {

        dispatch(getDashboards(dashboardData.dashboards))

        dashboardData.navigation.navigate('History')

    } catch (error) {
        console.log(error);
    }

})

export const getDashboardAction = createAsyncThunk('dashboard/get', async (dashboardData: DashboardAction.GetDashboardActionPropsType, { dispatch }) => {

    try {

        const dashboard: IDashboard = dashboardData.dashboards.find(d => d.id === dashboardData.id)!

        dispatch(getDashboard(dashboard))

        dashboardData.navigation.navigate('Annotator')

    } catch (error) {
        console.log(error);
    }

})