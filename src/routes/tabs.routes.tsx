import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function TabsRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Screen
                name='Home'
                component={ScreenA}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:({color, size})=>(
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='Agendar Consulta'
                component={ScreenB}
                options={{
                    tabBarLabel: 'Tela B',
                    tabBarIcon:({color, size})=>(
                        <MaterialIcons
                            name="add"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='Consultas Agendadas'
                component={ScreenC}
                options={{
                    tabBarLabel: 'Tela C',
                    tabBarIcon:({color, size})=>(
                        <MaterialIcons
                            name="add"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}