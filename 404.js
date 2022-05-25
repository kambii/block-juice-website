import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Divider my={5}></Divider>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={15} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="orange">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound