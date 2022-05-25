import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { PortfolioGridItem, GridItem } from '../components/grid-item'
import thumbCherrieMami from '../public/images/portfolio/thumbCherrieMami.png'
import thumb1Cuz from '../public/images/portfolio/thumb1Cuz.png'
import thumbMalikDjango from '../public/images/portfolio/thumbMalikDjango.webp'
import thumbRozhDras from '../public/images/portfolio/thumbRozhDras.jpeg'
import thumbRedbull from '../public/images/portfolio/thumbRedbull.jpeg'
import thumbSpicy from '../public/images/portfolio/thumbSpicy.png'
import thumbRickyAbonnenten from '../public/images/portfolio/thumbRickyAbonnenten.jpeg'
import thumbZeSverigeVet from '../public/images/portfolio/thumbZeSverigeVet.jpeg'
import thumbZeTaPlats from '../public/images/portfolio/thumbZeTaPlats.jpeg'
import thumbAdoMord from '../public/images/portfolio/thumbAdoMord.jpg'
import thumbPuma from '../public/images/portfolio/thumbPuma.jpeg'
import thumbIceBunnen from '../public/images/portfolio/thumbIceBunnen.jpeg'
import blockJuiceEnt from '../public/images/portfolio/blockJuiceEnt.png'
import universalMusic from '../public/images/portfolio/universalMusic.png'
import warnerMusic from '../public/images/portfolio/warnerMusic.png'
import topClassMusic from '../public/images/portfolio/topClassMusic.jpeg'
import redBull from '../public/images/portfolio/redBull.png'
import meraki from '../public/images/portfolio/meraki.png'
import teamPlatina from '../public/images/portfolio/teamPlatina.jpg'

const Portfolio = () => (
  <Layout>
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
        Portfolio
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={10}>
        <Section>
          <PortfolioGridItem
            id="cherrie-mami"
            title='Cherrie - "Mami"'
            thumbnail={thumbCherrieMami}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="1cuz-rakna-dagar"
            title='1Cuz ft Einar - "Räkna Mina Dagar"'
            thumbnail={thumb1Cuz}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="malik-django"
            title='Malik Dalasi - "Django"'
            thumbnail={thumbMalikDjango}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="redbull"
            title="Redbull 2020-2022"
            thumbnail={thumbRedbull}
          >
            Block Juice media collaboration with Redbull
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="rozh-dras"
            title='Rozh - "Dras Till Problem"'
            thumbnail={thumbRozhDras}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="spicy"
            title='Jazlin, Bbaby - "Spicy"'
            thumbnail={thumbSpicy}
          >
            Commercial video for Mcdonalds "Spicy nuggets"
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="ricky-abonnenten"
            title='Ricky Rich - "Abonnenten"'
            thumbnail={thumbRickyAbonnenten}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="puma"
            title="She Moves Us, Puma nordic "
            thumbnail={thumbPuma}
          >
            Commercial video for Puma SS22
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="ze-sverige-vet"
            title='ZE - "Sverige Vet"'
            thumbnail={thumbZeSverigeVet}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="ice-bunnen"
            title='Ice Csay - "Bunnen"'
            thumbnail={thumbIceBunnen}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="ado-mord"
            title='Ado - "Mord"'
            thumbnail={thumbAdoMord}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="ze-ta-plats"
            title='ZE - "Ta Plats"'
            thumbnail={thumbZeTaPlats}
          >
            Directed by Luliya Masfun
          </PortfolioGridItem>
        </Section>
        <Section>
          <PortfolioGridItem
            id="see-more"
            title="We have been creating since 2018"
            thumbnail={blockJuiceEnt}
          >
            Click here to see more
          </PortfolioGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h2" fontSize={20} mb={4} align-text="center">
          OUR CLIENTS:
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 3]} gap={10}>
      <Section>
        <GridItem thumbnail={universalMusic} title="" id="universal" />
      </Section>
      <Section>
        <GridItem thumbnail={warnerMusic} title="" id="warnerMusic" />
      </Section>
      <Section>
        <GridItem thumbnail={redBull} title="" id="redbull" />
      </Section>
      <Section>
        <GridItem thumbnail={topClassMusic} title="" id="topClassMusic" />
      </Section>
      <Section>
        <GridItem thumbnail={meraki} title="" id="meraki" />
      </Section>
      <Section>
        <GridItem thumbnail={teamPlatina} title="" id="teamPlatina" />
      </Section>



      </SimpleGrid>

    </Container>
  </Layout>
)

export default Portfolio
