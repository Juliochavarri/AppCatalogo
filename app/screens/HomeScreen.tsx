import { View, Text } from 'react-native'
import { Card } from '../components/Card'
import { Search } from '../components/Search'

export const HomeScreen = () => {
  return (
    <>
    <Search />
    <Card
      title='Plátano'
      price={2.5}
    />
    </>
  )
}
