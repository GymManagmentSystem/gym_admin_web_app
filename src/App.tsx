import { Grid, GridItem } from "@chakra-ui/react";
import Heading from "./components/Heading";
import SideBar from "./components/SideBar";
import TopHomeCardContainer from "./components/TopHomeCardContainer";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                          "sideBar main"
                          "footer footer"`}
        templateColumns={{ md: "192px 1fr", lg: "285px 1fr" }}
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
        <GridItem area="main" style={{ backgroundColor: "#fff" }}>
          <TopHomeCardContainer/>
        </GridItem>
        <GridItem area="footer" style={{ backgroundColor: "#F1B900" }}>
          morning
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
