import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      alignSelf="center"
      maxW={400}
      ml="6"
      py="4"
      px="8"
      borderRadius="full"
      color="gray.200"
      bg="gray.800"
      position="relative"
    >

      <Input 
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="buscar na plataforma"
        _placeholder={{ 
          color: 'gray.400'
          }}
        color="gray.50"
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}