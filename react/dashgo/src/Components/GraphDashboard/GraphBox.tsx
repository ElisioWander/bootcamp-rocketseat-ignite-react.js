import { Box, Text } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

interface GraphBoxProps {
  options: {},
  series: {
    name: string,
    data: number[]
  }[],
  name: string
}

export function GraphBox({ options, series, name }: GraphBoxProps) {
  return (
    <Box
      p={["6", "8"]}
      pb="4"
      borderRadius="8"
      bg="gray.800"
    >
      <Text fontSize="lg" mb="4" >{name}</Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  )
}