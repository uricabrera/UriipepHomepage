import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio, Heading, Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Courses Bootcamp API">
    <Container>
      <Title>
        Courses Bootcamp API <Badge>2021</Badge>
      </Title>
      <P>
        Courses Bootcamp API, maybe will create its frontend someday
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Express, Mongo.DB, JWT</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/CoursesBootcampsAPI">
            Courses Bootcamp API
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos and Gifs</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
