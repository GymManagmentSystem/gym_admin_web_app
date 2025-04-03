import { Card, Heading, HStack, VStack } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PackageCount,Income } from "../hooks/useGetDashBordData";


interface MembersLineChartProps{
    title:string,
    month:string,
    value:number
    dataList:PackageCount[] | Income[]
}

const MembersLineChart = ({title,month,value,dataList}:MembersLineChartProps) => {
  const titleFontSize={sm:"1rem",md:"1.5rem",lg:"1.5rem",xl:"1.5rem"}
  const valueFontSize={sm:"1.1rem",md:"1.5rem",lg:"1.5rem",xl:"1.5rem"}
  const monthFontSize={sm:"1rem",md:"1.5rem",lg:"1.5rem",xl:"1.5rem"}
  const cardHeight={ sm:"95%",md: "95%", lg: "60%" }
  const cardWidth={ sm:"100%",md: "100%", lg: "95%" }

  console.log("value is ",value)
  

  const yAxisDataKey="amount" in dataList[0]?"amount":"memberCount";

  return (
    <Card
      backgroundColor="#fff"
      width={cardWidth}
      height={cardHeight}
      variant="elevated"
      marginTop={6}
      padding={3}
      borderRadius={20}
    >
      <HStack justifyContent="space-around" marginBottom={5}>
        <VStack alignItems="flex-start">
          <Heading
            color="#F1B900"
            fontSize={titleFontSize}
            fontWeight="semibold"
          >
            {title}
          </Heading>
          <Heading color="#000" fontSize={valueFontSize}>
            {value}
          </Heading>
        </VStack>
        <Heading color="#000" fontSize={monthFontSize} fontWeight="semibold">
          {month}
        </Heading>
      </HStack>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={dataList}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yAxisDataKey} stroke="#F1B900" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MembersLineChart;
