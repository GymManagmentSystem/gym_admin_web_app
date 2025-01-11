import { Box, Heading, HStack } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import useGetPaymentHistory from "../hooks/useGetPaymentHistory";
import PaymentTable from "../components/PaymentTable";




const PaymentHistoryPage = () => {

    const { id } = useParams(); //getting id from the routing parameters
      const memberId = id ? parseInt(id.substring(1), 10) : 1;
      const {data:paymentList,error,isLoading}=useGetPaymentHistory(memberId)

  return (
    <>
    <HStack>
        <Heading color="#000" size={{ sm: "md", md: "lg", xl: "xl" }}>
          Payment History Details
        </Heading>
      </HStack>
      {paymentList && (
        <Box mt={10}><PaymentTable paymentDetails={paymentList} tableType="history"/></Box>
      )}  
    </>
  )
}

export default PaymentHistoryPage