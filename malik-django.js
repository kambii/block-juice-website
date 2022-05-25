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
    <Layout title="malik - Django">
      <Container>
        <Title>
          Malik - "Django" <Badge>2020</Badge>
        </Title>

        <Link href="https://www.youtube.com/watch?v=HUa0ONIN_OI">
          <PortfolioImage
            src="/images/portfolio/thumbMalikDjango.webp"
            alt="Malik - Django"
          />
        </Link>

        <P>
          The Stockholm up and coming rapper Malik Dalasi dropped his first
          single "Slimewalk" on Block Juice plattform. For the "Django"
          music video we walked the streets of Barcelona, Spain. Check it out
          below!
        </P>

        <Divider my={5}></Divider>

        <Section>
          <Meta>Director, Dop & Edit</Meta>
          <Link href="./pages/about"> Luliya Masfun</Link>
          <ExternalLinkIcon mx="2px" />
        </Section>

        <Divider my={5}></Divider>

        <SimpleGrid columns={[1]} gap={3}>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">
                <PortfolioImage
                  src="/images/portfolio/django1.png"
                  alt="Cherrie-Mami"
                />
              </Link>
            </GridItem>
          </Section>

          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">
                <PortfolioImage
                  src="/images/portfolio/django2.png"
                  alt="Bts photo from the shoot in Barcelona"
                />
              </Link>
            </GridItem>
          </Section>
          <Section>
            <GridItem>
              <Link href="https://www.youtube.com/watch?v=rS2y_KQvpFo">
                <PortfolioImage
                  src="/images/portfolio/django3.png"
                  alt="Cherrie-Mami"
                />
              </Link>
            </GridItem>
          </Section>
          <Section>
            <GridItem>
              <PortfolioImage
                src="/images/portfolio/luliya1.png"
                alt="Cherrie-Mami"
              />
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
