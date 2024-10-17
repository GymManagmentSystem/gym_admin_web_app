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
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import { staffDataSchema } from "../components/StaffEditableForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../components/TextArea";

const addStaffSchema = staffDataSchema;

export type StaffAddFormData = z.infer<typeof addStaffSchema>;

const AddStaffMemberPage = () => {
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StaffAddFormData>({
    resolver: zodResolver(addStaffSchema),
  });

  const onSubmitStaffMember = (data: StaffAddFormData) => {
    console.log(data);
  };

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
              inputType="number"
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
              textInputTitle="Position"
              name="position"
              register={register}
              errors={errors.position}
              inputType="string"
              formType="addForm"
            />
            <TextInput
              textInputTitle="Registered Date"
              name="RegisterDate"
              register={register}
              errors={errors.RegisterDate}
              inputType="string"
              formType="addForm"
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
