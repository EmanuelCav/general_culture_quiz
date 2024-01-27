import { Text, View } from 'react-native'

import { playStyles } from '../../styles/play.styles'

import ButtonOptions from './components/buttonOptions'

import { AmountOptionsPropsType } from '../../types/props.types'

import { IOptionUser } from '../../interface/User'

const AmountOptions = ({ amountOptions, setOptionsUser }: AmountOptionsPropsType) => {

    const selectAmountOptions = (e: any, number: number) => {
        setOptionsUser((optionData: IOptionUser) => ({
            ...optionData, amountOptions: number
        }))
    }

    return (
        <View style={playStyles.containerAmountOptions}>
            <Text style={playStyles.titleOption}>Selecciona la cantidad de opciones</Text>
            <ButtonOptions text='2' func={(e) => selectAmountOptions(e, 2)} />
            <ButtonOptions text='4' func={(e) => selectAmountOptions(e, 4)} />
            <ButtonOptions text='6' func={(e) => selectAmountOptions(e, 6)} />
            <ButtonOptions text='8' func={(e) => selectAmountOptions(e, 8)} />
        </View>
    )
}

export default AmountOptions