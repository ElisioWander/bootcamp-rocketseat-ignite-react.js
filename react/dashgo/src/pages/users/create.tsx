import { Box, Flex, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { Header } from '../../Components/Header/index'
import { Sidebar } from '../../Components/Sidebar/index'
import { Input } from '../../Components/Form/Input'
import { Heading } from '../../Components/Heading/index'

import Link from 'next/link'

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px={["6", "8"]} >
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8" >
          <Heading >Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="6" >
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]} >
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]} >
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacint="4" >
              <Link href="/users" passHref >
                <Button colorScheme="whiteAlpha" >Cancelar</Button>
              </Link>
              <Button colorScheme="pink" >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}