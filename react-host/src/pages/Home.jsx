import { Box } from '@chakra-ui/react'

import { Banner } from '../Components/Banners/Banner'
import { HomeContent } from '../Components/HomeContent/HomeContent'
import { Footer } from '../Components/Footer/Footer'
import { cards } from '../db'

function Home() {
  return (
    <Box top="30px" mt={68}>
      <Banner cards={cards} />
      <HomeContent />
      <Footer />
    </Box>
  )
}

export default Home
