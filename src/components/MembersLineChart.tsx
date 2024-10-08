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


interface MembersLineChartProps{
    title:string,
    month:string,
    value:number
}

const MembersLineChart = ({title,month,value}:MembersLineChartProps) => {
  const titleFontSize={sm:"1rem",md:"1.5rem",lg:"1.5rem",xl:"1.5rem"}
  const valueFontSize={sm:"1.1rem",md:"1.5rem",lg:"1.5rem",xl:"1.5rem"}
  const monthFontSize={sm:"1rem",md:"1.5rem",lg:"1.5rem",xl:"1.5rem"}
  const cardHeight={ sm:"95%",md: "95%", lg: "60%" }
  const cardWidth={ sm:"100%",md: "100%", lg: "95%" }
  const data = [
    {
      name: "Page A",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      amt: 2100,
    },
  ];
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
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#F1B900" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MembersLineChart;
