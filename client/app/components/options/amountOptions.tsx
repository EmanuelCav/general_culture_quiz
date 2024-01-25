import { Text, View } from 'react-native'

import { playStyles } from '../../styles/play.styles'

import ButtonOptions from './components/buttonOptions'

import { AmountOptionsPropsType } from '../../types/props.types'

const AmountOptions = ({ amountOptions, setOptionsUser }: AmountOptionsPropsType) => {

    const selectAmountOptions = (number: number) => {
        setOptionsUser({
            amountOptions: number
        })
    }

    return (
        <View style={playStyles.containerAmountOptions}>
            <Text style={playStyles.titleOption}>Selecciona la cantidad de opciones</Text>
            <ButtonOptions text='2' func={() => selectAmountOptions(2)} />
            <ButtonOptions text='4' func={() => selectAmountOptions(4)} />
            <ButtonOptions text='6' func={() => selectAmountOptions(6)} />
            <ButtonOptions text='8' func={() => selectAmountOptions(8)} />
        </View>
    )
}

export default AmountOptions