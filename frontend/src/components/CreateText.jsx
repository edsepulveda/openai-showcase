import { useState } from 'react'
import {
  Badge,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'

export const CreateText = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (prompt) {
      setLoading(true)
      try {
        const resp = await fetch('https://openai-showcase.onrender.com/api/v1/text', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt })
        })
        const data = await resp.json()
        setResponse(data.data)
        setPrompt('')
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    } else {
      alert('Please Provide a Valid Text')
    }
  }

  return (
    <Container maxW='5xl' mt={10}>
      <Stack as='form' onSubmit={handleSubmit}>
        <FormControl isRequired mb={10}>
          <FormLabel fontWeight={600}>
            Ask Anything <Badge colorScheme='red'>Required</Badge>
          </FormLabel>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <FormHelperText fontSize='xs'>
            This is only for showing my react skills, so the IA can response to
            one question, and doesnt follow up, every time you click the button
            is gonna respond something different, use CHATGPT instead.
          </FormHelperText>
        </FormControl>
        {response ? <Text fontSize='md'>{response}</Text> : null}
        <Button
          isLoading={loading}
          loadingText='The IA is Working.. Please Wait'
          colorScheme='telegram'
          type='submit'
        >
          Help Me!
        </Button>
      </Stack>
    </Container>
  )
}
