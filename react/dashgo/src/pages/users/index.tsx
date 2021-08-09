import { Box, Flex } from '@chakra-ui/react'
import { Header } from '../../Components/Header/index'
import { Sidebar } from '../../Components/Sidebar'
import { Pagination } from '../../Components/Pagination'
import { Heading } from '../../Components/Heading/index'
import { UsersTable } from '../../Components/UsersTable/index'

import { ButtonCreate } from '../../Components/Buttons/ButtonCreate'

export default function Users() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8" >
          <Flex justify="space-between" align="center" mb="8" > 
            <Heading>USUÁRIOS</Heading>

            <ButtonCreate />
          </Flex>
        
          <UsersTable />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}