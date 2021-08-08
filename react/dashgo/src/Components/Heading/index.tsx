import { Heading as HeadingChakra } from '@chakra-ui/react'

interface HeadingProps {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <HeadingChakra size="lg" fontWeight="normal" >{children}</HeadingChakra>
  )
}