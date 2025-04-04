import {
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import { staffDataSchema } from "../components/StaffEditableForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../components/TextArea";
import SelectFeild from "../components/Select";
import useAddStaffMember from "../hooks/useAddStaffMember";
import { useQueryClient } from "@tanstack/react-query";

const addStaffSchema = staffDataSchema;

export type StaffAddFormData = z.infer<typeof addStaffSchema>;

const AddStaffMemberPage = () => {
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const navigation = useNavigate();
  const addStaffMember = useAddStaffMember();
  const toast = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StaffAddFormData>({
    resolver: zodResolver(addStaffSchema),
    defaultValues: {
      registeredDate: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmitStaffMember = (data: StaffAddFormData) => {
    addStaffMember.mutate(data, {
      onSuccess: (data) => {
        toast({
          title: "User Added Successful!",
          description: "User Added Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          colorScheme: "yellow",
        });
        queryClient.invalidateQueries(["staffMemberTableDetails"]);
      },
      onError: (error) => {
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
    console.log(data);
  };

  const selectedPosition = watch("position");

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
        New Staff Member Details
      </Heading>
      <Card backgroundColor="#fff" variant="elevated" padding={2}>
        <form onSubmit={handleSubmit(onSubmitStaffMember)}>
          <SimpleGrid
            width="100%"
            mt={5}
            gap={2}
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <TextInput
              textInputTitle="First Name"
              name="firstName"
              register={register}
              errors={errors.firstName}
              inputType="string"
              formType="addForm"
            />
            <TextInput
              textInputTitle="Last Name"
              name="lastName"
              register={register}
              errors={errors.lastName}
              inputType="string"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Contact Number"
              name="contactNumber"
              register={register}
              errors={errors.contactNumber}
              inputType="string"
              formType="addForm"
            />
            <TextInput
              textInputTitle="Email"
              name="email"
              register={register}
              errors={errors.email}
              inputType="string"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Age"
              name="age"
              register={register}
              errors={errors.age}
              inputType="number"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Address"
              name="address"
              register={register}
              errors={errors.address}
              inputType="string"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Registered Date"
              name="registeredDate"
              register={register}
              errors={errors.registeredDate}
              inputType="string"
              formType="addForm"
            />

            <SelectFeild
              selectArray={["Admin", "Instructor", "Maintaince", "Helper"]}
              textInputTitle="Position"
              name="position"
              register={register}
              errors={errors.position}
              formType="addForm"
            />

             <SelectFeild
                selectArray={["Male","Female"]}
                textInputTitle="Gender"
                name="gender"
                register={register}
                errors={errors.gender}
                formType="addForm"
              />

            <TextInput
              textInputTitle="Password"
              name="password"
              register={register}
              errors={errors.password}
              inputType="password"
              formType="addForm"
              isEditEnabled={selectedPosition == "Admin" ? false : true}
            />

            <TextArea
              textInputTitle="Qualifications"
              name="qualifications"
              register={register}
              errors={errors.qualifications}
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
              onClick={() => navigation("/staff")}
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

export default AddStaffMemberPage;
