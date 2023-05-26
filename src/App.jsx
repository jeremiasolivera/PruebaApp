
import { Box } from '@chakra-ui/react'
import Acordion from './components/Acordion'
import CardProducts from './components/partials/CardProducts'
import NavBar from './components/partials/NavBar'


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <>
    <NavBar/>
    <br/>
    <Box px={30}> 
      <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={30}>
      <CardProducts title={"App Sillon"}/>
      <CardProducts title={"App Card"}/>
      <CardProducts title={"App pe"}/>
      </Box>
      <Acordion/>
      <br /><br />
    </Box>
    </>
  )
}

export default App