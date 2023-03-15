import {
  Card,
  Heading,
  Image,
  CardBody,
  Stack,
  CardFooter,
  Text,
  Button,
  Skeleton
} from '@chakra-ui/react'
import { AiOutlineDownload } from 'react-icons/ai'
import { downloadIMG } from '../utils/Download'

export const Cards = ({ _id, name, prompt, photo, loader }) => {
  return (
    <>
      <Skeleton isLoaded={loader} fadeDuration={2}>
        <Card maxW={{ base: 'sm', lg: 'md' }}>
          <CardBody>
            <Image
              loading='lazy'
              objectFit='cover'
              borderRadius='lg'
              src={photo}
              alt={prompt}
            />
            <Stack mt={5} spacing={3}>
              <Heading color='blue.500' size={{ sm: 'sm', lg: 'md' }}>
                Name: {name}
              </Heading>
              <Text fontSize='sm'>{prompt}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() => downloadIMG(_id, photo)}
              colorScheme='telegram'
              leftIcon={<AiOutlineDownload />}
            >
              Download
            </Button>
          </CardFooter>
        </Card>
      </Skeleton>
    </>
  )
}
