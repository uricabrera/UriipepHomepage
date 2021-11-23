import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSistemasDelSol from '../public/images/works/sistemasdelsol.png'
import thumbMusicEventsMendoza from '../public/images/works/musiceventsmendoza_eyecatch.png'
import thumbUriStore from '../public/images/works/uristore_01.png'
import thumbNikkeiCravings from '../public/images/works/nikkeicravings_eyecatch.png'
import thumbCraftBeer from '../public/images/works/craftbeer_01.png'
import thumbNasaProject from "../public/images/works/nasamissioncontrol.png"
import thumbBackend from "../public/images/works/backend_eyecatch.jpg"
import thumbWeatherInfo from '../public/images/works/weatherinfo_eyecatch.png'
import thumbUriBook from "../public/images/works/uribook_01.png"


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sistemas-del-sol" title="Sistemas Del Sol" thumbnail={thumbSistemasDelSol}>
            A responsive website made in React which is a project for a pharmaceutical distribution company, currently in development!
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="music-events-mendoza"
            title="Music Events Mendoza"
            thumbnail={thumbMusicEventsMendoza}
          >
            A web app made in Next.js and strapi to search for local music events in Mendoza!
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
              id="uribook"
              title="Uribook"
              thumbnail={thumbUriBook}
          >
            A web app similar to Jupyter Book, but for Javascript and React!
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="uri-store"
            title="URI_STORE"
            thumbnail={thumbUriStore}
          >
            An E-Commerce clothing app made with Next.js and Shopify
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="nikkei-cravings" thumbnail={thumbNikkeiCravings} title="Nikkei Cravings">
            An E-Commerce web app for a nikkei sushi brand
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="craftbeer" thumbnail={thumbCraftBeer} title="Craftbeer">
            A website made for a beer delivery company!
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="nasa-project"
              thumbnail={thumbNasaProject}
              title="NASA Project"
          >
            A Full-Stack Nasa Project made with React and Node.js for mission control
          </WorkGridItem>
        </Section>
      </SimpleGrid>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Backend Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="task-management-api" thumbnail={thumbBackend} title="Uri Task Management API">
            A small Backend API made with Nest.js
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="courses-bootcamp-api" thumbnail={thumbBackend} title="Courses Bootcamp API">
            A small Backend API made with Node.js, Express and Mongoose
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="weatherinfo" thumbnail={thumbWeatherInfo} title="Weather-Info">
            A small javascript web app for checking the weather, along with checking environmental variables related to soil quality and air quality
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
