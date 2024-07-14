import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IDashboard, IDashboardReducer, IPoint } from '../../interface/Dashboard'

const initialState: IDashboardReducer = {
    dashboards: [],
    dashboard: {}
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        createDashboard: (state, action: PayloadAction<IDashboard>) => {
            state.dashboards = [...state.dashboards, action.payload]
            state.dashboard = action.payload
        },
        getDashboards: (state, action: PayloadAction<IDashboard[]>) => {
            state.dashboards = action.payload
        },
        getDashboard: (state, action: PayloadAction<IDashboard>) => {
            state.dashboard = action.payload
        },
        removeDashboard: (state, action: PayloadAction<IDashboard>) => {
            state.dashboards = state.dashboards.filter((d) => d.id !== action.payload.id)
            state.dashboard = {}
        },
        updateDashboard: (state, action: PayloadAction<IDashboard>) => {
            state.dashboards = state.dashboards.map((d) => d.id === action.payload.id ? action.payload : d)
            state.dashboard = action.payload
        }
    }
})

export const { createDashboard, getDashboard, getDashboards, removeDashboard, updateDashboard } = dashboardSlice.actions

export default dashboardSlice.reducer