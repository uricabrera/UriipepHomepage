import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Craftbeer">
    <Container>
      <Title>
        Craftbeer <Badge>2021</Badge>
      </Title>
      <P>
        A website for a beer delivery business!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, SCSS, Vanilla Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <span>
            <Link href={"https://github.com/pepitoex123/CraftBeer"}>
                CraftBeer <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos and Gifs</Center>
      </Heading>


      <WorkImage src="/images/works/craftbeer_01.png" alt="Craftbeer" />
      <WorkImage src="/images/works/craftbeer_02.png" alt="Craftbeer" />
      <WorkImage src="/images/works/craftbeer_03.png" alt="Craftbeer" />
      <WorkImage src="/images/works/craftbeer_04.png" alt="Craftbeer" />
    </Container>
  </Layout>
)

export default Work
