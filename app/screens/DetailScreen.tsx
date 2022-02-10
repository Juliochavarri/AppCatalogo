import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { AspectRatio, Image } from 'native-base'

export const DetailScreen = ({route}) => {
    useEffect(() => {
        console.log(route?.params)
    }, [])

    const {
        brand,
        category,
        description,
        name,
        url,
        images,
        price
    } = route?.params
    const [imageProduct, setImageProduct] = useState(url)

    
    return (
        <>
            <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:20,padding:8}}>{name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{maxWidth:'25%',alignItems:'center',justifyContent:'center'}}>
                    {images?.split(',').map((image,i)=>(
                        <TouchableOpacity
                            key={i}
                            onPress={()=>setImageProduct(image)}
                        >
                            <AspectRatio w='100%' ratio={16 / 16}>
                                <Image
                                alt={image}
                                source={{uri:image}}
                                />
                            </AspectRatio> 
                        </TouchableOpacity>
                    ))}
                </View>
                <AspectRatio w='80%' ratio={16 / 16}>
                    <Image
                    alt={name}
                    source={{uri:imageProduct}}
                    />
                </AspectRatio>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:24,marginLeft:120}}>{'S/'+price}</Text>
            </View>
            <View style={{width:'75%',alignSelf:'center',padding:10,marginTop:30}}>
                <Text style={{fontSize:18}}>{description}</Text>
            </View>
        </>
    )
}
