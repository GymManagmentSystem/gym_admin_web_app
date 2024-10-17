import { Box, Card, CardBody, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import StaffEditableForm from "../components/StaffEditableForm";


const StaffMemberDetails = () => {
  const { id } = useParams(); //getting id from the routing parameters
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

  const personData = {
    firstName: "Nethupama",
    lastName: "Shavinda",
    email: "nethupama1234@gmail.com",
    contactNumber: 772933688,
    RegisterDate: "2020-04-22",
    age: 24,
    address: "Kaluthara,Colombo",
    position: "Personal Trainer",
    qualifications:"3 years as a senior trainer in Mount Lavania GYM."
  };

  const [memberData, setMemerData] = useState(personData);

  useEffect(() => {
    setMemerData(personData);
  }, []);

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
                  <Heading size={{ sm: "sm", md: "md" }}>Kasun Perera</Heading>
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
                <StaffEditableForm staffDetails={memberData} />
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default StaffMemberDetails;
