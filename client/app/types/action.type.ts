import { IDashboard } from "../interface/Dashboard";
import { StackNavigation } from "./props.types"
import { CategoriesTypes } from "./key.type";

export type CreateDashboardActionPropsType = {
    dashboards: IDashboard[];
    navigation: StackNavigation;
    user: string;
    category: CategoriesTypes;
}

export type DashboardsActionPropsType = {
    dashboards: IDashboard[];
    navigation: StackNavigation;
}

export type GetDashboardActionPropsType = {
    dashboards: IDashboard[];
    navigation: StackNavigation;
    id: string;
}