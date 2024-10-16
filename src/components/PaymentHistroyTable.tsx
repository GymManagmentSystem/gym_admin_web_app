import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

interface PaymentHistory{
    planName:string,
    planDesc:string,
    validity:string,
    amount:number,
    paymentDate:string,
    expDate:string,
    validTime:string
}

interface PyamentHistoryTableProps{
    paymentDetails:PaymentHistory[]
}

const PaymentHistroyTable = ({paymentDetails}:PyamentHistoryTableProps) => {
    const tableResponsiveSize = { sm:"sm",md: "sm", lg:"sm", xl: "sm" };
  return (
  <TableContainer>
    <Table size={tableResponsiveSize}>
        <Thead backgroundColor="#FFECB0" >
            <Tr fontSize={{sm:"0.3rem",md:"3rem"}}>
                <Th color="#000">Plan Id</Th>
                <Th color="#000" display={{base:"none",xl:"table-cell"}}>Plan Desc</Th>
                <Th color="#000" display={{base:"none",xl:"table-cell"}}>Valid Time</Th>
                <Th color="#000" display={{base:"none",xl:"table-cell"}}>Amount</Th>
                <Th color="#000" display={{base:"none",xl:"table-cell"}}>Expire Date</Th>
                <Th color="#000">Payment Date</Th>
                <Th color="#000">Validity</Th>
            </Tr>
        </Thead>
        <Tbody color="#000" borderBottomColor="#F1B900">
            {paymentDetails.map((payment,index)=>(
                <Tr key={index}>
                    <Td>{payment.planName}</Td>
                    <Td display={{base:"none",xl:"table-cell"}}>{payment.planDesc}</Td>
                    <Td display={{base:"none",xl:"table-cell"}}>{payment.validTime}</Td>
                    <Td display={{base:"none",xl:"table-cell"}}>{payment.amount}</Td>
                    <Td display={{base:"none",xl:"table-cell"}}>{payment.expDate}</Td>
                    <Td>{payment.paymentDate}</Td>
                    <Td>{payment.validity}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  </TableContainer>
);
};

export default PaymentHistroyTable;
