import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";

import ScheduleExerciseTable from "../components/ScheduleExerciseTable";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useGetCurrentSchedule from "../hooks/useGetCurrentSchedule";

const CurrentSchedulePage = () => {
  const {id} = useParams();
  const memberId=id?parseInt(id.substring(1)):0
  const navigate=useNavigate();
  const {data:currentScheduleList,error,isLoading}=useGetCurrentSchedule(memberId);
  const responsiveCardWidth = { sm: "100%", md: "100%", lg: "100%" };
  const responsiveFontSize = { sm: "sm", md: "sm", lg: "md", xl: "md" };
  const responsiveButtonSize = { sm: "md", md: "md", lg: "lg", xl: "lg" };

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
          
          <HStack justifyContent="flex-start" mt={5}>
            <Heading color="#000" size={responsiveFontSize} fontWeight="600">
              Current Schedule
            </Heading>
          </HStack>
          <VStack alignItems="flex-start" mt={2} justifyContent="center">
            {currentScheduleList && (
              <ScheduleExerciseTable scheduleArray={currentScheduleList} />
            )}
          </VStack>
        </CardBody>
      </Card>
      <Button
        variant="outline"
        color="#F1B900"
        borderColor="#F1B900"
        padding={5}
        size={responsiveButtonSize}
        _hover={{ backgroundColor: "#F1B900", color: "#fff" }}
        onClick={()=>navigate(`/app/schedule/historySchedule/:${memberId}`)}
      >
        View Schedule History
      </Button>
    </Box>
  );
};

export default CurrentSchedulePage;
