import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page) => void;
}

//quantidade de páginas que ficará ao lado da página selecionada (currentPage)
const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  //para saber qual é a última página é só pegar o número total de registros e dividir pela quantidade de registros existentes
  //a lógica é simples. Exemplo: exitem 100 registros e você quer dividi-los em grupos de 10. Quantos grupos vão ser formados?
  //100 / 10 = 10
  //como existe a possibilidade de sair um número quebrado é necessário fazer o arredondamento utilizando o Math.floor()
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} />
            { currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" textAlign="center" width="8" >...</Text>
            ) }
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}

        <PaginationItem number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
          { (currentPage + 1 + siblingsCount) < lastPage && (
            <Text color="gray.300" textAlign="center" width="8" >...</Text>
          ) }
          <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
