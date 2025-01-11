import { Box, Heading, HStack } from "@chakra-ui/react";
import useGetPaymentsDetails from "../hooks/useGetPaymentsDetails";
import PaymentTable from "../components/PaymentTable";
import { useNavigate } from "react-router-dom";

const PaymentsPage = () => {
  const navigate = useNavigate();

  const { data: paymentList, error, isLoading } = useGetPaymentsDetails();
  const onViewButtonPressed = (id: number) => {
    navigate(`/app/members/:${id}`);
  };

  return (
    <>
      <Box
        overflow="auto"
        width="100%"
        height="100%"
        p={5}
        sx={{
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Edge
          },
        }}
      >
        <HStack>
          <Heading color="#000" size={{ sm: "md", md: "lg", xl: "xl" }}>
            Payment Details
          </Heading>
        </HStack>
        <Box mt={10}>
          {paymentList && (
            <PaymentTable
              tableType="current"
              paymentDetails={paymentList}
              onPressViewButton={onViewButtonPressed}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default PaymentsPage;
