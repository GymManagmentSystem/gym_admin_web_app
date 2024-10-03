import { SimpleGrid } from "@chakra-ui/react";
import MembersLineChart from "./MembersLineChart";


const GraphsContainer = () => {
  return (
    <>
      {/* <HStack width="100%" height="100%" alignItems="flex-start" justifyContent="space-around" gap={4} p={3}>
      <MembersLineChart title="New Members" value={20} month="August"/>
      <MembersLineChart title="Revenue" value={200000} month="August"/>
      </HStack> */}
      <SimpleGrid width="100%" height="100%" columns={{md:1,lg:2}} spacing={2} marginLeft={2}>
      <MembersLineChart title="New Members" value={20} month="August"/>
      <MembersLineChart title="Revenue" value={200000} month="August"/>
      </SimpleGrid>
    </>
  );
};

export default GraphsContainer;
