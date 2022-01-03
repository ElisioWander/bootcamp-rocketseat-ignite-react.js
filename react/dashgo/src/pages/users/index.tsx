import { Text, Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../Components/Header/Index'
import { Pagination } from '../../Components/Pagination/Index'
import { Sidebar } from '../../Components/Sidebar/Index'

export default function UserList() {
  const wideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8" >
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >Usuários</Heading>
            <Link href="/users/create" passHref >
              <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>

          </Flex>

          <Table colorScheme="whiteAlpha" >
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                { wideVersion &&  <Th>Data de cadastro</Th> }
                <Th width="8" ></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} >
                  <Checkbox  colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Elisio Wander</Text>
                    <Text fontSize="sm" color="gray.300" >Elisio741@hotmail.com</Text>
                  </Box>
                </Td>
                { wideVersion && <Td>05 Dezembro, 2021</Td> }
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} >
                  <Checkbox  colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Elisio Wander</Text>
                    <Text fontSize="sm" color="gray.300" >Elisio741@hotmail.com</Text>
                  </Box>
                </Td>
                { wideVersion && <Td>05 Dezembro, 2021</Td> }
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} >
                  <Checkbox  colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Elisio Wander</Text>
                    <Text fontSize="sm" color="gray.300" >Elisio741@hotmail.com</Text>
                  </Box>
                </Td>
                { wideVersion && <Td>05 Dezembro, 2021</Td> }
              </Tr>
            </Tbody>

          </Table>

          <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}