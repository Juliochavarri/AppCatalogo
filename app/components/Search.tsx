import { Box, Input } from 'native-base'

export const Search = () => {
  return (
    <Box marginY={2} alignItems='center'>
        <Input backgroundColor={'muted.50'} mx='3' placeholder='Buscar' w='75%' maxWidth='300px' />
    </Box>
  )
}
