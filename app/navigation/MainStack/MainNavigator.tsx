import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from '../../screens/HomeScreen'
import { FavoritesScreen } from '../../screens/FavoritesScreen'

const Drawer = createDrawerNavigator()

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Favrites' component={FavoritesScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}