import { Box, Flex, useBreakpointValue, Spinner, Text, Table, Thead, Tr, Th, Tbody, Td, Checkbox } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { Header } from '../../Components/Header/index'
import { Sidebar } from '../../Components/Sidebar'
import { Pagination } from '../../Components/Pagination'
import { Heading } from '../../Components/Heading/index'

import { ButtonCreate } from '../../Components/Buttons/ButtonCreate'

export default function UsersList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data =  await response.json()

    return data
  })


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8" >
          <Flex justify="space-between" align="center" mb="8" > 
            <Heading>USUÁRIOS</Heading>

            <ButtonCreate href="/users/create" />
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Error</Text>
            </Flex>
          ) : (
            <>
              <Table>
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" >
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de cadastro</Th> }
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]} >
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold" >{user.name}</Text>
                            <Text fontSize="sm" color="gray.300" >{user.email}</Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td>{user.createdAt}</Td>}
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        
          
        </Box>
      </Flex>
    </Box>
  )
}