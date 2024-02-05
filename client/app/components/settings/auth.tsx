import { useState } from 'react'
import { View } from 'react-native';

import { IAuthLoginData } from '../../interface/User';
import { AuthPropsType } from '../../types/props.types';

import Input from './components/auth/input';
import ButtonAuth from './components/auth/buttonAuth';

import { homeStyles } from '../../styles/home.styles';

import { authLoginAction } from '../../server/actions/user.actions';

const Auth = ({ navigation, dispatch, token, setIsAuthLogin }: AuthPropsType ) => {

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
        dispatch(authLoginAction({
            navigation,
            userData,
            token
        }) as any)
    }

    const goBack = () => {
        setIsAuthLogin(false)
    }

    return (
        <View style={homeStyles.containerAuth}>
            <Input label='Nombre de usuario' value={nickname} onChange={handleChangeNickname} />    
            <Input label='Código de entrada' value={code} onChange={handleChangePassword} />
            <ButtonAuth text='ACEPTAR' func={handleSumbit} />
            <ButtonAuth text='CANCELAR' func={goBack} />
        </View>
    )
}

export default Auth