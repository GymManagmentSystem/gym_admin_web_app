import { Box } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import TableComponent from "../components/TableComponent";
import { useNavigate } from "react-router-dom";

const MembersPage = () => {
  const navigate=useNavigate();
  const buttonPress = () => {
    navigate('/members/addMember')
  };

  const viewButtonPressed = (id:number) => {
    navigate(`/members/:${id}`)

  };

  const data = [
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      dateRegister: "2020-01-20",
      payment: "Yes",
      Gender: "Male",
    },
  ];

  return (
    <>
      <Box overflow="auto" width="100%" height="100%">
        <SearchHeadingBar buttonPressed={buttonPress} heading="All Members" buttonText="Add Member" />
        <TableComponent
          thArray={[
            "MemberId",
            "Name",
            "Membership Expiry",
            "Date Register",
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
