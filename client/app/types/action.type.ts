import { StackNavigation } from "./props.types"

export type CreateDashboardActionPropsType = {
    navigation: StackNavigation;
    user: string;
    category: string;
}

export type DashboardsActionPropsType = {
    navigation: StackNavigation;
    user: string;
}

export type GetDashboardActionPropsType = {
    navigation: StackNavigation;
    id: string;
}