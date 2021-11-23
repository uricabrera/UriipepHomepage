import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
    IoLogoLinkedin
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbSistemasDelSol from '../public/images/links/sistemasdelsol.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Argentina!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Uriel Cabrera
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/myphoto.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi! I'm a 19-year-old full-stack developer based in Argentina with a
          passion for building digital services. I love doing everything
          related to launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, I love
          playing music, creating digital art and playing chess. Currently, I'm working at a pharmaceutical
          private project called{' '}
          <NextLink href="/works/inkdrop">
            <Link>Sistemas Del Sol</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Mendoza, Argentina.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Finished my highschool education at Departamento De Aplicación Docente (DAD)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Finished studying full stack development at Egg Educación and Coderhouse
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a full stack programmer!
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Drawing,{' '}
          <Link href="https://drive.google.com/file/d/1jSlFBXWjXR3AjHpRqZAfAUrGjulic3GA/view?usp=sharing" target="_blank">
            Music
          </Link>
          , {" "}
          <Link href="https://www.chess.com/member/pepitoex123" target="_blank">
            Playing Chess
          </Link>
          , Philosophy, Politics
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/pepitoex123" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @pepitoex123
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/uriel-cabrera-46029a187/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Uriel Cabrera
              </Button>
            </Link>
          </ListItem>
          <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Uriipep#1774
              </Button>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCJ1yPUD2vgxWJCAma5ndFqA"
            title="Uriipep Pep"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <NextLink href="/works/sistemas-del-sol">
            <GridItem
                title="Sistemas Del Sol"
                thumbnail={thumbSistemasDelSol}
            >
              A private project for a pharmaceutical distribution company
            </GridItem>
          </NextLink>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
