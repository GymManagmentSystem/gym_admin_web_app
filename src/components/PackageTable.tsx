import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { PackageDetails } from "../hooks/useGetPackageDetails";


interface PackageTableProps{
    packageList:PackageDetails[]
}

const PackageTable = ({packageList}:PackageTableProps) => {
    const tableResponsiveSize = { sm:"sm", md: "sm", lg: "sm", xl: "sm" };
  return (
     <TableContainer>
          <Table size={tableResponsiveSize}>
            <Thead backgroundColor="#FFECB0">
              <Tr fontSize={{ sm: "0.3rem", md: "3rem" }}>
                <Th color="#000" >
                  packageName
                </Th>
                <Th color="#000" >
                  packageAmount
                </Th>
                <Th color="#000" >
                  packageValidTime
                </Th>
                <Th color="#000" >
                  packageDescription
                </Th>
              </Tr>
            </Thead>
            <Tbody color="#000" borderBottomColor="#F1B900">
              {packageList.map((packageDetail, index) => (
                <Tr key={index}>
                  <Td>{packageDetail.packageName}</Td>
                  <Td >
                    {packageDetail.packageAmount}
                  </Td>
                  <Td >
                    {packageDetail.packageValidTime}
                  </Td>
                  <Td >
                    {packageDetail.packageDescription}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
  )
}

export default PackageTable