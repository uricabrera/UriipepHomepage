import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Music Events Mendoza">
    <Container>
      <Title>
        Music Events Mendoza <Badge>2021-2021</Badge>
      </Title>
      <P>
        Music Events Mendoza is a web app made to help you find the best events all around Mendoza!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Next.js, CSS, Strapi</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/Music-Events-Mendoza-Frontend">
            Music Events Mendoza Frontend{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://github.com/pepitoex123/Music-Events-Mendoza-Backend">
            Music Events Mendoza Backend{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos and Gifs</Center>
      </Heading>


      <WorkImage src="/images/works/musiceventsmendozagif.gif" alt="Music Events Mendoza" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/musiceventsmendoza_01.png" alt="Music Events Mendoza" />
        <WorkImage src="/images/works/musiceventsmendoza_02.png" alt="Music Events Mendoza" />
      </SimpleGrid>
      <WorkImage src="/images/works/musiceventsmendoza_03.png" alt="Music Events Mendoza" />
      <WorkImage src="/images/works/musiceventsmendoza_04.png" alt="Music Events Mendoza" />
      <WorkImage src="/images/works/musiceventsmendoza_05.png" alt="Music Events Mendoza" />
      <WorkImage src="/images/works/musiceventsmendoza_06.png" alt="Music Events Mendoza" />
    </Container>
  </Layout>
)

export default Work
