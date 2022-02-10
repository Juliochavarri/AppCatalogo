import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from '../../screens/HomeScreen'
import { FavoritesScreen } from '../../screens/FavoritesScreen'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { DetailScreen } from '../../screens/DetailScreen'

const Drawer = createDrawerNavigator()

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen options={{
                    headerRight:() => (
                        <TouchableOpacity style={{marginRight:24}} onPress={()=>}>
                            <AntDesign name='hearto' color='red' size={24} />
                        </TouchableOpacity>
                    ),
                    drawerIcon: () => <AntDesign name='home' size={20} />
                }} name='Inicio' component={HomeScreen} />
                <Drawer.Screen options={{
                    drawerIcon: () => <AntDesign name='hearto' size={20} />
                }} name='Favoritos' component={FavoritesScreen} />
                <Drawer.Screen options={{title:''}} name='Detalle' component={DetailScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}