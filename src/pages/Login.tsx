import { Box, Grid, GridItem, Image, useToast } from "@chakra-ui/react";
import LoginImage from "../assets/login.png";
import LoginHeader from "../components/LoginHeader";
import LoginCard from "../components/LoginCard";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

interface UserCredentials {
  userName: string;
  password: string;
}

const Login = () => {
  const toast = useToast();
  const loginRequest = useLogin();
  const navigate = useNavigate();

  const handleLogin = (userCredentials: UserCredentials) => {
    loginRequest.mutate(userCredentials, {
      onSuccess: (data) => {
        if ("successMessage" in data) {
          toast({
            title: "Login successful!",
            description: data.successMessage,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "yellow",
          });
          navigate("/app/dashbord");
        }
      },
      onError: (error) => {
        if (error.response && error.response.data) {
          toast({
            title: "Invalid credentials",
            description: error.response.data.error,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "yellow",
          });
        } else {
          toast({
            title: "Internal Server Error",
            description: "Internal Server Error",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "yellow",
          });
        }
      },
    });
  };

  return (
    <>
      <Grid
        templateAreas={`"header "main"`}
        gridTemplateRows={"100px 1fr"}
        gridTemplateColumns={"1fr"}
        height={"100vh"}
      >
        <GridItem
          bg="#F1B900"
          area={"header"}
          position="fixed"
          top="0"
          left="0"
          width="100%"
          zIndex="10"
        >
          <LoginHeader />
        </GridItem>

        <GridItem
          pl="2"
          area={"main"}
          position={"fixed"}
          left="0"
          width="100%"
          padding={"0"}
          paddingTop={"100px"}
        >
          <Image
            src={LoginImage}
            width={"100%"}
            height={"100vh"}
            objectFit={"cover"}
          />
          <Box
            position={"absolute"}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="1"
          >
            <LoginCard onSubmit={handleLogin} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Login;
