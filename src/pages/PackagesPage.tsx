import { Box, Heading, HStack } from "@chakra-ui/react";
import PackageTable from "../components/PackageTable";
import useGetPackageDetails from "../hooks/useGetPackageDetails";
Box;

const PackagesPage = () => {
  const { data: packageList, error, isLoading } = useGetPackageDetails();
  return (
    <>
      <HStack>
        <Heading color="#000" size={{ sm: "md", md: "lg", xl: "xl" }}>
          Package Details
        </Heading>
      </HStack>
      <Box mt={10}>{packageList && <PackageTable packageList={packageList} />}</Box>
    </>
  );
};

export default PackagesPage;
