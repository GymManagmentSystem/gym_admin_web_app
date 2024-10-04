import { Box } from "@chakra-ui/react"
import SearchHeadingBar from "../components/SearchHeadingBar"
import TableComponent from "../components/TableComponent"


const StaffMembersPage = () => {
    const buttonPress = () => {
        console.log("button pressed!");
      };
    
      const viewButtonPressed=()=>{
        console.log("view button pressed!")
      }

      const data = [
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
        {
          id: 1011,
          name: "Kasun Perera",
          phone: "0712334489",
          Gender: "Male",
        },
      ];
  return (
    <>
    <Box overflow="auto" width="100%" height="100%">
        <SearchHeadingBar buttonPressed={buttonPress} />
        <TableComponent thArray={['MemberId','Name','Phone','Gender','Action']} onPressViewButton={viewButtonPressed} personArray={data} arrayType="Staff"/>
      </Box>
    </>
  )
}

export default StaffMembersPage