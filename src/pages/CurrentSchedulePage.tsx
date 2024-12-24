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

const CurrentSchedulePage = () => {
  const {id} = useParams();
  console.log(id?.slice(1))
  const navigate=useNavigate();
  const currentSchedule = [
    {
      scheduleNo: 1,
      scheduleType: "Legs",
      schedule: [
        {
          exerciseName: "Back Squat",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Front Squat",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Bulgarian Split Squat",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Leg Press",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Hack Squat",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Romanian Deadlift",
          reps: "4",
          sets: "10",
        },
      ],
    },
    {
      scheduleNo: 2,
      scheduleType: "Chests",
      schedule: [
        {
          exerciseName: "Barbell Bench Press",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Dumbbell Bench Press",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Incline Bench Press",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Decline Press",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Machine Chest Press",
          reps: "4",
          sets: "10",
        },
        {
          exerciseName: "Push-Up",
          reps: "4",
          sets: "10",
        },
      ],
    },
  ];
  const [currentSchdeule, setCurrentSchedule] = useState(currentSchedule);
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
          <HStack justifyContent="flex-start">
            {/* <Text color="#000" size={responsiveFontSize} fontWeight="600">Member Id : 1011</Text> */}
            <Heading color="#000" size={responsiveFontSize} fontWeight="600">
              Member Name : Kasun Rajitha
            </Heading>
          </HStack>
          <HStack justifyContent="flex-start" mt={5}>
            <Heading color="#000" size={responsiveFontSize} fontWeight="600">
              Current Schedule
            </Heading>
          </HStack>
          <VStack alignItems="flex-start" mt={2} justifyContent="center">
            <ScheduleExerciseTable scheduleArray={currentSchdeule} />
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
        onClick={()=>navigate(`/app/schedule/historySchedule/:${id?.slice(1)}`)}
      >
        View Schedule History
      </Button>
    </Box>
  );
};

export default CurrentSchedulePage;
