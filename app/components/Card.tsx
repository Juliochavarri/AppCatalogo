import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../redux/actions/favorites.actions'

export const Card = ({title,price}) => {

const [isFavorite,setIsFavorite] = useState(false)
const dispatch = useDispatch()

return (
<TouchableOpacity style={{maxWidth:'50%',padding:8}}>
    <Box 
        rounded='lg' overflow='hidden' borderColor='coolGray.200' borderWidth='1'
    >
        <Box>
            <AspectRatio w='100%'>
                <Image
                alt='Image Product'
                source={{
                    uri:'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'
                }}
                />
            </AspectRatio>
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
            position='absolute' bottom='0' px='3' py='1.5'
            >
                <TouchableOpacity
                    onPress={()=>{
                        setIsFavorite(!isFavorite)
                        // dispatch(addFavorite())
                    }}
                >
                    <AntDesign 
                    name={isFavorite?'heart':'hearto'} 
                    size={24} 
                    color='red'
                    />
                </TouchableOpacity>
            </Center>
        </Box>
        <Stack p='4' space={3}>
            <Stack space={2}>
                <Heading size='md' ml='-1'>
                    {title}
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
                    The Silicon Valley
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

