/* eslint-disable no-sequences */

import {  Table, Title } from '@mantine/core'
import Flovidemean from '../utils/Flovidemean';


const Winetable = () => {
 const {meanClass, medianClass, modeClass}  =  Flovidemean();
 
 
  return (<>
  <Title order={1} style={{ textAlign: 'center' }}>Flavonoids Table</Title>
   
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
          <Table.Td align='center'>FlavonoidsMean</Table.Td>
          <Table.Td align='center' > {meanClass.class1}</Table.Td>
          <Table.Td align='center'>{meanClass.class2}</Table.Td>
          <Table.Td align='center'>{meanClass.class3}</Table.Td>
        </Table.Tr>
        <Table.Tr >
          <Table.Td align='center'>Flavonoids Median</Table.Td>
          <Table.Td align='center'>{medianClass.medianClass1}</Table.Td>
          <Table.Td align='center'>{medianClass.medianClass2}</Table.Td>
          <Table.Td align='center'>{medianClass.medianClass3}</Table.Td>
        </Table.Tr>
        <Table.Tr >
          <Table.Td align='center'>Flavonoids Mode</Table.Td>
          <Table.Td align='center'>{modeClass.modeClass1}</Table.Td>
          <Table.Td align='center'>{modeClass.modeClass2}</Table.Td>
          <Table.Td align='center'>{modeClass.modeClass3}</Table.Td>
        </Table.Tr>
        </Table.Tbody>
  </Table>
  </>
  )
}

export default Winetable