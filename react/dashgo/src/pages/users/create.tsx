import { Box, Flex, Heading, Divider, VStack, SimpleGrid, Button, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../Components/Form/Input'
import { Header } from '../../Components/Header/Index'
import { Sidebar } from '../../Components/Sidebar/Index'

import { useForm, SubmitHandler, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  })

  const CreateUserSchema:SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  console.log(errors)

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius="8"
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(CreateUserSchema)}
        >
          <Heading fontSize="lg" fontWeight="normal" >Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8" >
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%" >
              <Input 
                name="name" 
                label="Nome Completo" {...register('name')}
                error={errors.name}
              />
              <Input 
                name="email" 
                type="email" 
                label="elisio741@hotmail.com" {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%" >
              <Input 
                name="password"
                type="password"
                label="Senha" {...register('password')}
                error={errors.password}
              />
              <Input 
                name="password_confirmation" 
                type="password"
                label="Confirme a senha" {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacing="4" >
              <Link href="/users" passHref >
                <Button as="a" colorScheme="whiteAlpha" >Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting} >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}