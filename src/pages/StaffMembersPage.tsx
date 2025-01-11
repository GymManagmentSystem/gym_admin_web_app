import { Box } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import TableComponent from "../components/TableComponent";
import { useNavigate } from "react-router-dom";
import useStaffMemberTableDetails from "../hooks/useStaffMemberTableDetails";
import { useState } from "react";

const StaffMembersPage = () => {
  const navigate = useNavigate();
  const buttonPress = () => {
    navigate("/app/staff/addStaffMember");
  };

  const viewButtonPressed = (id: number) => {
    navigate(`/app/staff/:${id}`);
  };
  const [searchTerm, setSearchTerm] = useState<string>();
  const {
    data: staffMemberDetails,
    error,
    isLoading,
  } = useStaffMemberTableDetails();
  const filterMembersArray = searchTerm
    ? staffMemberDetails?.filter((member) =>
        member.memberId.toString().includes(searchTerm)
      )
    : staffMemberDetails;

  if (isLoading) {
    return isLoading;
  }
  if (error) {
    return error.message;
  }
  return (
    <>
      <Box
        overflow="auto"
        width="100%"
        height="100%"
        sx={{
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Edge
          },
        }}
      >
        <SearchHeadingBar
          onSearch={(term) => setSearchTerm(term)}
          buttonPressed={buttonPress}
          heading="Staff Members"
          buttonText="Add Member"
        />
        <TableComponent
          thArray={["MemberId", "Name", "Phone", "Gender", "Action"]}
          onPressViewButton={viewButtonPressed}
          personArray={filterMembersArray ? filterMembersArray : []}
          arrayType="Staff"
        />
      </Box>
    </>
  );
};

export default StaffMembersPage;
