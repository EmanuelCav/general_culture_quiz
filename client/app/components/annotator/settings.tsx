import { useState } from "react";
import { Pressable, Text, View } from "react-native"

import Setting from "./components/settings";
import UpdateTile from "./components/updateTitle";
import UpdateTeams from "./components/updateTeams";
import PointsHistory from "./components/pointsHistory";

import { SettingsPropsType } from "../../types/props.types";

import { annotatorStyles } from "../../styles/annotator.styles"

const Settings = ({ showSettings, restart, remove, quit, dashboard, dispatch, user }: SettingsPropsType) => {

    const [isUpdateTitle, setIsUpdateTitle] = useState<boolean>(false)
    const [isUpdateTeams, setIsUpdateTeams] = useState<boolean>(false)
    const [isPointsHistory, setIsPointsHistory] = useState<boolean>(false)

    const handleUpdateTitle = () => {
        setIsUpdateTitle(!isUpdateTitle)
    }

    const handleUpdateTeams = () => {
        setIsUpdateTeams(!isUpdateTeams)
    }

    const handlePointsHistory = () => {
        setIsPointsHistory(!isPointsHistory)
    }

    return (
        <View style={annotatorStyles.containerSettings}>
            {
                isUpdateTitle && <UpdateTile handleUpdate={handleUpdateTitle} dashboard={dashboard} dispatch={dispatch} />
            }
            {
                isUpdateTeams && <UpdateTeams handleUpdate={handleUpdateTeams} dashboard={dashboard} dispatch={dispatch} />
            }
            {
                isPointsHistory && <PointsHistory handleUpdate={handlePointsHistory} dashboard={dashboard} dispatch={dispatch} />
            }
            <View style={annotatorStyles.containSettings}>
                <Text style={annotatorStyles.textSettings}>{user.language === 'English' ? "Settings" : user.language === 'Español' ? 'Ajustes' : 'Configurações'}</Text>
                <Setting text={user.language === 'English' ? "Update title" : user.language === 'Español' ? 'Cambiar título' : 'Alterar título'}
                    action={handleUpdateTitle} icon="pencil-box" color="#5555ff" pressedColor="#4444ff" />
                <Setting text={user.language === 'English' ? "Update teams" : user.language === 'Español' ? 'Actualizar equipos' : 'Atualizar equipamentos'}
                    action={handleUpdateTeams} icon="pencil-box-multiple" color="#5555ff" pressedColor="#4444ff" />
                <Setting text={user.language === 'English' ? "Points history" : user.language === 'Español' ? 'Historial de puntos' : 'Histórico de pontos'}
                    action={handlePointsHistory} icon="clock-edit-outline" color="#5555ff" pressedColor="#4444ff" />
                <Setting text={user.language === 'English' ? "Restart" : user.language === 'Español' ? 'Reestablecer' : 'Redefinir'}
                    action={restart} icon="restart" color="#ff5555" pressedColor="#ff4444" />
                <Setting text={user.language === 'English' ? "Remove" : user.language === 'Español' ? 'Eliminar' : 'Eliminar'}
                    action={remove} icon="delete" color="#ff5555" pressedColor="#ff4444" />
                <Setting text={user.language === 'English' ? "Quit" : user.language === 'Español' ? 'Quitar' : 'Remover'}
                    action={quit} icon="keyboard-return" color="#ff5555" pressedColor="#ff4444" />
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                    },
                    annotatorStyles.buttonActionSettings
                ]} onPress={showSettings}>
                    <Text style={annotatorStyles.actionSettings}>
                        {user.language === 'English' ? 'Come back' : user.language === 'Español' ? 'Regresar' : 'Voltar'}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Settings