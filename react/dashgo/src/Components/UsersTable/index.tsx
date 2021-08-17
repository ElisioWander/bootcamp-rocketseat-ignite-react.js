import { Table } from '@chakra-ui/react'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

interface UsersTableProps {
  wideVersion: boolean
}

export function UsersTable({ wideVersion }: UsersTableProps) {
  return (
    <Table colorScheme="whiteAlpha" >
      <TableHead wideVersion={wideVersion} />

      <TableBody 
        name="Elisio Wander"
        email="elisio741@hotmail.com"
        date="02 de Abirl, 2021"
        wideVersion={wideVersion}
        />
    </Table>
  )
}