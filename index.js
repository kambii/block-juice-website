import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Button,
    Link,
    List,
    ListItem
     } from '@chakra-ui/react'
import Section from'../components/section'
import Layout from '../components/layouts/article'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5'


const Page = () => {
  return (
      <Layout>
    <Container>
        <Section delay={0.1}>
      <Box
        borderRadius="lg"
        p={3} 
        mb={6} 
        textAlign="center"
        >
        Hello, we are a production company and music-plattform based in Sweden!
      </Box>
      </Section>

      <Section delay={0.1}>
      <Box align="center" my={4}>
          <NextLink href="/portfolio" scroll={false}>
            <Button rightIcon={ <ChevronRightIcon /> } colorScheme="orange">
              The Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
      <List>
      <ListItem>
            <Link href="https://instagram.com/blockjuice.ent" target="_blank">
              <Button
               fontSize={15}
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoInstagram />}
              >
                @blockjuice.ent
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://youtube.com/blockjuice" target="_blank">
              <Button
                fontSize={15}
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoYoutube />}
              >
                Block Juice
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
    </Layout>
  )
}
export default Page
