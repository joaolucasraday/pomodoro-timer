import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { TNavigationScreenProps } from "../AppRoutes";
import { Theme } from "../shared/themes/Theme";
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { MaterialIcons } from '@expo/vector-icons'


export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                <MaterialIcons
                name='settings'
                size={28}
                color={Theme.colors.text}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.titleGroup}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Pomodoro</Text>
                    </View>
                    <View style={styles.stateContainer}>
                        <Text style={styles.stateText}>Vamos nos concentrar?</Text>
                    </View>
                {/*                 <View style={styles.stateContainer}>
                        <Text style={styles.stateText}>Hora de se concentrar</Text>
                    </View> */}
                {/*                 <View style={styles.stateContainer}>
                        <Text style={styles.stateText}>Pausa curta</Text>
                    </View>
                    <View style={styles.stateContainer}>
                        <Text style={styles.stateText}>Pausa longa</Text>
                    </View>
                    <View style={styles.stateContainer}>
                        <Text style={styles.stateText}>Cronômetro em pausa</Text>
                    </View> */}
                              <View style={styles.progressContainer}>
                      <AnimatedCircularProgress
                        size={160}
                        width={7}
                        fill={0}
                        tintColor={Theme.colors.divider}
                        backgroundColor={Theme.colors.primary}
                        rotation={0}
                        children={() => (
                            <Text style={styles.progressText}>
                                25:00
                            </Text>
                        )}
                    />
                </View>
                          </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
                {/*                         <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Pausar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Parar</Text>
                    </TouchableOpacity>
                </View>
                            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>Continuar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Reniciar</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.pomodorosContainer}>
                    <Text style={styles.pomodorosText}>Pomodoros: </Text>
                    <View style={styles.pomodoroIndicatorComplete}/>
                    <View style={styles.pomodoroIndicatorComplete}/>
                    <View style={styles.pomodoroIndicator}/>
                    <View style={styles.pomodoroIndicator}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center'
    },
    container: {
        gap: 36,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    settingsButton: {
        alignSelf: 'flex-end'
    },
    titleGroup: {
        gap: 24
    },
    primaryButton: {
        backgroundColor: Theme.colors.primary,
        padding: 16,
        paddingHorizontal: 24,
        borderRadius: 55,
    },
    primaryButtonText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body
    },
    secondaryButton: {
        borderColor: Theme.colors.primary,
        borderWidth: 2,
        padding: 16,
        paddingHorizontal: 24,
        borderRadius: 55,
    },
    secondaryButtonText: {
        color: Theme.colors.text,
        fontFamily: Theme.fonts.interRegular,
        fontSize: Theme.fontSizes.body
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16
    },
    progressContainer: {
        alignItems: 'center',
    },
    progressText: {
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.title,
        fontFamily: Theme.fonts.interBold
    },
    titleContainer:{
        alignItems: 'center'
    },
    titleText: {
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.title,
        fontFamily: Theme.fonts.interBold
    },
    stateContainer: {
        alignItems: 'center'
    },
    stateText: {
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.body,
        fontFamily: Theme.fonts.interRegular
    },
    pomodorosContainer: {
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    pomodorosText: {
        color: Theme.colors.text,
        fontSize: Theme.fontSizes.body,
        fontFamily: Theme.fonts.interRegular
    },
    pomodoroIndicator: {
        width: 20,
        height: 20,
        borderRadius: 100,
        backgroundColor: Theme.colors.divider
    },
    pomodoroIndicatorComplete: {
        width: 20,
        height: 20,
        borderRadius: 100,
        backgroundColor: Theme.colors.primary
    }
})