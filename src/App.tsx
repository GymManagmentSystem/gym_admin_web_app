import { Grid, GridItem } from "@chakra-ui/react";
import Heading from "./components/Heading";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Grid
      templateAreas={`"header header"
                          "sideBar main"
                          "footer footer"`}
      templateColumns={'285px 1fr'}
      templateRows={'95px 1fr 39px'}
      w="100%"
      h="100%"
    >
      <GridItem area="header">
        <Heading/>
      </GridItem>
      <GridItem area="sideBar" style={{ backgroundColor: "red" }}>
        <SideBar/>
      </GridItem>
      <GridItem area="main" style={{ backgroundColor: "blue" }}>
        hii
      </GridItem>
      <GridItem area="footer" style={{ backgroundColor: "#F1B900" }}>
        morning
      </GridItem>
    </Grid>
  );
};

export default App;
