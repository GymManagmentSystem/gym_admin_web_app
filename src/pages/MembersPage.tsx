import { Box } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import TableComponent from "../components/TableComponent";

const MembersPage = () => {
  const buttonPress = () => {
    console.log("button pressed!");
  };

  const viewButtonPressed=()=>{
    console.log("view button pressed!")
  }
  return (
    <>
      <Box overflow="auto" width="100%" height="100%">
        <SearchHeadingBar buttonPressed={buttonPress} />
        <TableComponent thArray={['MemberId','Name','Membership Expiry','Phone','Payment','Gender','Action']} onPressViewButton={viewButtonPressed}/>
      </Box>
    </>
  );
};

export default MembersPage;
