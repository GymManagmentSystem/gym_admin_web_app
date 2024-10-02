import { Box, SimpleGrid } from "@chakra-ui/react";
import TopHomeCard from "./TopHomeCard";
import { RiProhibitedLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { MdPerson } from "react-icons/md";

const TopHomeCardContainer = () => {
  return (
    <>
      <SimpleGrid columns={{ md: 2, lg: 4 }} gap={5} padding={2}>
        <TopHomeCard title1="Current" title2="Members" count="40">
          <Box
            as={IoIosPeople}
            color="#F1B900"
            height={{ md: "30px", lg: "35px" }}
            width={{ md: "30px", lg: "35px" }}
          />
        </TopHomeCard>
        <TopHomeCard title1="Total" title2="Exercises" count="10">
          <Box
            as={CgGym}
            color="#F1B900"
            height={{ md: "30px", lg: "35px" }}
            width={{ md: "30px", lg: "35px" }}
          />
        </TopHomeCard>
        <TopHomeCard title1="Expired" title2="Members" count="20">
          <Box
            as={RiProhibitedLine}
            color="#F1B900"
            height={{ md: "30px", lg: "35px" }}
            width={{ md: "30px", lg: "35px" }}
          />
        </TopHomeCard>
        <TopHomeCard title1="Total" title2="Instructors" count="2">
          <Box
            as={MdPerson}
            color="#F1B900"
            height={{ md: "30px", lg: "35px" }}
            width={{ md: "30px", lg: "35px" }}
          />
        </TopHomeCard>
      </SimpleGrid>
    </>
  );
};

export default TopHomeCardContainer;
