import { Box, useToast } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import TableComponent from "../components/TableComponent";
import { useNavigate } from "react-router-dom";
import useMemeberTableDetails from "../hooks/useMemberTableDetails";
import { useState } from "react";
import useGetPackageDetails from "../hooks/useGetPackageDetails";

const MembersPage = () => {
  const navigate = useNavigate();
  const {data:packageList}=useGetPackageDetails();
  const toast = useToast();





  const buttonPress = () => {
    if(packageList && packageList.length>0){
      navigate("/app/members/addMember");
    }else{
      toast({
        title: "Cannot Add A Member",
        description: "Please Add Membership Package And Continue !",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        colorScheme: "red",
      });
    }
    
  };

  const viewButtonPressed = (id: number) => {
    navigate(`/app/members/:${id}`);
  };

  const [searchTerm, setSearchTerm] = useState<string>(""); // search Term

  const { data: memberDetails, error, isLoading } = useMemeberTableDetails();

  if (error) console.log(error.message);
  if (memberDetails) console.log(memberDetails);
  if (isLoading) console.log(isLoading);

  const filterdSearchMembers = searchTerm
    ? memberDetails?.filter((member) =>
        member.firstName.toString().includes(searchTerm)
      )
    : memberDetails;

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
          buttonPressed={buttonPress}
          heading="All Members"
          buttonText="Add Member"
          onSearch={(term) => setSearchTerm(term)}
        />
        <TableComponent
          thArray={[
            "MemberId",
            "Name",
            "Contact Number",
            "Date Register",
            "Gender",
            "Action",
          ]}
          onPressViewButton={viewButtonPressed}
          personArray={filterdSearchMembers ? filterdSearchMembers : []}
          arrayType="Member"
        />
      </Box>
    </>
  );
};

export default MembersPage;
