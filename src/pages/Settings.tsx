import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { Theme } from "../shared/themes/Theme"
import { useNavigation } from "@react-navigation/native"
import { TNavigationScreenProps } from "../AppRoutes";
import { useState } from "react";

export const Settings = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    const [focusPeriod, setFocusPeriod] = useState(25);
    const [shortBreakPeriod, setShortBreakPeriod] = useState(5)
    const [longBreakPeriod, setLongBreakPeriod] = useState(15)
    const [notificationsPeriod, setNotificationsPeriod] = useState(true)

    return(
        <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.closeButton}onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons
                    name="close"
                    size={28}
                    color={Theme.colors.text}/>
                </TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Configurações</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.pausasContainer}>
                            <Text style={styles.titleGroup}>Período de foco</Text>
                            <View style={styles.pausaButtons}>
                                <TouchableOpacity 
                                style={focusPeriod === 15 ? styles.activeButton : styles.button} 
                                onPress={() => setFocusPeriod(15)}>
                                    <Text style={styles.buttonText}>15 min</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={focusPeriod === 25 ? styles.activeButton : styles.button} 
                                onPress={() => setFocusPeriod(25)}>
                                    <Text style={styles.buttonText}>25 min</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={focusPeriod === 35 ? styles.activeButton : styles.button} 
                                onPress={() => setFocusPeriod(35)}>
                                    <Text style={styles.buttonText}>35 min</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.pausasContainer}>
                            <Text style={styles.titleGroup}>Pausa curta</Text>
                            <View style={styles.pausaButtons}>
                                <TouchableOpacity 
                                style={shortBreakPeriod === 3 ? styles.activeButton : styles.button}
                                onPress={() => setShortBreakPeriod(3)}>
                                    <Text style={styles.buttonText}>3 min</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={shortBreakPeriod === 5 ? styles.activeButton : styles.button}
                                onPress={() => setShortBreakPeriod(5)}>
                                    <Text style={styles.buttonText}>5 min</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={shortBreakPeriod === 7 ? styles.activeButton : styles.button}
                                onPress={() => setShortBreakPeriod(7)}>
                                    <Text style={styles.buttonText}>7 min</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.pausasContainer}>
                            <Text style={styles.titleGroup}>Pausa longa</Text>
                            <View style={styles.pausaButtons}>
                                <TouchableOpacity 
                                style={longBreakPeriod === 10 ? styles.activeButton : styles.button}
                                onPress={() => setLongBreakPeriod(10)}>
                                    <Text style={styles.buttonText}>10 min</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={longBreakPeriod === 15 ? styles.activeButton : styles.button}
                                onPress={() => setLongBreakPeriod(15)}>
                                    <Text style={styles.buttonText}>15 min</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={longBreakPeriod === 20 ? styles.activeButton : styles.button}
                                onPress={() => setLongBreakPeriod(20)}>
                                    <Text style={styles.buttonText}>20 min</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.pausasContainer}>
                            <Text style={styles.titleGroup}>Notificações</Text>
                            <View style={styles.pausaButtons}>
                                <TouchableOpacity 
                                style={notificationsPeriod === false ? styles.activeButton : styles.button}
                                onPress={() => setNotificationsPeriod(false)}>
                                    <Text style={styles.buttonText}>Desativado</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={notificationsPeriod === true ? styles.activeButton : styles.button}
                                onPress={() => setNotificationsPeriod(true)}>
                                    <Text style={styles.buttonText}>Ativado</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    closeButton: {
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        paddingBottom: 60
    },
    formContainer: {
        gap: 16,
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 300
    },
    titleText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interBold,
        fontSize: Theme.fontSizes.title,
    },
    pausasContainer:{
        gap: 8,
        width: '100%'
    },
    titleGroup: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.label
    },
    pausaButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: Theme.colors.divider,
        padding: 16,
        paddingHorizontal: 20,
        borderRadius: 55,
    },
    activeButton: {
        backgroundColor: Theme.colors.primary,
        padding: 16,
        paddingHorizontal: 20,
        borderRadius: 55,
    },
    buttonText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body
    },
})