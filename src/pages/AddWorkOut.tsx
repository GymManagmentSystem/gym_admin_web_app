import { useLocation, useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import SelectFeild from "../components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ExerciseSetCard from "../components/ExerciseSetCard";
import useGetExerciseNameList from "../hooks/useGetExerciseNameList";
import useAddSchedule from "../hooks/useAddSchedule";
import { useQueryClient } from "@tanstack/react-query";

const workoutSchema = z.object({
  exerciseName: z.string().min(1, { message: "Should select an exercise" }),
  sets: z
    .number()
    .nonnegative({ message: "Sets must not be negative" })
    .optional(),
  reps: z
    .array(z.string().min(1, { message: "Reps must be greater than 0" }))
    .optional(),
  duration: z
    .number()
    .nonnegative({ message: "Sets must not be negative" })
    .optional(),

});


//the updated interface is for storing the reps value as a string
//reps values are stored as array of string
//in db it is saved as string

interface UpdatedWorkOutSchema{
  exerciseName:string,
  sets?:number,
  reps?:string,
  duration?:number
}

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

  const queryClient = useQueryClient();
  const toast=useToast();
  const navigate=useNavigate()

  const {
    data: exerciseDetailsList,
    error,
    isLoading,
  } = useGetExerciseNameList();
  console.log(exerciseDetailsList);



  const addSchedule = useAddSchedule();

  const setCount = watch("sets") || 0;
  const selectedExerciseName = watch("exerciseName");
  let selectedExerciseType = "";

  const [addedExercisesList, setAddedExercisesList] = useState<
    UpdatedWorkOutSchema[]
  >([]);

  const location = useLocation();
  const scheduleData = location.state as ScheduleFormData;

  if (selectedExerciseName && exerciseDetailsList) {
    const selectedExercise = exerciseDetailsList.find(
      (exercise) => exercise.exerciseName === selectedExerciseName
    );
    if (selectedExercise) {
      selectedExerciseType = selectedExercise.exerciseUnit;
    }
  }

  const onsubmitFormData = (data: WorkOutFormData) => {

    //this will convert  reps values in the formData array to a string

    const transformedData: UpdatedWorkOutSchema = {
      ...data,
      reps: data.reps?.join("-") || "", // Convert to string if present, default to an empty string
    };
    setAddedExercisesList((prevState) => [...prevState, transformedData]);
    reset({ sets: 0, reps: [], duration: 0 });
  };

  const handleExericseDelete = (exerciseName: string) => {
    setAddedExercisesList((prevList) =>
      prevList.filter((exercise) => exercise.exerciseName !== exerciseName)
    );
  };

  const onSubmitScheduleData = () => {
   
    const schedulePayLoad = {
      schedule: scheduleData,
      exerciseList: addedExercisesList,
    };

    console.log(`schedule payload ${JSON.stringify(schedulePayLoad)}`)
    addSchedule.mutate(schedulePayLoad,{
      onSuccess: (data) => {
        console.log(data);
        toast({
          title: "Schedule Added Successfully!",
          description: "Schedule Added Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          colorScheme: "yellow",
        });
        navigate("/app/schedule")
      },

      onError: (error) => {
        console.log(
          `error has been occured:${
            error instanceof Error ? error.message : "unexpected error"
          }`
        );
        toast({
          title: "Error!",
          description:
            error instanceof Error ? error.message : "unexpected error",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          colorScheme: "red",
        });
      },
    });
    console.log("schedule details", schedulePayLoad);
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
                      selectArray={
                        exerciseDetailsList
                          ? exerciseDetailsList.map(
                              (exercise) => exercise.exerciseName
                            )
                          : []
                      }
                      textInputTitle="Exercise Name"
                      name="exerciseName"
                      register={register}
                      errors={errors.exerciseName}
                      formType="addForm"
                    />

                    {selectedExerciseType == "Reps" ? (
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

                    {selectedExerciseType == "Reps" &&
                      setCount > 0 &&
                      [...Array(setCount)].map((_, index) => (
                        <TextInput
                          key={`reps-${index}`} // Ensure unique keys
                          textInputTitle={`Reps for Set ${index + 1}`}
                          name={`reps.${index}`} // Dynamically assign field names
                          register={register}
                          errors={errors.reps?.[index]} // Handle errors for each rep field
                          inputType="string"
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
                      Add Exercise
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
                {addedExercisesList
                  ? addedExercisesList.map((exercise) => (
                      <ExerciseSetCard
                        exercise={exercise}
                        key={exercise.exerciseName}
                        onDelete={handleExericseDelete}
                      />
                    ))
                  : null}
              </CardBody>
            </Card>
            <Card
              height="auto"
              width="100%"
              backgroundColor="#fff"
              variant="elevated"
            >
              <CardBody width="100%">
                <HStack justifyContent="flex-end">
                  <Button
                    variant="outline"
                    color="#F1B900"
                    borderColor="#F1B900"
                    padding={5}
                    size={responsiveButtonSize}
                    _hover={{ backgroundColor: "#F1B900", color: "#fff" }}
                    onClick={onSubmitScheduleData}
                  >
                    Save Schedule
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default AddWorkOut;
