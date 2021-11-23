import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NASA PROJECT">
    <Container>
      <Title>
        NASA PROJECT <Badge>2021</Badge>
      </Title>
      <P>A mission control dashboard project</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,React.js,Node.js,Express</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/NASA-Project">
            NASA Project{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/nasamissioncontrol.png" alt="NASA MISSION CONTROL" />
    </Container>
  </Layout>
)

export default Work
