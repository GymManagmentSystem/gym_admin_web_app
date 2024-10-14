import { Box, Card, CardBody, Heading} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import MemberEditableForm from "../components/MemberEditableForm";
import PaymentHistroyTable from "../components/PaymentHistroyTable";


const MemberDetailsPage = () => {
  const { id } = useParams(); //getting id from the routing parameters
  const mainCardContainerWidth={sm:"100%",md:"90%",lg:"90%",xl:"90%"}
  const headerCardContainerWidth={sm:"100%",md:"90%",lg:"90%",xl:"90%"}
  const headerCardContainerHeight={sm:"70px",md:"70px",lg:"70px",xl:"70px"}

  const personData = {
    firstName: "Nethupama",
    lastName: "Shavinda",
    email: "nethupama1234@gmail.com",
    contactNumber: 772933688,
    dateJoin:"2020-04-22",
    age:24,
    weight:70,
    address:'Kaluthara,Colombo'
  };

  const paymentDetails=[
    {
    planName:"Monthly Plan",
    planDesc:"Activate for One Month",
    validity:"T",
    amount:3000,
    paymentDate:"2024/10/14",
    expDate:"2024/9/14",
    validTime:"1"
  },
  {
    planName:"Monthly Plan",
    planDesc:"Activate for One Month",
    validity:"F",
    amount:3000,
    paymentDate:"2024/8/14",
    expDate:"2024/9/14",
    validTime:"1"
  },
  {
    planName:"Monthly Plan",
    planDesc:"Activate for One Month",
    validity:"F",
    amount:3000,
    paymentDate:"2024/7/14",
    expDate:"2024/8/14",
    validTime:"1"
  }
  ]
  

  const [memberData,setMemerData]=useState(personData);
  const [paymentData,setPaymentData]=useState(paymentDetails)

  useEffect(() => {
    setMemerData(personData)
    setPaymentData(paymentDetails)
  }, []);

 

  return (
    <>
      <Box width="100%" height="100%" display="flex" justifyContent="center" >
        <Card
          variant="elevated"
          backgroundColor="#fff"
          height="auto"
          width={mainCardContainerWidth}
          overflow={{sm:"auto",md:"auto"}}
          sx={
            { 
           '::-webkit-scrollbar':{
                  display:'none'
              }
           }
         }
          >
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Card
              variant="elevated"
              backgroundColor="#000"
              height={headerCardContainerHeight}
              width={headerCardContainerWidth}
              zIndex={1}
              
            >
              <CardBody
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Heading size={{sm:'sm',md:"md"}}>Kasun Perera</Heading>
                  <Box
                    as={CgProfile}
                    height="50px"
                    width="50px"
                    borderRadius="25px"
                    objectFit="cover"
                    backgroundColor="#F1B900"
                  />
                </Box>
                <Heading size={{sm:'xs',md:'sm'}} color="#F1B900">
                  Active
                </Heading>
              </CardBody>
            </Card>
            <Card
              height="auto"
              width="80%"
              backgroundColor="#fff"
              variant="elevated"
            >
              <CardBody width="100%">
                <Heading color="#000" size={{sm:"sm",md:"md"}} mt={4} mb={5}>Member Details</Heading>
                <MemberEditableForm memberDetails={memberData}/>
              </CardBody>
            </Card>
            <Card
                height="auto"
                width="80%"
                backgroundColor="#fff"
                variant="elevated"
                mt={2}
              >
                <CardBody width="100%">
                <Heading color="#000"  mt={2} mb={5} size={{sm:"sm",md:"md"}}>Payment Details</Heading>
                  <PaymentHistroyTable paymentDetails={paymentData}/>
                </CardBody>
              </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default MemberDetailsPage;
