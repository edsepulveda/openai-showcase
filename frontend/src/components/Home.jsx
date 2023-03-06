import { useEffect, useState } from 'react'
import { Cards, Header } from './index'
import { Heading, Spinner, Text, Link, SimpleGrid } from '@chakra-ui/react'

const RenderPosts = ({ data, message }) => {
  if (data?.length > 0) {
    return data.map((item) => <Cards key={item._id} {...item} />)
  } else {
    return <Text color='blue.500'>{message}</Text>
  }
}

export const Home = () => {
  const DEV_URL = 'http://localhost:3030/api/v1/post'

  const [getPosts, setGetPosts] = useState(null)
  const [loader, setLoader] = useState(false)

  const getFetchPost = async () => {
    setLoader(true)
    try {
      const resp = await fetch(DEV_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (resp.ok) {
        const res = await resp.json()
        setGetPosts(res.data)
        setLoader(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // Every single time that the state changes, this user effect is gonna act
  useEffect(() => {
    getFetchPost()
  }, [])

  const HREF = 'https://openai.com/product/dall-e-2'

  return (
    <>
      <Header />
      {loader && <Spinner colorScheme='facebook' />}
      <Heading textAlign='center'>
        Images Generated by{' '}
        <Link
          rel='noreferrer'
          href={HREF}
          target='_blank'
          bgGradient='linear(to-l, #159957, #155799)'
          bgClip='text'
        >
          DALLE
        </Link>
      </Heading>
      <SimpleGrid
        p={6}
        spacing={10}
        overflow='hidden'
        columns={{ base: 1, md: 2, lg: 3 }}
        mb='10'
        mt='10'
      >
        <RenderPosts data={getPosts} message='No Posts Found' />
      </SimpleGrid>
    </>
  )
}
