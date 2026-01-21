import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"


export const Home = () => {
    const navigation = useNavigation<any>();
    return(
        <View>
            <Text style={{fontFamily: 'InterRegular', fontSize:50}}>Home Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}