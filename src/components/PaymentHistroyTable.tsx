import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PaymentDetails } from "../hooks/useGetMemberDetailsById";

interface PyamentHistoryTableProps {
  paymentDetails: PaymentDetails[];
}

const PaymentHistroyTable = ({ paymentDetails }: PyamentHistoryTableProps) => {
  const tableResponsiveSize = { sm: "sm", md: "sm", lg: "sm", xl: "sm" };
  return (
    <TableContainer>
      <Table size={tableResponsiveSize}>
        <Thead backgroundColor="#FFECB0">
          <Tr fontSize={{ sm: "0.3rem", md: "3rem" }}>
            <Th color="#000">Package Type</Th>
            <Th color="#000" display={{ base: "none", xl: "table-cell" }}>
              Payment Time
            </Th>
            <Th color="#000" display={{ base: "none", xl: "table-cell" }}>
              Payment Date
            </Th>
            <Th color="#000" display={{ base: "none", xl: "table-cell" }}>
              Validity
            </Th>
            <Th color="#000" display={{ base: "none", xl: "table-cell" }}>
              Expire Date
            </Th>
          </Tr>
        </Thead>
        <Tbody color="#000" borderBottomColor="#F1B900">
          {paymentDetails.map((payment, index) => (
            <Tr key={index}>
              <Td>{payment.packageType}</Td>
              <Td display={{ base: "none", xl: "table-cell" }}>
                {payment.paymentTime}
              </Td>
              <Td display={{ base: "none", xl: "table-cell" }}>
                {payment.paymentDate}
              </Td>
              <Td display={{ base: "none", xl: "table-cell" }}>
                {payment.validity==true?"yes":"no"}
              </Td>
              <Td display={{ base: "none", xl: "table-cell" }}>
                {payment.expirayDate}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PaymentHistroyTable;
