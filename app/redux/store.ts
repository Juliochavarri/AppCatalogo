import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from './reducers/index'

const persistConfig = {
    key: 'root',
    debug: true,
    storage: AsyncStorage,
    whitelist: ['favorites']
}

export const store = createStore (
    persistReducer(
        persistConfig,
        rootReducer,
    )
)

export const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
})