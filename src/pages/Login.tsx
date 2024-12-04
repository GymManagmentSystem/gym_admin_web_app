import { Box, Grid, GridItem, Image } from "@chakra-ui/react"
import LoginImage from "../assets/login.png"
import LoginHeader from "../components/LoginHeader"
import LoginCard from "../components/LoginCard"


const Login = () => {
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
            <LoginCard/>
          </Box>
        </GridItem>
      </Grid>
    </>
    
  )
}

export default Login