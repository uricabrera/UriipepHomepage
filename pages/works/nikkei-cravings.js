import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Nikkei Cravings">
    <Container>
      <Title>
        Nikkei Cravings <Badge>2021</Badge>
      </Title>
      <P>
        Nikkei Cravings is an E-Commerce web app for nikkei and traditional japanese food!
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS, SCSS</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/pepitoex123/Nikkei_Cravings">
            Nikkei Cravings <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      <WorkImage src="/images/works/nikkeicravings_eyecatch.png" alt="Nikkei Cravings" />
      <WorkImage src="/images/works/nikkeicravingsgif.gif" alt="Nikkei Cravings" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/nikkeicravings_01.png" alt="Nikkei Cravings" />
        <WorkImage src="/images/works/nikkeicravings_02.png" alt="Nikkei Cravings" />
      </SimpleGrid>
      <WorkImage src="/images/works/nikkeicravings_03.png" alt="Nikkei Cravings" />
      <WorkImage src="/images/works/nikkeicravings_04.png" alt="Nikkei Cravings" />
      <WorkImage src="/images/works/nikkeicravings_05.png" alt="Nikkei Cravings" />
    </Container>
  </Layout>
)

export default Work
