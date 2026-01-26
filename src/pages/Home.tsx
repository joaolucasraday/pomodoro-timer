import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { TNavigationScreenProps } from "../AppRoutes";
import { Theme } from "../shared/themes/Theme";


export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    return(
        <View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
                        <View style={styles.buttonContainer}>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})