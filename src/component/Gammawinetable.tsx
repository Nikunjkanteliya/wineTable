/* eslint-disable no-sequences */

import {  Table, Title } from '@mantine/core'
import Gamma from '../utils/Gamma';


const Gammawinetable = () => {
 const {gammaMean , gammaMedian ,gammaMode}  =  Gamma();
 
 
  return (<>
  <Title order={1} style={{ textAlign: 'center' }} > Gamma Table</Title>
    <Table striped highlightOnHover withTableBorder withColumnBorders maw={960}    >
    <Table.Thead  >
      <Table.Tr  >
        <Table.Th style={{ textAlign: 'center' }} >Measure</Table.Th>
        <Table.Th style={{ textAlign: 'center' }} >Class 1</Table.Th>
        <Table.Th style={{ textAlign: 'center' }}>Class 2</Table.Th>
        <Table.Th style={{ textAlign: 'center' }}>Class 3</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody > 
        <Table.Tr  >
          <Table.Td align='center'>GammaMean</Table.Td>
          <Table.Td align='center' > {gammaMean.meanClass1Gamma}</Table.Td>
          <Table.Td align='center'>{gammaMean.meanClass2Gamma}</Table.Td>
          <Table.Td align='center'>{gammaMean.meanClass3Gamma}</Table.Td>
        </Table.Tr>
        <Table.Tr >
          <Table.Td align='center'>Gamma Median</Table.Td>
          <Table.Td align='center'>{gammaMedian.medianClass1Gamma}</Table.Td>
          <Table.Td align='center'>{gammaMedian.medianClass2Gamma}</Table.Td>
          <Table.Td align='center'>{gammaMedian.medianClass3Gamma}</Table.Td>
        </Table.Tr>
        <Table.Tr >
          <Table.Td align='center'>Gamma Mode</Table.Td>
          <Table.Td align='center'>{gammaMode.modeClass1Gamma}</Table.Td>
          <Table.Td align='center'>{gammaMode.modeClass2Gamma}</Table.Td>
          <Table.Td align='center'>{gammaMode.modeClass3Gamma}</Table.Td>
        </Table.Tr>
        </Table.Tbody>
  </Table>
  </>
  )
}

export default Gammawinetable