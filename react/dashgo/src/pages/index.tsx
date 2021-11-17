import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="e-mail"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: "gray.900",
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: "gray.900",
              }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
