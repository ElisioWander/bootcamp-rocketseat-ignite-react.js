import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center" >
      <Box mr="4" textAlign="right" >
        <Text>Elisio Wander</Text>
        <Text color="gray.300" fontSize="small" >
          elisioDev@outlook.com
        </Text>
      </Box>

      <Avatar size="md" name="Elisio Wander" src="https://github.com/ElisioWander.png" />
    </Flex>
  )
}