import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../redux/actions/favorites.actions'
import { useNavigation } from '@react-navigation/native'
import { add } from 'react-native-reanimated'

export const Card = ({name,price,url,category,brand,images,description,favoriteScreen}) => {

const [isFavorite,setIsFavorite] = useState(false)
const [filteredProducts,setFilteredProducts] = useState([])
const dispatch = useDispatch()
const navigation = useNavigation()

return (
<TouchableOpacity
style={{padding:8,margin:2}}
onPress={()=>navigation.navigate('Detalle',{
    name,price,url,category,brand,images,description
})}
>
    <Box 
        rounded='3xl' overflow='hidden' borderColor='coolGray.300' borderWidth='1'
    >
        <Box>
            <AspectRatio w='100%' ratio={16 / 16}>
                <Image
                alt='Image Product'
                source={{
                    uri:url
                }}
                />
            </AspectRatio>
            {favoriteScreen 
            ? null
            :
            <Center
            bg='#fff6'
            _dark={{
                bg: 'violet.400'
            }}
            _text={{
                color: 'warmGray.400',
                fontWeight: '700',
                fontSize: 'xs'
            }}
            position='absolute' right='1' bottom='0' px='3' py='1.5'
            >
                <TouchableOpacity
                    onPress={()=>{
                        setIsFavorite(!isFavorite)
                        dispatch(addFavorite({name,price,url,category,brand,images,description}))
                    }}
                >
                <AntDesign 
                name={isFavorite?'heart':'hearto'} 
                size={24} 
                color='red'
                />
                </TouchableOpacity>
            </Center>
            }
        </Box>
        <Stack p='4' space={3}>
            <Stack space={2}>
                <Heading size='md' ml='-1'>
                    {name}
                </Heading>
                <Text fontSize='xs'
                    _light={{
                        color: 'violet.500'
                    }}
                    _dark={{
                        color: 'violet.400'
                    }}
                    fontWeight='500' ml='-0.5' mt='-1'
                >
                    {category}
                </Text>
            </Stack>
            <HStack alignItems='center' space={4} justifyContent='space-between'>
                <HStack alignItems='center'>
                    <Text color='coolGray.600'
                        _dark={{
                            color: 'warmGray.200'
                        }}
                        fontWeight='400'
                    >
                        {`S/ ${price}`}
                    </Text>
                </HStack>
            </HStack>
        </Stack>
    </Box>
</TouchableOpacity>
)
}

