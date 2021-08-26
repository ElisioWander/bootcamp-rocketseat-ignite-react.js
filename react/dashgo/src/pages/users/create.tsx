import { Box, Flex, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { Header } from '../../Components/Header/index'
import { Sidebar } from '../../Components/Sidebar/index'
import { Input } from '../../Components/Form/Input'
import { Heading } from '../../Components/Heading/index'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import Link from 'next/link'

type CreateUserData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserData = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
})


export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserData)
  })

  const { errors } = formState

  const handleCreateUser:SubmitHandler<CreateUserData> = async (values) => {
    await new Promise(resolve => {
      setTimeout(resolve, 2000)

      console.log(values)
    })
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px={["6", "8"]} >
        <Sidebar />

        <Box as="form" flex="1" borderRadius="8" bg="gray.800" p="8" onSubmit={handleSubmit(handleCreateUser)} >
          <Heading >Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="6" >
            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]} >
              <Input 
                name="name"
                label="Nomecompleto"
                {...register("name")}
                error={errors.name}
              />
              <Input 
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing={["6", "8"]} >
              <Input 
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={errors.password}
              />
              <Input 
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                {...register("password_confirmation")}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacint="4" >
              <Link href="/users" passHref >
                <Button colorScheme="whiteAlpha" >Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                >
                  Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}