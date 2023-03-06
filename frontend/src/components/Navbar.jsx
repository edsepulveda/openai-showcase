import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Links } from '../constants/navLinks'
import { DropdownMenu } from './DropdownMenu'

export const Navbar = () => {
  return (
    <>
      <Stack direction='row' spacing={4} p={6}>
        {Links.map((item) => (
          <Box key={item.id}>
            <Popover trigger='hover' placement='bottom-start'>
              <PopoverTrigger>
                <ChakraLink
                  p={2}
                  fontSize='md'
                  fontWeight={600}
                  textTransform='uppercase'
                  _hover={{ textDecoration: 'none', color: 'blue.500' }}
                >
                  {item.name}
                </ChakraLink>
              </PopoverTrigger>
              {item.children && (
                <PopoverContent
                  border={0}
                  boxShadow='md'
                  bg='white'
                  p={4}
                  rounded='md'
                  minW='sm'
                >
                  <Stack>
                    {item.children.map((child) => (
                      <DropdownMenu key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </>
  )
}
