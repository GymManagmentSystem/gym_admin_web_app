import { SimpleGrid } from "@chakra-ui/react";
import MembersLineChart from "./MembersLineChart";
import { PackageCount, Income } from "../hooks/useGetDashBordData";

interface GraphsContainerProps {
  dataList1: PackageCount[];
  dataList2: Income[];
}

const GraphsContainer = ({ dataList1, dataList2 }: GraphsContainerProps) => {
  return (
    <>
      {/* <HStack width="100%" height="100%" alignItems="flex-start" justifyContent="space-around" gap={4} p={3}>
      <MembersLineChart title="New Members" value={20} month="August"/>
      <MembersLineChart title="Revenue" value={200000} month="August"/>
      </HStack> */}
      <SimpleGrid
        width="100%"
        height="100%"
        columns={{ sm: 1, md: 1, lg: 2 }}
        spacing={2}
        marginLeft={2}
      >
        <MembersLineChart
          title="New Members"
          value={dataList1[0].memberCount}
          month={dataList1[0].month}
          dataList={dataList1}
        />
        <MembersLineChart
          title="Revenue"
          value={dataList2[0].amount}
          month={dataList2[0].month}
          dataList={dataList2}
        />
      </SimpleGrid>
    </>
  );
};

export default GraphsContainer;
