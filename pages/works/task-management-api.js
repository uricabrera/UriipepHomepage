import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
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
  <Layout title="Task Management API">
    <Container>
      <Title>
        Task Management API <Badge>2021</Badge>
      </Title>
      <P>
        Task Management API
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nest.js, TypeORM</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/Uri-Task-Management">
            Task Management API
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
