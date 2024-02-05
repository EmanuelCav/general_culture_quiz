import { View } from "react-native"

import { homeStyles } from '../../styles/home.styles';

import Sounds from "./components/userSettings/sounds";
import ChangeUser from "./components/userSettings/changeUser";

const UserSettings = ({ setIsAuthLogin }: { setIsAuthLogin: (isAuthLogin: boolean) => void }) => {

    const changeAuth = () => {
        setIsAuthLogin!(true)
    }

    return (
        <View style={homeStyles.containerUserSettings}>
            <Sounds />
            <ChangeUser text='Registrar usuario' changeAuth={changeAuth} />
            <ChangeUser text='Cambiar de usuario' changeAuth={changeAuth} />
        </View>
    )
}

export default UserSettings