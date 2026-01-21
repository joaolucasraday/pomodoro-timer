import { View } from 'react-native';
import { Home } from './pages/Home';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export function App() {

  const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold
  });

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.hide()
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Home/>
    </View>
  );
}