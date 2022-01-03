import { Box, Flex, Heading, Divider, VStack, SimpleGrid, Button, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../Components/Form/Input'
import { Header } from '../../Components/Header/Index'
import { Sidebar } from '../../Components/Sidebar/Index'

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]} >
          <Heading fontSize="lg" fontWeight="normal" >Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8" >
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%" >
              <Input name="name" label="Nome Completo" />
              <Input name="email" type="email" label="elisio741@hotmail.com" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%" >
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password_confirmation" label="Confirme a senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacing="4" >
              <Link href="/users" passHref >
                <Button as="a" colorScheme="whiteAlpha" >Cancelar</Button>
              </Link>
              <Button colorScheme="pink" >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}