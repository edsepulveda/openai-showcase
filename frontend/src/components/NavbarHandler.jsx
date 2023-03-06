import {
  Box,
  Flex,
  useDisclosure,
  IconButton,
  Text,
  Stack,
  Collapse,
  Icon,
  Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Links } from '../constants/navLinks'
import { Navbar } from './index'
import { HiMenuAlt1, HiOutlineX, HiChevronDown } from 'react-icons/hi'
import Logo from '../assets/OpenAI.png'

export const PrincipalMenuHandler = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        minH='60px'
        bg='white'
        py={{ base: 4 }}
        px={{ base: 6 }}
        borderBottom={1}
        borderStyle='dotted'
        borderColor='gray.200'
        align='center'
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <HiOutlineX size={30} /> : <HiMenuAlt1 size={30} />}
            variant='ghost'
            aria-label='Toggle-Navigation'
          />
        </Flex>
        <Flex justify={{ base: 'center', md: 'start' }} align='center'>
          <Link to='/'>
            <Image w={20} src={Logo} />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <Navbar />
          </Flex>
        </Flex>

      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNavbar />
      </Collapse>
    </Box>
  )
}

export const MobileNavItems = ({ children, name }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={6} onClick={children && onToggle}>
      <Flex
        py={2}
        justifyContent='space-between'
        align='center'
      >
        <Text fontWeight={700}>
          {name}
        </Text>
        {children && (
          <Icon
            as={HiChevronDown}
            transition='all .2s ease-in-out'
            transform={isOpen ? 'rotate(-180deg)' : ''}
            w={7}
            h={7}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          pl={5}
          borderLeft={2}
          borderStyle='groove'
          borderColor='blue.600'
          align='start'
        >
          {children &&
            Links.map((item) =>
              item.children.map((child) => (
                <Link to={child.href} key={child.label}>
                  <Flex gap={5}>
                    <Icon as={child.icon} />
                    <Text fontWeight={600}>{child.label}</Text>
                  </Flex>
                </Link>
              ))
            )}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export const MobileNavbar = () => {
  return (
    <Stack bg='gray.200' p={4} display={{ md: 'none' }}>
      {Links.map((item) => (
        <MobileNavItems key={item.name} {...item} />
      ))}
    </Stack>
  )
}
