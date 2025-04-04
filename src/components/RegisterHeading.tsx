import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/MotionZone.png";
import profileLogo from "../assets/profile.png";
import useAdminNameStore from "../store/useAdminNameStore";

const RegisterHeading = () => {
  return (
    <>
    <HStack
      style={{ justifyContent: "flexStart", backgroundColor: "#000" }}
      p={5}
    >
      <Image src={logo} />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        width={{ md: "20%", lg: "15%", xl: "15%" }}
      >
      </Box>
    </HStack>
  </>
);
  
}

export default RegisterHeading