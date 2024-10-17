import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldError, UseFormRegister, Path } from "react-hook-form";
import { MemberFormData } from "./MemberEditableForm";
import { StaffFormData } from "./StaffEditableForm";
import { PaymentFormData } from "../pages/AddPaymentPage";


interface TextInputProps<
  T extends MemberFormData | StaffFormData | PaymentFormData
> {
  textInputTitle: string;
  name: Path<T>;
  isEditEnabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldError;
  inputType: "number" | "string";
  formType: "editForm" | "addForm";
}

//editForm is for forms to controll the disabale ness of the input feilds
//in addForm we cannot controll disabel ness of the input feild

const TextInput = <
  T extends MemberFormData | StaffFormData | PaymentFormData
>({
  textInputTitle,
  name,
  register,
  errors,
  isEditEnabled,
  inputType: type,
  formType,
}: TextInputProps<T>) => {
  const isNumber = type === "number" ? true : false;
  return (
    <>
      <FormControl isInvalid={!!errors}>
        <FormLabel
          color="#000"
          fontSize={{ sm: "smaller", md: "md", lg: "lg", xl: "lg" }}
        >
          {textInputTitle}
        </FormLabel>
        <Input
          size={{ sm: "xs", md: "sm", lg: "lg", xl: "lg" }}
          border="2px solid #E6E6E6"
          color="#000"
          _hover={{ borderColor: "#F1B900" }}
          width="100%"
          isDisabled={formType == "addForm" ? false : !isEditEnabled}
          {...register(name, {
            valueAsNumber: isNumber,
          })}
        />
        {errors?.message && (
          <FormErrorMessage color="#f44336">{errors.message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default TextInput;
