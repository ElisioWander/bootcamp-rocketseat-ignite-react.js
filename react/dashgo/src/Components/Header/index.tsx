import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'

import { Logo } from '../Header/Logo'
import { NotificationNav } from '../Header/NotificationNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  }) 

  return (
    <Flex
      as="header" w="100%" maxW={1480} h="20" mx="auto"
      mt="4" px="6" align="center"
    >
      { !isWideVersion && (
          <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          mr="2"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        ></IconButton>
      ) }

      <Logo />

      { isWideVersion && 
        <SearchBox />
      }

      <Flex align="center" ml="auto" >
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}