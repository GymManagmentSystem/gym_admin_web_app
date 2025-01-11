import { Box, Button, Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import MemberEditableForm from "../components/MemberEditableForm";
import useGetMemberDetailsById from "../hooks/useGetMemberDetailsById";

const MemberDetailsPage = () => {
  const { id } = useParams(); //getting id from the routing parameters
  const memberId = id ? parseInt(id.substring(1), 10) : 0;
  console.log("member is",memberId)
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
    sm: "70px",
    md: "70px",
    lg: "70px",
    xl: "70px",
  };

  const responsiveButtonSize = { sm: "md", md: "md", lg: "lg", xl: "lg" };

  const {
    data: singleMemberDetails,
    error,
    isLoading,
  } = useGetMemberDetailsById(memberId);

  const navigate=useNavigate();

  if (isLoading) {
    return <Heading>Loading.......</Heading>;
  }

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
                  {singleMemberDetails?.member && (
                    <Heading size={{ sm: "sm", md: "md" }}>
                      {singleMemberDetails.member.firstName +
                        " " +
                        singleMemberDetails.member.lastName}
                    </Heading>
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
                <Heading
                  color="#000"
                  size={{ sm: "sm", md: "md" }}
                  mt={4}
                  mb={5}
                >
                  Member Details
                </Heading>
                {singleMemberDetails && singleMemberDetails.member && (
                  <MemberEditableForm
                    memberDetails={singleMemberDetails.member}
                  />
                )}
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
                <HStack justifyContent="space-between">
                  <Button
                    variant="solid"
                    color="#fff"
                    borderColor="#F1B900"
                    backgroundColor= "#F1B900"
                    padding={5}
                    size={responsiveButtonSize}
                    _hover={{ backgroundColor: "#FFF", color: "#F1B900" }}
                    onClick={() =>
                      navigate(`/app/paymentHistory/:${memberId}`)
                    }
                  >
                    View Payment History
                  </Button>
                  <Button
                    variant="solid"
                    color="#fff"
                    borderColor="#F1B900"
                    backgroundColor= "#F1B900"
                    padding={5}
                    size={responsiveButtonSize}
                    _hover={{ backgroundColor: "#FFF", color: "#F1B900" }}
                    onClick={() =>
                      navigate(`/app/addPayment/:${memberId}`,{ state: singleMemberDetails?.member })
                    }
                  >
                    Add New Payment
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default MemberDetailsPage;
