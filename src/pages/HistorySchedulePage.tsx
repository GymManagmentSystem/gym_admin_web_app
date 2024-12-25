import { Box, Card, CardBody, Heading, HStack, VStack } from "@chakra-ui/react";
import ScheduleExerciseTable from "../components/ScheduleExerciseTable";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGetPastSchedule from "../hooks/useGetPastSchedule";

const HistorySchedulePage = () => {
    const {id}=useParams()
    const memberId=id?parseInt(id.substring(1)):0
    const {data:pastScheduleList,error,isLoading}=useGetPastSchedule(memberId)
    console.log(id);

  const responsiveCardWidth = { sm: "100%", md: "100%", lg: "100%" };
  const responsiveFontSize = { sm: "sm", md: "sm", lg: "md", xl: "md" };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Card
        margin={4}
        variant="elevated"
        backgroundColor="#fff"
        height="auto"
        overflow="auto"
        width={responsiveCardWidth}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <CardBody>
          <HStack justifyContent="flex-start">
            {/* <Text color="#000" size={responsiveFontSize} fontWeight="600">Member Id : 1011</Text> */}
            <Heading color="#000" size={responsiveFontSize} fontWeight="600">
              Member Name : Kasun Rajitha
            </Heading>
          </HStack>
          <HStack justifyContent="flex-start" mt={5}>
            <Heading color="#000" size={responsiveFontSize} fontWeight="600">
              Schedule History
            </Heading>
          </HStack>
          <VStack alignItems="flex-start" mt={2} justifyContent="center">
            {pastScheduleList && (
              <ScheduleExerciseTable scheduleArray={pastScheduleList} />
            )}
            
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default HistorySchedulePage;
