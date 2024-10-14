import { Card, CardBody, HStack, Text } from "@chakra-ui/react";


const ScheduleExerciseCard = () => {
  return (
    <Card variant="elevated" backgroundColor="#fff" width="100%">
      <CardBody>
        <HStack justifyContent="space-between">
            <Text color="#000" fontWeight="medium">Exercise Name</Text>
            <Text color="#000" fontWeight="medium">Lat Pull Down</Text>
        </HStack>
        <HStack justifyContent="space-between">
            <Text color="#000" fontWeight="medium">No of Reps</Text>
            <Text color="#000" fontWeight="medium">4</Text>
        </HStack>
        <HStack justifyContent="space-between">
            <Text color="#000" fontWeight="medium">No of Sets</Text>
            <Text color="#000" fontWeight="medium">10</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ScheduleExerciseCard;
