import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IDashboard, IDashboardReducer } from '../../interface/Dashboard'

const initialState: IDashboardReducer = {
    dashboards: [],
    dashboard: {}
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        createDashboard: (state, action: PayloadAction<IDashboard>) => {
            state.dashboards = [...state.dashboards, action.payload],
            state.dashboard = action.payload
        },
        getDashboard: (state, action: PayloadAction<IDashboard>) => {
            state.dashboard = action.payload
        }
    }
})

export const { createDashboard, getDashboard } = dashboardSlice.actions

export default dashboardSlice.reducer