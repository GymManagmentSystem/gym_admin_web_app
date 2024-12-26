import { Heading, HStack } from "@chakra-ui/react";
import PackageTable from "../components/PackageTable";

const PackagesPage = () => {
  return (
    <>
      <HStack>
        <Heading color="#000" size={{ sm: "md", md: "lg", xl: "xl" }}>
          Package Details
        </Heading>
      </HStack>
      <PackageTable/>
    </>
  );
};

export default PackagesPage;
