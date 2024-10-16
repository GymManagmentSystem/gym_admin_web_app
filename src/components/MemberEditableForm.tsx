import { Button, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "./TextInput";

export const memberEditableDataSchema = z.object({
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

  contactNumber: z.number({
    required_error: "ContactNumber is required",
    invalid_type_error: "ContactNumber must be a number",
  }),
  dateJoin: z
    .string({
      required_error: "Date Join is required",
      invalid_type_error: "Date should be in yyyy-mm-dd format",
    })
    .date()
    .optional(),
  age: z
    .number({ required_error: "age is required" })
    .int({ message: "age should be whole number" })
    .gte(10, { message: "age should be above 10" })
    .lte(70, { message: "age should below 70" })
    .nonnegative({ message: "age should not be negative" }),

  weight: z
    .number({ message: "weight is required" })
    .nonnegative({ message: "age should not be negative" }),

  address: z.string().min(1,{message:"address is required"}),
});

export type MemberEditableFormData = z.infer<typeof memberEditableDataSchema>;

interface MemberEditableFormProps {
  memberDetails: MemberEditableFormData;
}

const MemberEditableForm = ({ memberDetails }: MemberEditableFormProps) => {
  const [isEditEnabled, setEditEnabled] = useState(false);
  const buttonSizes = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberEditableFormData>({
    defaultValues: memberDetails,
    resolver: zodResolver(memberEditableDataSchema),
  });

  const onSubmit = (data: MemberEditableFormData) => {
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
            inputType="number"
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
            textInputTitle="Date Join"
            name="dateJoin"
            register={register}
            errors={errors.dateJoin}
            isEditEnabled={isEditEnabled}
            inputType="string"
            formType="editForm"
          />

          <TextInput
            textInputTitle="Weight in (Kg)"
            name="weight"
            register={register}
            errors={errors.weight}
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
        </SimpleGrid>

        <HStack mt={5}>
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

export default MemberEditableForm;
