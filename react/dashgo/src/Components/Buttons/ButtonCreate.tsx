import { Button, Icon } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'

import Link from 'next/link'

type buttonCreateProps = {
  href: string
}

export function ButtonCreate({ href }: buttonCreateProps) {
  return (
    <Link href={href} passHref >
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
    </Link>
  )
}