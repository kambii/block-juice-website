import { Container, Badge, Link, List, NextLink, ListItem, SimpleGrid, GridItem, Divider } from '@chakra-ui/react'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import thumb1Cuz from '../../public/images/portfolio/thumb1Cuz.png'
import { getServerSideProps } from '../../components/chakra'
import Section from '../../components/section'

const Work = () => {
  return (
    <Layout title="1Cuz x Einar - Räkna Mina Dagar">
      <Container>
      <Title>
      1Cuz x Einar - "Räkna Mina Dagar" <Badge>2020</Badge>
        </Title>

        <List ml={4} my={4}>
          <ListItem>
          <Link href="https://www.youtube.com/watch?v=M8veHaAUWiU">
        <PortfolioImage
          src={"/images/portfolio/rakna-mina-dagar1.jpeg"}
          alt="1Cuz x Einar Räkna Mina Dagar"
        />
        </Link>
        </ListItem>
        </List>

         <P>I have to say, we were early on the Einar train. We had our eyes and ears out for this young artist since
             his freestyle videos on instagram and before the debute single "Ducka Popo". 
             1Cuz the established Swedish artist and Einar came togheter and created a song with "sentemental value for both of us".
             Block Juice is behind the production of this music video, check it out below!
        </P>

        <Divider my={5}></Divider>
        
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Director</Meta>
            <Link href="/about"> Luliya Masfun  & Ani Ahmed</Link>
          </ListItem>
          <ListItem>
          <Meta>Dop</Meta>
            David Mikic
          </ListItem>
          <ListItem>
          <Meta>Edit</Meta>
            Luliya Masfun & David Mikic
          </ListItem>
          </List>

          <Divider my={5}></Divider>

        <SimpleGrid columns={[1]} gap={3}>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=M8veHaAUWiU">
                <PortfolioImage
                  src="/images/portfolio/rakna-dagar2.png"
                  alt="1Cuz x Einar"
                />
              </Link>
            </GridItem>
          </Section>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=M8veHaAUWiU">
                <PortfolioImage
                  src="/images/portfolio/rakna-dagar3.png"
                  alt="1Cuz x Einar"
                />
              </Link>
            </GridItem>
          </Section>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=M8veHaAUWiU">
                <PortfolioImage
                  src="/images/portfolio/rakna-dagar4.png"
                  alt="1Cuz x Einar"
                />
              </Link>
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  
)
  }

export default Work
