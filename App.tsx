import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar'
import { LogBox, StyleSheet, Text, View } from 'react-native'
import { NativeBaseProvider } from "native-base"
import { MainNavigator } from './app/navigation/MainStack/MainNavigator'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store,persistor } from "./app/redux/store"

LogBox.ignoreLogs(['NativeBase:'])

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
            <MainNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
