import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome";
import Registro from "../screens/Registro";
import Busqueda from "../screens/Busqueda";
import ImagenesScreen from "../screens/ImagenesScreen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={Registro} />
            <Tab.Screen name="Busqueda" component={Busqueda} />
            <Tab.Screen name ="Imagenes" component={ImagenesScreen}/>
        </Tab.Navigator>
    )
}


const Stack = createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Bienvenido!" component={MyTabs}/>
        </Stack.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}