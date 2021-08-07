import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'

import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Dashgo
        <Text as="span" ml="1" color="pink.500" >.</Text>
      </Text>

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

      <Flex
        align="center"
        ml="auto"
      >
        <HStack 
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.600"
          >
          <Icon as={ RiNotificationLine } fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        
        <Flex align="center" >
          <Box mr="4" textAlign="right" >
            <Text>Elisio Wander</Text>
            <Text color="gray.300" fontSize="small" >
              elisioDev@outlook.com
            </Text>
          </Box>

          <Avatar size="md" name="Elisio Wander" src="https://github.com/ElisioWander.png" />
        </Flex>


      </Flex>
    </Flex>
  )
}