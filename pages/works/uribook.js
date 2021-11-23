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
    <Layout title="Uribook">
        <Container>
            <Title>
                Uribook <Badge>2021</Badge>
            </Title>
            <P>An app similar to Jupyter Book, but for Javascript and React!</P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web Browsers</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React.js, Typescript</span>
                </ListItem>
                <ListItem>
                    <Meta>Github Repo</Meta>
                    <Link href="https://github.com/pepitoex123/uribook">
                        Uribook{' '}
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>


            <WorkImage src="/images/works/uribookgif.gif" alt="Uribook" />
            <WorkImage src="/images/works/uribook_01.png" alt="Uribook" />
        </Container>
    </Layout>
)

export default Work