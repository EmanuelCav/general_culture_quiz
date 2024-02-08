import { View } from "react-native"

import { homeStyles } from '../../styles/home.styles';

import ChangeUser from "./components/userSettings/changeUser";
import InputMedia from "./components/userSettings/inputMedia";

import { UserSettingsPropsType } from "../../types/props.types";

const UserSettings = ({ setIsAuthLogin, user, changeImage, changeSound }: UserSettingsPropsType) => {

    const changeAuth = () => {
        setIsAuthLogin!(true)
    }

    return (
        <View style={homeStyles.containerUserSettings}>
            <InputMedia text="Imágenes" func={changeImage} user={user} isSound={false} />
            <InputMedia text="Sonidos" func={changeSound} user={user} isSound={true} />
            <ChangeUser text='Registrar usuario' changeAuth={changeAuth} />
            <ChangeUser text='Cambiar de usuario' changeAuth={changeAuth} />
        </View>
    )
}

export default UserSettings