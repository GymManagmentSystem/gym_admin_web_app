import { Button, Card, CardBody, HStack, Text } from "@chakra-ui/react";

interface ExerciseDetails {
  exerciseName: string;
  sets?: number;
  reps?: string;
  duration?: number;
}

interface Exercise {
  exercise: ExerciseDetails;
  onDelete:(term:string)=>void
}

const ExerciseSetCard = ({ exercise,onDelete }: Exercise) => {

  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };

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
            <HStack justifyContent={"flex-start"} width="20%">
              <Text fontSize={{sm:"xx-small",md:"medium",lg:"large"}} color="#000">{exercise.exerciseName}</Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="20%">
              <Text fontSize={{sm:"xx-small",md:"medium",lg:"large"}} color="#000">{`${exercise.duration} minutes`}</Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="15%">
              <Text fontSize={{sm:"xx-small",md:"medium",lg:"large"}} color="#000">
                {exercise.sets == 0 ? " - " : `${exercise.sets} sets`}
              </Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="30%">
              <Text fontSize={{sm:"xx-small",md:"medium",lg:"large"}} color="#000">
                {exercise.reps?.length == 0 ? " - " : exercise.reps}
              </Text>
            </HStack>
            <HStack justifyContent={"flex-start"} width="15%">
              <Button
              variant="ghost"
              color="#F1B900"
              borderColor="#F1B900"
              fontSize={{sm:"xx-small",md:"medium",lg:"large"}}
              size={responsiveButtonSize}
              _hover={{  color: "red" }}
              onClick={()=>onDelete(exercise.exerciseName)}
              >
                {"Delete"}
              </Button>
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default ExerciseSetCard;
