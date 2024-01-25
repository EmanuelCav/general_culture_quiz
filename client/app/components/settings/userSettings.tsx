import { View } from "react-native"

import { homeStyles } from '../../styles/home.styles';

import Sounds from "./components/userSettings/sounds";
import Register from "./components/userSettings/register";
import ChangeUser from "./components/userSettings/changeUser";

const UserSettings = () => {
    return (
        <View style={homeStyles.containerUserSettings}>
            <Sounds />
            <Register />
            <ChangeUser />
        </View>
    )
}

export default UserSettings