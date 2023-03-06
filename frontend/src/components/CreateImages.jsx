/* eslint-disable multiline-ternary */
import {
  Container,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Image,
  Button,
  Spinner,
  Badge,
  FormHelperText,
  ButtonGroup
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineUpload } from 'react-icons/ai'

export const CreateImages = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }
  const [image, setImage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (form.prompt) {
      try {
        setImage(true)
        const resp = await fetch('http://localhost:3030/api/v1/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: form.prompt })
        })
        const data = await resp.json()
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
      } catch (error) {
        console.log(error)
      } finally {
        setImage(false)
      }
    } else {
      console.log('XDDD')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // If there's a PROMPT and a GENERATED PHOTO THEN DO THE POST REQUEST.
    if (form.prompt && form.photo) {
      setIsLoading(true)
      try {
        const resp = await fetch('http://localhost:3030/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...form })
        })
        const data = await resp.json()
        navigate('/')
        console.log(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    } else {
      console.log(
        'You need to provide a valid Prompt, and have an Image generated'
      )
    }
  }

  return (
    <Container maxW='3xl' mx='auto'>
      <Stack>
        <Heading
          fontWeight='extrabold'
          color='gray.700'
          mt={10}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
        >
          Create Stunning AI Images
        </Heading>
        <Text mt={2} color='gray.500' fontSize='sm' maxW='550px'>
          Generate unique and creative images using OpenAI's DALL-E, a powerful
          machine learning model. Perfect for artwork, advertising, and more.
        </Text>
      </Stack>
      <Box as='form' mt={10} p={8} onSubmit={handleSubmit}>
        <Stack spacing={7}>
          <FormControl isRequired id='name'>
            <FormLabel fontWeight='semibold'>
              Your Name{' '}
              <Badge as='span' rounded='full' p={1.5} colorScheme='red'>
                Required
              </Badge>
            </FormLabel>
            <Input
              name='name'
              value={form.name}
              fontSize='xs'
              focusBorderColor='blue.500'
              onChange={handleChange}
              type='text'
            />
          </FormControl>
          <FormControl id='prompt' isRequired>
            <FormLabel fontWeight='semibold'>
              Describe your Image{' '}
              <Badge as='span' rounded='full' p={1.5} colorScheme='red'>
                Required
              </Badge>
            </FormLabel>
            <Input
              name='prompt'
              fontSize='xs'
              placeholder='A Cat with a Hat'
              focusBorderColor='blue.500'
              value={form.prompt}
              onChange={handleChange}
              type='text'
            />
            <FormHelperText fontSize='xs'>
              Be Precise so the IA can understand you, If don't like the image,
              generate it again
            </FormHelperText>
          </FormControl>
          <Stack
            position='relative'
            p={3}
            w={64}
            h={64}
            justify='center'
            align='center'
          >
            {form.photo ? (
              <>
                <Text>Generated Image</Text>
                <Image
                  loading='lazy'
                  src={form.photo}
                  alt={form.prompt}
                  w='full'
                  h='full'
                />
              </>
            ) : (
              <>
                <Image src='https://via.placeholder.com/150' />
              </>
            )}

            {image && (
              <Spinner
                thickness='4px'
                emptyColor='blue.200'
                color='blue.500'
                size='lg'
                position='absolute'
                zIndex={0}
              />
            )}
          </Stack>
          <ButtonGroup flexDirection={{ base: 'column', lg: 'row' }} gap={5}>
            <Button
              type='button'
              onClick={handleGenerate}
              isLoading={image}
              loadingText='Generating.. Please Wait'
              bg='blue.400'
              color='white'
              _hover={{ bg: 'blue.500' }}
            >
              Generate Image
            </Button>
            <Button
              type='submit'
              disabled={image}
              leftIcon={<AiOutlineUpload />}
              isLoading={isLoading}
              loadingText='Uploading Image.. Please Wait'
              colorScheme='teal'
              variant='outline'
            >
              Upload Image
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Container>
  )
}
