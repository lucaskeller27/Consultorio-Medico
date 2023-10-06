import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='Home'
                component={ScreenA}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                    <MaterialIcons name="home" size={22}/>
                }}
            />
            <Screen
                name='Agendar Consulta'
                component={ScreenB}
                options={{
                    drawerLabel: 'Agendar Consulta',
                    drawerIcon: () => 
                    <Entypo name="add-to-list" size={24} color="black" />
                }}
            />
            <Screen
                name='Consultas Agendadas'
                component={ScreenC}
                options={{
                    drawerLabel: 'Consultas Agendadas',
                    drawerIcon: () => 
                    <AntDesign name="calendar" size={24} color="black" />
                }}
            />
        </Navigator>
    )
}