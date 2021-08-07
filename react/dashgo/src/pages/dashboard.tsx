import { Header } from '../Components/Header'
import { Sidebar } from '../Components/Sidebar'
import { theme } from '../styles/theme'

import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  }
}

const series = [
  { name: 'series1', data: [120, 800, 15, 1555, 147, 598, 122] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" >
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6" >
        <Sidebar />

        <SimpleGrid minChildWidth={320} flex="1" gap="4" align="flex-start" >
          <Box
            p="8"
            pb="4"
            borderRadius="8"
            bg="gray.800"
          >
            <Text fontSize="lg" mb="4" >Inscritos da semana</Text>
            <Chart  options={options} series={series} type="area" h={160} />
          </Box>
          <Box
            p="8"
            borderRadius="8"
            bg="gray.800"
          >
            <Text fontSize="lg" mb="4" >Inscritos da semana</Text>
            <Chart  options={options} series={series} type="area" h={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}