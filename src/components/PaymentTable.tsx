import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PaymentDetails } from "../hooks/useGetPaymentHistory";

interface PyamentHistoryTableProps {
  paymentDetails: PaymentDetails[];
  tableType: "current" | "history";
  onPressViewButton?: (id: number) => void;
}

const PaymentTable = ({
  paymentDetails,
  tableType,
  onPressViewButton,
}: PyamentHistoryTableProps) => {
  const tableResponsiveSize = { sm: "sm", md: "sm", lg: "sm", xl: "sm" };
  const butonResponsiveSize = { md: "xs", lg: "sm", xl: "md" };

  return (
    <TableContainer>
      <Table size={tableResponsiveSize}>
        <Thead backgroundColor="#FFECB0">
          <Tr fontSize={{ sm: "0.3rem", md: "3rem" }}>
            <Th color="#000">Member Id</Th>
            <Th color="#000">Package Type</Th>
            <Th color="#000">Payment Time</Th>
            <Th color="#000">Payment Date</Th>
            <Th color="#000">Validity</Th>
            <Th color="#000">Expire Date</Th>
            {tableType == "current" && <Th color="#000">Action</Th>}
          </Tr>
        </Thead>
        <Tbody color="#000" borderBottomColor="#F1B900">
          {paymentDetails.map((payment) => (
            <Tr
              key={payment.paymentId}
              color={new Date(payment.expirayDate) < new Date() ? "red" : "fff"}
              // backgroundColor={
              //   new Date(payment.expirayDate) < new Date() ? "#fc5644" : "fff"
              // }
            >
              <Td>{payment.memberId}</Td>
              <Td>{payment.packageType}</Td>
              <Td>{payment.paymentTime}</Td>
              <Td>{payment.paymentDate}</Td>
              <Td>{new Date(payment.expirayDate) < new Date()? "Expired" : "Valid"}</Td>
              <Td>{payment.expirayDate}</Td>
              {tableType == "current" && (
                <Td>
                  <Button
                    variant="solid"
                    textColor="#F1B900"
                    size={butonResponsiveSize}
                    onClick={() =>
                      onPressViewButton?.(
                        payment.memberId ? payment.memberId : 0
                      )
                    }
                    _hover={{ textColor: "#000" }}
                  >
                    View More
                  </Button>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PaymentTable;
