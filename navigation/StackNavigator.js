import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    );
}