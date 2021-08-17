import { Header } from '../Components/Header/index'
import { Sidebar } from '../Components/Sidebar/index'
import { GraphDashboard } from '../Components/GraphDashboard/index' 

import { Flex } from '@chakra-ui/react'


export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" >
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6" >
        <Sidebar />

        <GraphDashboard />
      </Flex>
    </Flex>
  )
}