import { Table } from '@chakra-ui/react'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'


export function UsersTable() {
  return (
    <Table colorScheme="whiteAlpha" >
      <TableHead />

      <TableBody name="Elisio Wander" email="elisio741@hotmail.com" date="02 de Abirl, 2021" />
    </Table>
  )
}