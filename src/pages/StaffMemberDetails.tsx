import { Box, Card, CardBody, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import StaffEditableForm from "../components/StaffEditableForm";
import useGetStaffMemberDetailsById from "../hooks/useGetStaffMemberDetailsById";


const StaffMemberDetails = () => {
  const { id } = useParams(); //getting id from the routing parameters
  const memberId=id?parseInt(id.substring(1),10):1
  const {data:memberDetails,error,isLoading}=useGetStaffMemberDetailsById(memberId)
  const mainCardContainerWidth = {
    sm: "100%",
    md: "90%",
    lg: "90%",
    xl: "90%",
  };
  const headerCardContainerWidth = {
    sm: "100%",
    md: "90%",
    lg: "90%",
    xl: "90%",
  };
  const headerCardContainerHeight = {
    sm: "10%",
    md: "15%",
    lg: "13%",
    xl: "12%",
  };


  // if(error){return error}
  // if(isLoading){return isLoading}

  return (
    <>
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <Card
          variant="elevated"
          backgroundColor="#fff"
          height="auto"
          width={mainCardContainerWidth}
          overflow={{ sm: "auto", md: "auto" }}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <CardBody display="flex" flexDirection="column" alignItems="center">
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
                  {memberDetails && (
                    <Heading size={{ sm: "sm", md: "md" }}>{memberDetails.firstName+" "+memberDetails.lastName}</Heading>
                  )}
                  
                  <Box
                    as={CgProfile}
                    height="50px"
                    width="50px"
                    borderRadius="25px"
                    objectFit="cover"
                    backgroundColor="#F1B900"
                  />
                </Box>
                <Heading size={{ sm: "xs", md: "sm" }} color="#F1B900">
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
                {memberDetails && (
                  <StaffEditableForm staffDetails={memberDetails} />
                )}  
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default StaffMemberDetails;
