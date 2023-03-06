import {
  Link as ChakraLink,
  Stack,
  Box,
  Flex,
  Text,
  Icon
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

export const DropdownMenu = ({ label, href, subLabel, icon }) => {
  return (
    <ChakraLink
      as={Link}
      to={href}
      role='group'
      display='block'
      p={3}
      rounded='sm'
      _hover={{ bg: 'blue.50' }}
    >
      <Stack direction='row' align='center' spacing={4}>
        <Icon as={icon} />
        <Box>
          <Text
            transition='all .2s ease-in-out'
            _groupHover={{ color: 'blue.400' }}
            fontWeight={600}
          >
            {label}
          </Text>
          <Text fontSize='xs'>{subLabel}</Text>
        </Box>
        <Flex
          transition='all .2s ease-in-out'
          transform='translateX(-10px)'
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify='flex-end'
          align='center'
          flex={1}
        >
          <Icon color='blue.400' w={5} h={5} as={HiOutlineArrowSmRight} />
        </Flex>
      </Stack>
    </ChakraLink>
  )
}
