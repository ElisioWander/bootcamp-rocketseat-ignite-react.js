import { Button, Icon } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'

export function ButtonCreate() {
  return (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="pink"
      leftIcon={ <Icon as={RiAddLine} fontSize="20" /> }
      _hover={{
        cursor: 'pointer'
      }}
    >
      Criar Novo
    </Button>
  )
}