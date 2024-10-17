import { Button, Card, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { z } from "zod";
import {  FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectFeild from "../components/Select";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";


const exerciseSchema = z.object({
  exerciseName: z
    .string()
    .min(3, { message: "Exercise name should have more than 03 characters" })
    .regex(/^[A-Za-z ]+$/, { message: "Last Name should only contain letters" }),
  exerciseType: z.string().min(1, { message: "Please Select Exercise Type" }),
  targetBodyArea: z
    .string()
    .min(1, { message: "Please Select Target Body Area" }),
  exerciseLevel: z.string().min(1, { message: "Please Select Exercise Level" }),
  exerciseCat: z
    .string()
    .min(1, { message: "Please Select Exercise Category" }),
  exerciseEquipment: z
    .string()
    .min(1, { message: "Please Select Equipment Needed" }),
  execiseDescription: z.string().min(3, {
    message: "Exercise Description should have more than 03 characters",
  }),
});

export type ExerciseFormData = z.infer<typeof exerciseSchema>;

const AddExercisePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExerciseFormData>({
    resolver: zodResolver(exerciseSchema),
  });

  const navigation=useNavigate()

  const onSubmitExerciseFormData=(data:FieldValues)=>{
    console.log(data)
  }

  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
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
      <Heading color="#000" size={{ sm: "md", md: "lg", xl: "xl" }}>
        New Exercise Details
      </Heading>
      <Card backgroundColor="#fff" variant="elevated" padding={2}>
        <form onSubmit={handleSubmit(onSubmitExerciseFormData)}>
          <SimpleGrid
            width="100%"
            mt={5}
            gap={2}
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <TextInput
              textInputTitle="First Name"
              name="exerciseName"
              register={register}
              errors={errors.exerciseName}
              inputType="string"
              formType="addForm"
            />

            <SelectFeild
              textInputTitle="Exercise Type"
              name="exerciseType"
              register={register}
              errors={errors.exerciseType}
              selectArray={[
                "Strength",
                "Cardio",
                "Flexibility",
                "Balance",
                "Endurance",
              ]}
              formType="addForm"
            />

            <SelectFeild
              textInputTitle="Target Body Area"
              name="targetBodyArea"
              register={register}
              errors={errors.targetBodyArea}
              selectArray={[
                "Chest",
                "Back",
                "Arms",
                "Legs",
                "Shoulders",
                "Core",
                "Full Body",
              ]}
              formType="addForm"
            />

            <SelectFeild
              textInputTitle="Exercise Level"
              name="exerciseLevel"
              register={register}
              errors={errors.exerciseLevel}
              selectArray={["Beginner", "Intermediate", "Advanced"]}
              formType="addForm"
            />

            <SelectFeild
              textInputTitle="Exercise Category"
              name="exerciseCat"
              register={register}
              errors={errors.exerciseCat}
              selectArray={[
                "Compound",
                "Isolation",
                "Functional",
                "Plyometrics",
                "Olympic Lifting",
              ]}
              formType="addForm"
            />

            <SelectFeild
              textInputTitle="Exercise Equipment"
              name="exerciseEquipment"
              register={register}
              errors={errors.exerciseEquipment}
              selectArray={[
                "None",
                "Dumbbells",
                "Barbell",
                "Kettlebells",
                "Resistance Bands",
                "Machines",
                "Bodyweight",
              ]}
              formType="addForm"
            />

            <TextArea
            textInputTitle="Exercise Description"
            name="execiseDescription"
            errors={errors.execiseDescription}
            register={register}
            formType="addForm"
            />




          </SimpleGrid>

          <HStack justifyContent="space-between" mt={5}>
            <Button
              variant="outline"
              color="#F1B900"
              borderColor="#F1B900"
              padding={5}
              size={responsiveButtonSize}
              _hover={{ backgroundColor: "#F1B900", color: "#fff" }}
              onClick={() => navigation("/exercises")}
            >
              Back
            </Button>
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
      </Card>
    </Card>
  );
};

export default AddExercisePage;
