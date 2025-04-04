import { Box, Card, Heading, Text } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";
import useGetExercises from "../hooks/useGetExercise";
import { useState } from "react";

const ExercisePage = () => {
  const navigate = useNavigate();
  const buttonPress = () => {
    navigate("/app/exercises/addExercise");
  };
  const { data: exercises, error, isLoading } = useGetExercises();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterExercises = exercises
    ? exercises.filter((exercise) => exercise.exerciseName.includes(searchTerm))
    : exercises;

  // if(error){return error}
  // if(isLoading){return isLoading}
  return (
    <Card
      backgroundColor="#fff"
      variant="elevated"
      padding={5}
      height="100%"
      overflow="auto"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <SearchHeadingBar
        onSearch={(term) => setSearchTerm(term)}
        buttonPressed={buttonPress}
        heading="Exercises"
        buttonText="Add Exercise"
      />
      {filterExercises && filterExercises.length > 0 ? (
        filterExercises.map((exercise) => (
          <ExerciseCard
            exerciseName={exercise.exerciseName}
            imageUrl={exercise.exerciseImageUrl}
            exerciseDetails={{
              exerciseCategory: exercise.exerciseCategory,
              exerciseDescription: exercise.exerciseDescription,
              exerciseEquipment: exercise.exerciseEquipment,
              exerciseLevel: exercise.exerciseLevel,
              targetBodyArea: exercise.targetBodyArea,
              exerciseType: exercise.exerciseType,
            }}
          />
        ))
      ) : (
        <Box textAlign="center" mt={10} color="gray.600">
          <Heading size="lg">No Exercises Added Yet!</Heading>
          <Text fontSize="xl" mt={3}>
            Build your gym's workout catalog! Tap Add Exercise to create your
            first exercise.
          </Text>
        </Box>
      )}
    </Card>
  );
};

export default ExercisePage;
