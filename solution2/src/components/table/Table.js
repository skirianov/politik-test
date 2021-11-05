import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react"
import { useSelector } from 'react-redux';

const TableComponent = () => {
  const data = useSelector(state => state.data.value);
  const keys = Object.keys(data.data[0]);

  return (
    <Box>
      <Table variant="simple" size="sm" w="3xl">
        <TableCaption>{data.name}</TableCaption>
        <Thead>
          <Tr>
            {
              keys.map((each, key) => {return <Th key={key} fontSize="xs">{each}</Th>})
            }
          </Tr>
        </Thead>
        <Tbody>
          {
            data.data.map((each, key) => {
              return (
                <Tr key={key}>
                  {keys.map((eachKey, key) => {
                    return (<Td key={key} fontSize="xs">{each[eachKey]}</Td>)
                  })}
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
    </Box>
  )
}

export default TableComponent;
