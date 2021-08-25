import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../Components/Form/Input'
import { useForm } from 'react-hook-form'

export default function signIn() {
  const { register, handleSubmit, formState } = useForm()

  const { errors } = formState

  function handleSignIn() {

  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">

      <Flex 
        as="form" w="100%" maxW={360}
        bg="gray.800" p="8" borderRadius={8} flexDir="column" 
      >
        <Stack>
          <Input 
            name="email"
            type="email"
            label="E-mail" 
            {...register("email")}
            />
          <Input 
            name="password"
            type="password"
            label="Senha" 
            {...register("password")}
            />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" >Entrar</Button>
      </Flex>

    </Flex>
  )
}
