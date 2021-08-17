import { GraphBox } from "./GraphBox";
import { SimpleGrid, theme } from "@chakra-ui/react";

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime' as const,
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-08-18T00:00:00.000Z',
      '2021-08-19T00:00:00.000Z',
      '2021-08-20T00:00:00.000Z',
      '2021-08-21T00:00:00.000Z',
      '2021-08-22T00:00:00.000Z',
      '2021-08-23T00:00:00.000Z',
      '2021-08-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]

export function GraphDashboard() {
  return (
    <SimpleGrid minChildWidth={320} flex="1" gap="4" align="flex-start" >
      <GraphBox options={options} series={series} name="Inscritos da semana" />
      <GraphBox options={options} series={series} name="Taxa de abertura" />
    </SimpleGrid>
  )
}