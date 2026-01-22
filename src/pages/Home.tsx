import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import { TNavigationScreenProps } from "../AppRoutes";
import { Theme } from "../shared/themes/Theme";


export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    return(
        <View>
            <Text style={{fontFamily: 'InterRegular', fontSize:52, color: Theme.colors.text}}>Home Page</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={{ color: Theme.colors.text}}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}