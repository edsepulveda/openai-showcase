import { Box, Text, Link, Flex } from '@chakra-ui/react'
import { AiFillThunderbolt } from 'react-icons/ai'

export const Banner = () => {
  return (
    <>
      <Box bg='gray.800' as='section' p={2}>
        <Flex justify='center' textAlign='center' gap={2} align='center'>
          <AiFillThunderbolt size={15} color='yellow' />
          <Text color='white' fontWeight={500}>
            Powered by{' '}
            <Link
              fontSize='sm'
              rel='noreferrer'
              href='https://openai.com/blog/openai-api'
              target='_blank'
              sx={{ fontWeight: 700 }}
              _hover={{ color: 'blue.500' }}
            >
              OpenAI
            </Link>
          </Text>
        </Flex>
      </Box>
    </>
  )
}
