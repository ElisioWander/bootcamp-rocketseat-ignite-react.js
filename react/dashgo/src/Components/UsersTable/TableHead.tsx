import { Thead, Th, Tr, Checkbox } from '@chakra-ui/react'

export function TableHead() {
  return (
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
  )
}