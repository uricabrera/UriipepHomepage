import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="URI_STORE">
    <Container>
      <Title>
        URI_STORE <Badge>2021</Badge>
      </Title>
      <P>
        An E-Commerce clothing app
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Typescript, Shopify, PostCSS, TailwindCSS</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/next_store">
            URI_STORE Frontend <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://github.com/pepitoex123/next_store_backend">
            URI_STORE Backend <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos and Gifs</Center>
      </Heading>


      <WorkImage
        src="/images/works/uristoregif.gif"
        alt="URI_STORE"
      />
      <WorkImage src="/images/works/uristore_01.png" alt="URI_STORE" />
      <WorkImage src="/images/works/uristore_02.png" alt="URI_STORE" />
      <WorkImage src="/images/works/uristore_03.png" alt="URI_STORE" />
      <WorkImage src="/images/works/uristore_04.png" alt="URI_STORE" />
      <WorkImage src="/images/works/uristore_05.png" alt="URI_STORE" />
    </Container>
  </Layout>
)

export default Work
