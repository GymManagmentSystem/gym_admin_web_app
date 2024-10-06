import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldError,UseFormRegister } from "react-hook-form";
import { FormData } from "./MemberEditableForm";

interface TextInputProps {
  textInputTitle: string;
  name: keyof FormData;
  isEditEnabled: boolean;
  register: UseFormRegister<FormData>;
  errors?: FieldError;
  type: "number" | "string";
}

const TextInput = ({
  textInputTitle,
  name,
  register,
  errors,
  isEditEnabled,
  type,
}: TextInputProps) => {
  const isNumber = type === "number" ? true : false;
  return (
    <>
      <FormControl isInvalid={!!errors}>
        <FormLabel color="#000" fontSize={{sm:"smaller",md:"md",lg:"lg",xl:"lg"}}>{textInputTitle}</FormLabel>
        <Input
        size={{sm:"xs",md:"sm",lg:"lg",xl:"lg"}}
          border="2px solid #E6E6E5"
          textColor="#000"
          focusBorderColor="#F1B900"
          width="100%"
          isDisabled={!isEditEnabled}
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
