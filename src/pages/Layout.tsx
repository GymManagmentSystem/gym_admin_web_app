import { Grid, GridItem} from '@chakra-ui/react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Heading from '../components/Heading'




const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                          "sideBar main"
                          "footer footer"`}
        templateColumns={{ md: "192px 1fr", lg: "285px 1fr",xl:"285px 1fr" }}
        templateRows={"95px 1fr 39px"}
        w="100%"
        h="100vh"
        
      >
        <GridItem area="header">
          <Heading />
        </GridItem>
        <GridItem
          area="sideBar"
          style={{
            backgroundColor: "#fff",
            borderRight: "2px solid",
            borderRightColor: "#F1B900",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SideBar />
        </GridItem>
        <GridItem area="main" style={{ backgroundColor: "#fff" }} overflow={{md:"auto",lg:"hidden",xl:"hidden"}} height="100%" padding={2}>
           <Outlet/>
        </GridItem>
        <GridItem area="footer" style={{ backgroundColor: "#F1B900" }}>
        </GridItem>
      </Grid>
      
    </>
  )
}

export default Layout