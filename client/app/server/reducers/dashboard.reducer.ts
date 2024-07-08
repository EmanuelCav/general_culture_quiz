import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IDashboardReducer } from '../../interface/Dashboard'

const initialState: IDashboardReducer = {
    dashboards: [],
    dashboard: {}
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        
    }
})

export const { } = dashboardSlice.actions

export default dashboardSlice.reducer