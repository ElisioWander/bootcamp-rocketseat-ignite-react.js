import { Tbody, Tr, Td, Checkbox, Box, Text } from '@chakra-ui/react'
import { ButtonTable } from '../Buttons/ButtonTable'

interface TableBodyProps {
  name: string,
  email: string,
  date: string,
  wideVersion: boolean
}

export function TableBody({ name, email, date, wideVersion }: TableBodyProps) {
  return (
    <Tbody>
      <Tr>
        <Td px={["4", "4", "6"]} >
          <Checkbox colorScheme="pink" />
        </Td>
        <Td>
          <Box>
            <Text fontWeight="bold" >{name}</Text>
            <Text fontSize="sm" color="gray.300" >{email}</Text>
          </Box>
        </Td>
        { wideVersion && <Td>{date}</Td>}
        <Td>
          <ButtonTable />
        </Td>
      </Tr>
    </Tbody>
  )
}