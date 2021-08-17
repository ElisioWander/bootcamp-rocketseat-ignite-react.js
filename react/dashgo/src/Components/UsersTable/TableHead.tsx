import { Thead, Th, Tr, Checkbox } from '@chakra-ui/react'

interface TableHeadProps {
  wideVersion: boolean
}

export function TableHead({ wideVersion }: TableHeadProps) {
  return (
    <Thead>
      <Tr>
        <Th w="8" px={["4", "4", "6"]} color="gray.300" >
          <Checkbox colorScheme="pink" />
        </Th>
        <Th>Usuário</Th>
        { wideVersion && <Th>Data de cadastro</Th> }
        <Th w="0" ></Th>
      </Tr>
    </Thead>
  )
}