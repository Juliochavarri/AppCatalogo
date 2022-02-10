import { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { Card } from '../components/Card'

export const FavoritesScreen = () => {
  const allFavorites = useSelector(state => state.favorites.favorites)

  useEffect(() => {
    console.log('Favorites:',allFavorites)
  }, [])
  

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView
        style={{alignSelf:'center'}} 
        contentContainerStyle={{alignItems:'center',padding:12}}
      >
        {allFavorites?.map(favorite=>(
          <Card
            key={favorite.id}
            {...favorite}
            favoriteScreen
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}