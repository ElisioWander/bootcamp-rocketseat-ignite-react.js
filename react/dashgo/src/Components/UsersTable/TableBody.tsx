import { Tbody, Tr, Td, Checkbox, Box, Text } from '@chakra-ui/react'
import { ButtonTable } from '../Buttons/ButtonTable'

interface TableBodyProps {
  name: string,
  email: string,
  date: string
}

export function TableBody({ name, email, date }: TableBodyProps) {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Checkbox colorScheme="pink" />
        </Td>
        <Td>
          <Box>
            <Text fontWeight="bold" >{name}</Text>
            <Text fontSize="sm" color="gray.300" >{email}</Text>
          </Box>
        </Td>
        <Td>{date}</Td>
        <Td>
          <ButtonTable />
        </Td>
      </Tr>
    </Tbody>
  )
}