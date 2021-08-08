import { Box, Flex, Button, Icon, Table, Thead, Tr, Th, Tbody ,Td, Checkbox, Text } from '@chakra-ui/react'
import { Header } from '../../Components/Header/index'
import { Sidebar } from '../../Components/Sidebar'
import { ButtonTable } from '../../Components/Buttons/ButtonTable'
import { Pagination } from '../../Components/Pagination'
import { Heading } from '../../Components/Heading/index'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'
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
        
          <Table colorScheme="whiteAlpha" >
            <Thead>
              <Tr>
                <Th w="8" px="6" color="gray.300" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="0" ></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Elisio Wander</Text>
                    <Text fontSize="sm" color="gray.300" >elisioDev@outlook.com</Text>
                  </Box>
                </Td>
                <Td>02 de Abirl, 2021</Td>
                <Td>
                  <ButtonTable />
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Elisio Wander</Text>
                    <Text fontSize="sm" color="gray.300" >elisioDev@outlook.com</Text>
                  </Box>
                </Td>
                <Td>02 de Abirl, 2021</Td>
                <Td>
                  <ButtonTable />
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Elisio Wander</Text>
                    <Text fontSize="sm" color="gray.300" >elisioDev@outlook.com</Text>
                  </Box>
                </Td>
                <Td>02 de Abirl, 2021</Td>
                <Td>
                  <ButtonTable />
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}