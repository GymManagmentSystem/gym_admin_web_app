import { Button, HStack, SimpleGrid } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

export const staffDataSchema = z.object({
  firstName: z
    .string({ required_error: "FirstName is required" })
    .min(3, { message: "First Name Should have more than 03 characters" })
    .regex(/^[A-Za-z]+$/, {
      message: "First Name should only contain letters",
    }),

  lastName: z
    .string({ required_error: "LastName is required" })
    .min(3, { message: "Last Name Should have more than 03 characters" })
    .regex(/^[A-Za-z]+$/, { message: "Last Name should only contain letters" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid Email Address" }),

  contactNumber: z.string({
    required_error: "ContactNumber is required",
  })
  .length(10,{message:"Must have 10 characters"}),

  age: z
    .number({ required_error: "age is required" })
    .int({ message: "age should be whole number" })
    .gte(10, { message: "age should be above 10" })
    .lte(70, { message: "age should below 70" })
    .nonnegative({ message: "age should not be negative" }),
  address: z
    .string({ required_error: "adress is required" })
    .min(1, { message: "Address is required" }),
  position: z
    .string()
    .min(1, { message: "Position is required" })
    .optional(),  
  registeredDate: z
    .string({
      required_error: "Date Join is required",
      invalid_type_error: "Date should be in yyyy-mm-dd format",
    })
    .date(),
  qualifications: z.string().min(1, { message: "Qualifictions are required" }),
  password:z.string({ required_error: "Password is required" })
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must not exceed 20 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[@$!%*?&#]/, "Password must contain at least one special character")
  .optional(),
gender:z
.string()
.min(1, { message: "Gender is required" })
});

export type StaffFormData = z.infer<typeof staffDataSchema>;

interface StaffEditableFormProps {
  staffDetails: StaffFormData;
}

const StaffEditableForm = ({ staffDetails }: StaffEditableFormProps) => {
  const [isEditEnabled, setEditEnabled] = useState(false);
  const buttonSizes = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StaffFormData>({
    defaultValues: staffDetails,
    resolver: zodResolver(staffDataSchema),
  });

  const onSubmit = (data: StaffFormData) => {
    setEditEnabled(false);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid
          width="100%"
          mt={2}
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          gap={2}
        >
          <TextInput
            textInputTitle="First Name"
            name="firstName"
            register={register}
            errors={errors.firstName}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />
          <TextInput
            textInputTitle="Last Name"
            name="lastName"
            register={register}
            errors={errors.lastName}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />

          <TextInput
            textInputTitle="Contact Number"
            name="contactNumber"
            register={register}
            errors={errors.contactNumber}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />
          <TextInput
            textInputTitle="Email"
            name="email"
            register={register}
            errors={errors.email}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />

          <TextInput
            textInputTitle="Age"
            name="age"
            register={register}
            errors={errors.age}
            isEditEnabled={isEditEnabled}
            inputType="number"
            formType="editForm"
          />

          <TextInput
            textInputTitle="Address"
            name="address"
            register={register}
            errors={errors.address}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />
          <TextInput
            textInputTitle="Position"
            name="position"
            register={register}
            errors={errors.position}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />
          <TextInput
            textInputTitle="Registered Date"
            name="registeredDate"
            register={register}
            errors={errors.registeredDate}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />

          <TextArea
            textInputTitle="Qualifications"
            name="qualifications"
            register={register}
            errors={errors.qualifications}
            isEditEnabled={isEditEnabled}
            formType="editForm"
          />
        </SimpleGrid>

        <HStack mt={5} justifyContent="flex-start">
          <Button
            size={buttonSizes}
            variant="outline"
            textColor="#F1B900"
            borderColor="#F1B900"
            onClick={() => setEditEnabled(true)}
            disabled={isEditEnabled}
          >
            Edit
          </Button>
          <Button
            size={buttonSizes}
            variant="outline"
            textColor="#F1B900"
            borderColor="#F1B900"
          >
            Delete
          </Button>
          <Button
            size={buttonSizes}
            variant="outline"
            textColor="#F1B900"
            borderColor="#F1B900"
            type="submit"
            disabled={!isEditEnabled}
          >
            Submit
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default StaffEditableForm;
