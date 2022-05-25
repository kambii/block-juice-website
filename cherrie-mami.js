import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider,
  Grid,
  SimpleGrid,
  GridItem
} from '@chakra-ui/react'
import { Title, PortfolioImage, Meta } from '../../components/portfolio'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {
  return (
    <Layout title="Cherrie-Mami">
      <Container>
        <Title>
          Cherrie - "Mami" <Badge>2019</Badge>
        </Title>

        <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">
          <PortfolioImage
            src="/images/portfolio/worksCherrieMami.jpeg"
            alt="Cherrie-Mami"
          />
        </Link>

        <P>
          The Somali/Swedish RndB singer Cherrie is one of Swedens most
          prominent artists. It did not take long for her to take over the
          Swedish music game, and ever since, she has taken things to new
          levels. We had a fun time in Malmö creating the visuals for the summer
          tune "Mami".
        </P>

        <Divider my={5}></Divider>

       <Section>
            <Meta>Director, Dop & Edit</Meta>
            <Link href="/about"> Luliya Masfun</Link>
            <ExternalLinkIcon mx="2px" />
        </Section>

        <Divider my={5}></Divider>

        <SimpleGrid columns={[1]} gap={3}>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">
                <PortfolioImage
                  src="/images/portfolio/mami5.png"
                  alt="Cherrie-Mami"
                />
              </Link>
            </GridItem>
          </Section>

          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">

                <PortfolioImage
                  src="/images/portfolio/mami1.png"
                  alt="Cherrie-Mami"
                />
              </Link>
            </GridItem>
          </Section>
          <Section>
          <GridItem>
            <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">
              <PortfolioImage
                src="/images/portfolio/mami4.png"
                alt="Cherrie-Mami"
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
