import { Box, Card, CardBody, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ScheduleExerciseCard from "../components/ScheduleExerciseCard";
import ScheduleExerciseTable from "../components/ScheduleExerciseTable";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CurrentSchedulePage = () => {
  const memberId=useParams()
  const currentSchedule=[{
    scheduleNo:1,
    scheduleType:'Legs',
    schedule:[
      {
      exerciseName:'Back Squat',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Front Squat',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Bulgarian Split Squat',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Leg Press',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Hack Squat',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Romanian Deadlift',
      reps:"4",
      sets:"10"
    },
  ]
  },
  {
    scheduleNo:2,
    scheduleType:'Chests',
    schedule:[
      {
      exerciseName:'Barbell Bench Press',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Dumbbell Bench Press',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Incline Bench Press',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Decline Press',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Machine Chest Press',
      reps:"4",
      sets:"10"
    },
    {
      exerciseName:'Push-Up',
      reps:"4",
      sets:"10"
    },
    ]
  }
]
const [currentSchdeule,setCurrentSchedule]=useState(currentSchedule)
const responsiveCardWidth={sm:"100%",md:"100%",lg:"100%"}
const responsiveFontSize={sm:"sm",md:"sm",lg:"md",xl:"lg"}

  return (
    <Box width="100%" height="100%" display="flex">
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
            <VStack alignItems="flex-start">
                <Heading color="#000" size={responsiveFontSize} fontWeight="600">Member Id : 1011</Heading>
                <Heading color="#000" size={responsiveFontSize} fontWeight="600">Member Name : Kasun Rajitha</Heading>
            </VStack>
            <HStack justifyContent="flex-start" mt={10}>
                <Heading color="#000" size={responsiveFontSize} fontWeight="600">Current Schedule</Heading>
            </HStack>
            <VStack alignItems="flex-start" mt={2} justifyContent="center">
                <ScheduleExerciseTable scheduleArray={currentSchdeule}/>
            </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CurrentSchedulePage;
