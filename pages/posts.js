import { Container, Heading, SimpleGrid,Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'



const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Box>
        Will upload soon!
      </Box>

    </Container>
  </Layout>
)

export default Posts
