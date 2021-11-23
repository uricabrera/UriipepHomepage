import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sistemas Del Sol">
    <Container>
      <Title>
        Sistemas Del Sol <Badge>2021-2021</Badge>
      </Title>
      <P>
        A web application for buying pharmaceutical goods from Sistemas Del Sol
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
            Still In Development <ExternalLinkIcon mx="2px" />
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, SCSS, Material-UI</span>
        </ListItem>
        <ListItem>
          <Meta>Github Repo</Meta>
          <span>
            <Link href={"https://github.com/pepitoex123/sistemasdelsol"}>Click here</Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sistemasdelsol.png" alt="Sistemas Del Sol" />
    </Container>
  </Layout>
)

export default Work
