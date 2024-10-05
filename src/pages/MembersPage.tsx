import { Box } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import TableComponent from "../components/TableComponent";
import { useNavigate } from "react-router-dom";

const MembersPage = () => {
  const navigate=useNavigate();
  const buttonPress = () => {
    console.log("button pressed!");
  };

  const viewButtonPressed = (id:number) => {
    navigate(`/members/:${id}`)

  };

  const data = [
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
  ];

  return (
    <>
      <Box overflow="auto" width="100%" height="100%">
        <SearchHeadingBar buttonPressed={buttonPress} />
        <TableComponent
          thArray={[
            "MemberId",
            "Name",
            "Membership Expiry",
            "Phone",
            "Payment",
            "Gender",
            "Action",
          ]}
          onPressViewButton={viewButtonPressed}
          personArray={data}
          arrayType="Member"
        />
      </Box>
    </>
  );
};

export default MembersPage;
