import { Badge, Box, Heading, HStack, Text, useToast } from "@chakra-ui/react";
import PackageTable from "../components/PackageTable";
import useGetPackageDetails from "../hooks/useGetPackageDetails";
import SearchHeadingBar from "../components/SearchHeadingBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PackagesPage = () => {
  const { data: packageList, error, isLoading } = useGetPackageDetails();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const toast = useToast();

  const buttonPress = () => {
    navigate("/app/packages/addPackage");
  };

  const filteredPackageList = searchTerm
    ? packageList?.filter((pkg) =>
        pkg.packageName.toString().includes(searchTerm)
      )
    : packageList;

  return (
    <>
      <SearchHeadingBar
        buttonPressed={buttonPress}
        heading="Packages"
        buttonText="Add Package"
        onSearch={(term) => setSearchTerm(term)}
      />
      <Box
        mt={10}
        sx={{
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Edge
          },
        }}
      >
        {packageList && packageList.length > 0 ? (
          <PackageTable
            packageList={filteredPackageList ? filteredPackageList : []}
          />
        ) : (
          <Box textAlign="center" mt={10} color="gray.600">
            <Heading size="lg">Ready to Begin?</Heading>
            <Text fontSize="xl" mt={3}>
              Your package list is currently empty. Tap Add Package to create your first one!</Text>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PackagesPage;
