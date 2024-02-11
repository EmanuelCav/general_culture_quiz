import { useState } from 'react'
import { Text, View } from 'react-native';

import { IAuthLoginData } from '../../interface/User';
import { AuthPropsType } from '../../types/props.types';

import Input from './components/auth/input';
import ButtonAuth from './components/auth/buttonAuth';

import { homeStyles } from '../../styles/home.styles';

import { authLoginAction, registerUserAction } from '../../server/actions/user.actions';

const Auth = ({ navigation, dispatch, token, setIsAuthLogin, isRegister }: AuthPropsType) => {

    const initialState: IAuthLoginData = {
        nickname: "",
        code: ""
    }

    const [userData, setUserData] = useState<IAuthLoginData>(initialState)

    const { nickname, code } = userData

    const [message, setMessage] = useState<string>("")

    const handleChangeNickname = (value: string) => {
        setUserData({
            ...userData,
            nickname: value
        })
    }

    const handleChangePassword = (value: string) => {
        setUserData({
            ...userData,
            code: value
        })
    }

    const handleSumbit = () => {
        if (isRegister) {
            dispatch(registerUserAction({
                navigation,
                userData,
                token,
                setMessage
            }) as any)
            
            return
        }

        dispatch(authLoginAction({
            navigation,
            userData,
            setMessage
        }) as any)
    }

    const goBack = () => {
        setIsAuthLogin(false)
    }

    return (
        <View style={homeStyles.containerAuth}>
            <View style={homeStyles.containerFormAuth}>
                <Text style={homeStyles.textMessage}>{message.length > 0 && message}</Text>
                <Input label='Nombre de usuario' value={nickname} onChange={handleChangeNickname} maxLength={16} />
                <Input label='Código de entrada' value={code} onChange={handleChangePassword} maxLength={32} />
                <ButtonAuth text='ACEPTAR' func={handleSumbit} />
                <ButtonAuth text='CANCELAR' func={goBack} />
            </View>
        </View>
    )
}

export default Auth