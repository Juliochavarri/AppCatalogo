import { useEffect, useMemo, useState } from 'react'
import { ScrollView, ActivityIndicator, SafeAreaView } from 'react-native'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { isCloseToBottom } from '../utils'

export const HomeScreen = () => {

  const [products, setProducts] = useState([])
  const [showedProducts, setShowedProducts] = useState([])
  const [pagination, setPagination] = useState(0)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if(products.length>0 && pagination>=1) setShowedProducts(pre=>[...pre,...products.slice(pagination*5,pagination*5+5)])
  }, [pagination,products])

  const getProducts = async () => {
    setLoading(true)
    const response = await fetch('https://sheet.best/api/sheets/f0c0d0d9-bacd-46d6-951a-8c932cb7c13d')
    const data = await response.json()
    setProducts(data)
    setShowedProducts(data.slice(0,5))
    setLoading(false)
  }

  const filterTextBy = (value: string) => value.toLowerCase().includes(text.toLowerCase())

  const filtereProducts = useMemo(() => {
    return text ? showedProducts.filter(product=>filterTextBy(product.name) || filterTextBy(product.category) || filterTextBy(product.brand))
    : showedProducts
  }, [text,showedProducts])

  return (
    <SafeAreaView style={{flex:1}}>
    <Search text={text} setText={setText} />
    <ScrollView
      style={{alignSelf:'center'}} 
      contentContainerStyle={{alignItems:'center',padding:12}}
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          setPagination(prev=>prev+1)
        }
      }}
      scrollEventThrottle={400}
    >
      {filtereProducts?.map(product=>(
        <Card
          key={product.id}
          {...product}
        />
      ))}
    </ScrollView>
    {loading &&
      <ActivityIndicator color={'#666'} size={48} />
    }
    </SafeAreaView>
  )
}
