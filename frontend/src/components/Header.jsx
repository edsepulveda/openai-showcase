import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Container maxW='full'>
      <Stack
        align='center'
        spacing={10}
        py={24}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={7}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text as='span'>Empower your Ideas</Text>
            <br />
            <Text>
              With{' '}
              <Text
                as='span'
                bgGradient='linear(to-l, #159957, #155799)'
                bgClip='text'
              >
                OpenAI
              </Text>
            </Text>
          </Heading>
          <Text
            fontSize={{ sm: '2xs', md: 'md', lg: 'larger' }}
            color='gray.700'
          >
            Make your dreams a reality with our advanced AI technology
          </Text>
          <Stack spacing={5} direction={{ base: 'column', md: 'row' }}>
            <Button
              as={RouterLink}
              to='/dalle'
              rounded='md'
              size='lg'
              fontWeight='semibold'
              px={7}
              colorScheme='telegram'
              bg='blue.500'
              _hover={{ bg: 'cyan.700' }}
              textTransform='uppercase'
            >
              Use the api
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify='center'
          align='center'
          position='relative'
          w='full'
        >
          <Box
            position='relative'
            height='300px'
            rounded='2xl'
            boxShadow='2xl'
            width='full'
            overflow='hidden'
          >
            <Image
              loading='lazy'
              fit='cover'
              align='center'
              w='100%'
              h='100%'
              src='https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
