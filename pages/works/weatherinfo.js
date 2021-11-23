import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="WeatherInfo">
    <Container>
      <Title>
        WeatherInfo <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/weatherinfo_eyecatch.png" alt="icon" />
      </Center>
      <P>A web app for checking the temperature, air quality and soil quality of a city!</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,Vanilla Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/WeatherInfo">
            WeatherInfo
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos and Gifs</Center>
      </Heading>


      <WorkImage src="/images/works/weatherinfo_01.png" alt="WeatherInfo" />
      <WorkImage src="/images/works/weatherinfo_02.png" alt="WeatherInfo" />
      <WorkImage src="/images/works/weatherinfo_03.png" alt="WeatherInfo" />
    </Container>
  </Layout>
)

export default Work
