import { useLocation } from "react-router-dom";
import { ScheduleFormData } from "./AddNewSchedule";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import SelectFeild from "../components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ExerciseSetCard from "../components/ExerciseSetCard";



const workoutSchema = z.object({
  exerciseName: z.string().min(1, { message: "Should select an exercise" }),
  exerciseRepitionUnit: z.string().optional(),
  sets: z.number().optional(),
  reps: z
    .array(z.number().min(1, { message: "Reps must be greater than 0" }))
    .optional(),
  duration: z.number().optional(),
});

export type WorkOutFormData = z.infer<typeof workoutSchema>;

const AddWorkOut = () => {
  const mainCardContainerWidth = {
    sm: "100%",
    md: "90%",
    lg: "90%",
    xl: "90%",
  };
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const responsiveFontSize = { sm: "sm", md: "sm", lg: "md", xl: "md" };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<WorkOutFormData>({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      sets: 0,
      reps: [],
      duration: 0,
    },
  });

  const setCount = watch("sets") || 0;
  const selectedExerciseName = watch("exerciseName");
  let selectedExerciseType = "";

  const [addedExercisesList, setAddedExercisesList] = useState<
    WorkOutFormData[]
  >([]);

  const location = useLocation();
  const scheduleData = location.state as ScheduleFormData;
  const exerciseList = [
    { exerciseName: "Latpull down", unit: "reps" },
    { exerciseName: "Treadmill", unit: "Time" },
    { exerciseName: "Bench Press", unit: "reps" },
    { exerciseName: "Squats", unit: "reps" },
    { exerciseName: "Deadlift", unit: "reps" },
    { exerciseName: "Cycling", unit: "Time" },
    { exerciseName: "Push-ups", unit: "reps" },
    { exerciseName: "Plank", unit: "Time" },
    { exerciseName: "Bicep Curls", unit: "reps" },
    { exerciseName: "Running", unit: "Time" },
  ];
  const exerciseNameList = exerciseList.map(
    (exercise) => exercise.exerciseName
  );

  if (selectedExerciseName && exerciseList) {
    const selectedExercise = exerciseList.find(
      (exercise) => exercise.exerciseName === selectedExerciseName
    );
    if (selectedExercise) {
      selectedExerciseType = selectedExercise.unit;
    }
  }

  const onsubmitFormData = (data: WorkOutFormData) => {
    console.log(data)
    setAddedExercisesList((prevState) => [...prevState, data]);
    reset({ sets: 0, reps: [], duration: 0 });
  };

  return (
    <>
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <Card
          variant="elevated"
          backgroundColor="#fff"
          height="auto"
          width={mainCardContainerWidth}
          overflow={{ sm: "auto", md: "auto" }}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <CardBody display="flex" flexDirection="column" alignItems="center">
            <Box width="100%">
              <HStack justifyContent="flex-start">
                <Heading
                  color="#000"
                  size={responsiveFontSize}
                  fontWeight="600"
                >
                  Add WorkOut Here
                </Heading>
              </HStack>
            </Box>
            <Card
              height="auto"
              width="100%"
              backgroundColor="#fff"
              variant="elevated"
              mt={5}
            >
              <CardBody width="100%">
                <form onSubmit={handleSubmit(onsubmitFormData)}>
                  <SimpleGrid
                    width="100%"
                    mt={2}
                    gap={5}
                    columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <SelectFeild
                      selectArray={exerciseNameList}
                      textInputTitle="Exercise Name"
                      name="exerciseName"
                      register={register}
                      errors={errors.exerciseName}
                      formType="addForm"
                    />

                    {selectedExerciseType == "reps" ? (
                      <TextInput
                        textInputTitle="No:of Sets"
                        name="sets"
                        register={register}
                        errors={errors.sets}
                        inputType="number"
                        formType="addForm"
                      />
                    ) : null}

                    {selectedExerciseType == "Time" ? (
                      <TextInput
                        textInputTitle="Duartion (minutes)"
                        name="duration"
                        register={register}
                        errors={errors.duration}
                        inputType="number"
                        formType="addForm"
                      />
                    ) : null}

                    {setCount > 0 &&
                      [...Array(setCount)].map((_, index) => (
                        <TextInput
                          key={`reps-${index}`} // Ensure unique keys
                          textInputTitle={`Reps for Set ${index + 1}`}
                          name={`reps.${index}`} // Dynamically assign field names
                          register={register}
                          errors={errors.reps?.[index]} // Handle errors for each rep field
                          inputType="number"
                          formType="addForm"
                        />
                      ))}
                  </SimpleGrid>

                  <HStack justifyContent="flex-end" mt={5}>
                    <Button
                      variant="outline"
                      color="#F1B900"
                      borderColor="#F1B900"
                      padding={5}
                      size={responsiveButtonSize}
                      _hover={{ backgroundColor: "#F1B900", color: "#fff" }}
                      type="submit"
                    >
                      Next
                    </Button>
                  </HStack>
                </form>
              </CardBody>
            </Card>
            <Card
              height="auto"
              width="100%"
              backgroundColor="#fff"
              variant="elevated"
            >
              <CardBody width="100%">
                {addedExercisesList?(addedExercisesList.map((exercise)=>(<ExerciseSetCard exercise={exercise} key={exercise.exerciseName}/>))):null}
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default AddWorkOut;
