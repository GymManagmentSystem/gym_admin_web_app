import { SimpleGrid } from "@chakra-ui/react";
import MembersLineChart from "./MembersLineChart";
import { PackageCount, Income } from "../hooks/useGetDashBordData";

interface GraphsContainerProps {
  dataList1: PackageCount[];
  dataList2: Income[];
}

const GraphsContainer = ({ dataList1, dataList2 }: GraphsContainerProps) => {
  console.log(`New Members : ${JSON.stringify(dataList1)}`);
  console.log(`Monthly revenue ${JSON.stringify(dataList2)}`)
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
          value={
            dataList1.find(
              (entry) =>
                entry.month === new Date().toLocaleString('default', { month: 'long' }) &&
                entry.year === new Date().getFullYear()
            )?.memberCount || 0
          }
          month={new Date().toLocaleString('default', { month: 'long' })}
          dataList={dataList1}
        />
        <MembersLineChart
          title="Revenue"
          value={
            dataList2.find(
              (entry) =>
                entry.month === new Date().toLocaleString('default', { month: 'long' }) &&
                entry.year === new Date().getFullYear()
            )?.amount || 0
          }
          month={new Date().toLocaleString('default', { month: 'long' })}
          dataList={dataList2}
        />
      </SimpleGrid>
    </>
  );
};

export default GraphsContainer;
