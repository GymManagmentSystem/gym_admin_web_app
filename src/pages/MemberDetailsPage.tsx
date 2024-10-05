import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const MemberDetailsPage = () => {
  const { id } = useParams(); //getting id from the routing parameters
  return (
    <>
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <Card
          variant="elevated"
          backgroundColor="#fff"
          height="80%"
          width="90%"
          border="2px solid black"
        >
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="2px solid red"
          >
            <Card
              variant="elevated"
              backgroundColor="#000"
              height="20%"
              width="90%"
              zIndex={1}
            >
              <CardBody
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Heading size="sm">Kasun Perera</Heading>
                  <Box
                    as={CgProfile}
                    height="50px"
                    width="50px"
                    borderRadius="25px"
                    objectFit="cover"
                    backgroundColor="#F1B900"
                  />
                </Box>
                <Heading size="xs" color="#F1B900">
                  Active
                </Heading>
              </CardBody>
            </Card>
            <Card height="70%" width="80%" backgroundColor="#fff" variant="elevated">

            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default MemberDetailsPage;
