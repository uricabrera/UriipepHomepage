import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container,Center,Image } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Uri's homepage" />
        <meta name="author" content="Uriel Cabrera" />
        <meta name="author" content="My Portfolio" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Uriel Cabrera" />
        <meta name="twitter:creator" content="@Uriel Cabrera" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Uriel Cabrera's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Uriel Cabrera - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
          <Box w="100%">
              <Center>
                  <Image src="./images/duck.png" alt="Duck Image" width={100} height={100} />
              </Center>
          </Box>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
