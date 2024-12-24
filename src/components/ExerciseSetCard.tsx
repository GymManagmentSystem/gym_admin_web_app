import { Card, CardBody, HStack, Text } from "@chakra-ui/react";

interface ExerciseDetails {
  exerciseName: string;
  sets?: number;
  reps?: number[];
  duration?: number;
}

interface Exercise {
  exercise: ExerciseDetails;
}

const ExerciseSetCard = ({ exercise }: Exercise) => {
  return (
    <>
      <Card
        height="auto"
        width="100%"
        backgroundColor="#fff"
        variant="elevated"
        mt={2}
      >
        <CardBody>
          <HStack justifyContent={"space-evenly"}>
            <HStack justifyContent={"flex-start"} width="30%">
              <Text fontSize={{sm:"x-small",md:"medium",lg:"large"}} color="#000">{exercise.exerciseName}</Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="20%">
              <Text fontSize={{sm:"x-small",md:"medium",lg:"large"}} color="#000">{`${exercise.duration} minutes`}</Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="20%">
              <Text fontSize={{sm:"x-small",md:"medium",lg:"large"}} color="#000">
                {exercise.sets == 0 ? " - " : `${exercise.sets} sets`}
              </Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="30%">
              <Text fontSize={{sm:"x-small",md:"medium",lg:"large"}} color="#000">
                {exercise.reps?.length == 0 ? " - " : exercise.reps}
              </Text>
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default ExerciseSetCard;
