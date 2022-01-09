import BottomTabNavigator from "./src/routers/BottomTabNavigator";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return <BottomTabNavigator />
}
